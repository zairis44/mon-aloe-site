#!/usr/bin/env node
/**
 * Export Google Search Console -> data/analytics/
 *
 * Zéro dépendance npm : le JWT est signé avec le module crypto natif de Node.
 *
 * Prérequis (une seule fois, côté Google) :
 *   1. console.cloud.google.com -> nouveau projet
 *   2. Activer l'API "Google Search Console API"
 *   3. Créer un compte de service, générer une clé JSON, la télécharger
 *   4. Dans Search Console -> Paramètres -> Utilisateurs : ajouter l'e-mail du
 *      compte de service (client_email du JSON) en lecture restreinte
 *
 * Config, dans le fichier .env à la racine du repo :
 *   GSC_SITE_URL=sc-domain:espritaloe.fr
 *   GSC_KEY_FILE=C:\Users\rafae\.secrets\gsc-service-account.json
 *
 * La clé JSON doit vivre HORS du repo (et hors OneDrive de préférence).
 *
 * Usage :
 *   node scripts/gsc-export.mjs              # 28 derniers jours
 *   node scripts/gsc-export.mjs --jours 90
 *   node scripts/gsc-export.mjs --depuis 2026-08-01 --jusqu 2026-08-27
 */

import { createSign } from 'node:crypto';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const RACINE = path.resolve(import.meta.dirname, '..');
const DOSSIER_SORTIE = path.join(RACINE, 'data', 'analytics');

// ── .env ────────────────────────────────────────────────────────────
async function chargerEnv() {
  const f = path.join(RACINE, '.env');
  if (!existsSync(f)) return;
  for (const ligne of (await readFile(f, 'utf8')).split('\n')) {
    const m = ligne.match(/^\s*([^#=\s]+)\s*=\s*(.*)$/);
    if (m) process.env[m[1]] ??= m[2].trim().replace(/^["']|["']$/g, '');
  }
}

// ── Arguments ───────────────────────────────────────────────────────
function args() {
  const a = process.argv.slice(2);
  const lire = (nom) => {
    const i = a.indexOf(`--${nom}`);
    return i !== -1 ? a[i + 1] : undefined;
  };
  const iso = (d) => d.toISOString().slice(0, 10);
  let jusqu = lire('jusqu');
  let depuis = lire('depuis');
  const jours = Number(lire('jours') ?? 28);

  if (!jusqu) {
    // La GSC a 2 à 3 jours de latence : on s'arrête il y a 3 jours.
    const d = new Date();
    d.setDate(d.getDate() - 3);
    jusqu = iso(d);
  }
  if (!depuis) {
    const d = new Date(jusqu);
    d.setDate(d.getDate() - jours);
    depuis = iso(d);
  }
  return { depuis, jusqu };
}

// ── Auth : JWT signé -> access token ────────────────────────────────
async function jeton(cle) {
  const maintenant = Math.floor(Date.now() / 1000);
  const b64 = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');

  const entete = b64({ alg: 'RS256', typ: 'JWT' });
  const charge = b64({
    iss: cle.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    exp: maintenant + 3600,
    iat: maintenant,
  });

  const signature = createSign('RSA-SHA256')
    .update(`${entete}.${charge}`)
    .sign(cle.private_key, 'base64url');

  const rep = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${entete}.${charge}.${signature}`,
    }),
  });

  const data = await rep.json();
  if (!rep.ok) throw new Error(`Auth Google refusée : ${JSON.stringify(data)}`);
  return data.access_token;
}

// ── Requête Search Analytics ────────────────────────────────────────
async function interroger(token, site, corps) {
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`;
  const rep = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(corps),
  });
  const data = await rep.json();
  if (!rep.ok) throw new Error(`API GSC : ${JSON.stringify(data)}`);
  return data.rows ?? [];
}

// ── CSV ─────────────────────────────────────────────────────────────
function versCsv(lignes, colonnes) {
  const echapper = (v) => {
    const s = String(v ?? '');
    return /[",\n;]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const entete = [...colonnes, 'clics', 'impressions', 'ctr', 'position'].join(',');
  const corps = lignes.map((r) =>
    [
      ...r.keys.map(echapper),
      r.clicks,
      r.impressions,
      (r.ctr * 100).toFixed(2),
      r.position.toFixed(1),
    ].join(',')
  );
  return [entete, ...corps].join('\n');
}

// ── Main ────────────────────────────────────────────────────────────
async function main() {
  await chargerEnv();

  const site = process.env.GSC_SITE_URL;
  const fichierCle = process.env.GSC_KEY_FILE;

  if (!site || !fichierCle) {
    console.error('Manque GSC_SITE_URL ou GSC_KEY_FILE dans .env — voir l\'en-tête de ce fichier.');
    process.exit(1);
  }
  if (!existsSync(fichierCle)) {
    console.error(`Clé de compte de service introuvable : ${fichierCle}`);
    process.exit(1);
  }

  const cle = JSON.parse(await readFile(fichierCle, 'utf8'));
  const { depuis, jusqu } = args();

  console.log(`Search Console : ${site}`);
  console.log(`Période : ${depuis} -> ${jusqu}`);

  const token = await jeton(cle);
  const base = { startDate: depuis, endDate: jusqu, rowLimit: 1000, dataState: 'final' };

  const exports = [
    { nom: 'requetes', dimensions: ['query'], colonnes: ['requete'] },
    { nom: 'pages', dimensions: ['page'], colonnes: ['page'] },
    { nom: 'requetes-par-page', dimensions: ['page', 'query'], colonnes: ['page', 'requete'] },
    { nom: 'jours', dimensions: ['date'], colonnes: ['date'] },
  ];

  await mkdir(DOSSIER_SORTIE, { recursive: true });

  for (const e of exports) {
    const lignes = await interroger(token, site, { ...base, dimensions: e.dimensions });
    const nomFichier = `gsc-${e.nom}_${depuis}_${jusqu}.csv`;
    await writeFile(path.join(DOSSIER_SORTIE, nomFichier), versCsv(lignes, e.colonnes), 'utf8');
    console.log(`  ${nomFichier} — ${lignes.length} lignes`);
  }

  console.log(`\nTerminé. Fichiers dans data/analytics/`);
  console.log(`Dans Claude Code : « utilise l'agent analytics pour analyser les derniers exports GSC »`);
}

main().catch((e) => {
  console.error(`\nÉchec : ${e.message}`);
  process.exit(1);
});
