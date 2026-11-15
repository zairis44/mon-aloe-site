#!/usr/bin/env node
/**
 * scripts/indexnow.mjs — Prévient Bing (et Yandex, Seznam…) des pages à recrawler via IndexNow.
 * Bing alimente ChatGPT Search et Copilot : plus vite il voit les mises à jour, mieux c'est.
 *
 * Automatique : .github/workflows/indexnow.yml l'appelle après chaque déploiement Production
 * réussi, avec la liste des fichiers modifiés (--fichiers …).
 *
 * À la main (rarement utile) :
 *   npm run indexnow                    → toutes les URL du sitemap en ligne
 *   npm run indexnow -- /blog/xxx/      → seulement les chemins indiqués
 *   npm run indexnow -- --fichiers src/content/blog/xxx.md …   → pages liées à ces fichiers
 *
 * La clé est publique par conception : le fichier public/<clé>.txt prouve que le site en est propriétaire.
 */
import { existsSync, readFileSync } from 'node:fs';

const SITE = 'https://espritaloe.fr';
const KEY = '485bd7ec5f9cad7bacf57427ff613aed';

async function urlsDuSitemap() {
  const index = await (await fetch(`${SITE}/sitemap-index.xml`)).text();
  const sitemaps = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const urls = [];
  for (const sm of sitemaps) {
    const xml = await (await fetch(sm)).text();
    urls.push(...[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
  }
  return urls;
}

/** Fichiers communes à beaucoup de pages : leur modification justifie un envoi complet. */
const GLOBAL = [/^src\/(layouts|components|styles|data|lib)\//, /^src\/content\.config\.ts$/, /^astro\.config\./, /^vercel\.json$/,
  /^src\/pages\/.*\[/, /^public\/llms\.txt$/];

/** Fichier modifié → chemin(s) de page. 'TOUT' = envoyer tout le sitemap. */
function cheminsPour(f) {
  if (GLOBAL.some((re) => re.test(f))) return 'TOUT';
  let m;
  if ((m = f.match(/^src\/content\/blog\/(.+)\.mdx?$/))) return [`/blog/${m[1]}/`, '/blog/'];
  if ((m = f.match(/^src\/content\/produits\/(.+)\.md$/))) {
    const slug = existsSync(f) ? (readFileSync(f, 'utf8').match(/^slug:\s*"?([^"\n]+)/m)?.[1] ?? m[1]) : m[1];
    return [`/produits/${slug.trim()}/`, '/produits/'];
  }
  if ((m = f.match(/^src\/content\/glossaire\/(.+)\.md$/))) return [`/glossaire/${m[1]}/`, '/glossaire/'];
  if (/^src\/content\/journal\//.test(f)) return ['/mon-journal-c9/'];
  if (/^src\/content\/recettes\//.test(f)) return ['/recettes-c9/'];
  if ((m = f.match(/^src\/pages\/(.+)\.astro$/))) {
    if (m[1] === '404') return [];
    const p = m[1].replace(/(^|\/)index$/, '');
    return [p ? `/${p}/` : '/'];
  }
  return []; // docs, scripts, images… : rien à signaler
}

const args = process.argv.slice(2);
let urlList;
if (args[0] === '--fichiers') {
  const chemins = new Set();
  let tout = false;
  for (const f of args.slice(1)) {
    const c = cheminsPour(f);
    if (c === 'TOUT') { tout = true; break; }
    c.forEach((x) => chemins.add(x));
  }
  urlList = tout ? await urlsDuSitemap() : [...chemins].map((p) => new URL(p, SITE).toString());
} else {
  urlList = args.length ? args.map((p) => new URL(p, SITE).toString()) : await urlsDuSitemap();
}

if (!urlList.length) {
  console.log('IndexNow : aucune page publique modifiée, rien à envoyer.');
  process.exit(0);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: 'espritaloe.fr', key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow : ${urlList.length} URL envoyées → HTTP ${res.status} ${res.statusText}`);
console.log(urlList.join('\n'));
if (res.status >= 400) process.exit(1);
