/**
 * migrate-images.mjs  —  v2 avec renommage SEO
 * ────────────────────────────────────────────────────────────────
 * Télécharge toutes les images Webflow CDN depuis src/content/produits/*.md
 * Les renomme d'après le SLUG du produit (SEO-friendly)
 * Met à jour les chemins dans les fichiers .md automatiquement
 *
 * UTILISATION :
 *   1. Placez ce fichier à la RACINE de votre projet Astro
 *   2. Dans le terminal VS Code : node migrate-images.mjs
 * ────────────────────────────────────────────────────────────────
 */

import fs    from 'fs';
import path  from 'path';
import https from 'https';
import http  from 'http';

// ── Config ────────────────────────────────────────────────────────
const PRODUITS_DIR = './src/content/produits';
const OUTPUT_DIR   = './public/images/produits';
const CDN_HOST     = 'cdn.prod.website-files.com';
// ─────────────────────────────────────────────────────────────────

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

// ── Téléchargement avec suivi de redirections ─────────────────────
function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const lib  = url.startsWith('https') ? https : http;

    lib.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        try { fs.unlinkSync(dest); } catch {}
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        try { fs.unlinkSync(dest); } catch {}
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (err) => {
      try { fs.unlinkSync(dest); } catch {}
      reject(err);
    });
  });
}

// ── Extrait l'extension depuis une URL ───────────────────────────
function getExtension(url) {
  const clean = url.split('?')[0];
  const ext   = path.extname(decodeURIComponent(clean)).toLowerCase();
  // Garde uniquement les extensions image connues
  return ['.webp', '.jpg', '.jpeg', '.png', '.gif', '.avif'].includes(ext)
    ? ext
    : '.webp'; // fallback
}

// ── Extrait le slug depuis le frontmatter YAML ───────────────────
function extractSlug(content) {
  const match = content.match(/^slug:\s*["']?([^"'\n]+)["']?/m);
  return match ? match[1].trim() : null;
}

// ── Extrait une valeur de champ depuis le frontmatter ────────────
function extractField(content, field) {
  const regex = new RegExp(`^${field}:\\s*["']?([^"'\\n]+)["']?`, 'm');
  const match = content.match(regex);
  return match ? match[1].trim() : null;
}

// ── Vérifie si une URL est du CDN Webflow ────────────────────────
function isWebflowUrl(url) {
  return url.includes(CDN_HOST);
}

// ── Lecture des fichiers .md ─────────────────────────────────────
const mdFiles = fs.readdirSync(PRODUITS_DIR).filter(f => f.endsWith('.md'));

if (mdFiles.length === 0) {
  console.log('❌ Aucun fichier .md trouvé dans', PRODUITS_DIR);
  process.exit(1);
}

console.log(`\n🔍 ${mdFiles.length} fiche(s) produit trouvée(s)`);
console.log(`📁 Destination : ${OUTPUT_DIR}\n`);
console.log('─'.repeat(60));

let totalImages   = 0;
let successImages = 0;
let errorImages   = 0;
let skippedImages = 0;

for (const mdFile of mdFiles) {
  const mdPath   = path.join(PRODUITS_DIR, mdFile);
  let   content  = fs.readFileSync(mdPath, 'utf8');
  let   modified = false;

  // Récupère le slug pour le nommage SEO
  const slug = extractSlug(content);
  if (!slug) {
    console.log(`  ⚠️  ${mdFile} — slug non trouvé, fichier ignoré`);
    continue;
  }

  // Trouve toutes les URLs du CDN Webflow dans ce fichier
  const urlRegex = new RegExp(
    `https?://${CDN_HOST.replace(/\./g, '\\.')}[^"'\\s\\]\\)]+`,
    'g'
  );
  const allUrls  = [...new Set(content.match(urlRegex) || [])];
  const cdnUrls  = allUrls.filter(isWebflowUrl);

  if (cdnUrls.length === 0) {
    console.log(`  ⏭️  ${mdFile} — pas d'image Webflow CDN`);
    continue;
  }

  console.log(`\n  📄 ${mdFile}  (slug: ${slug})`);

  // Traitement de chaque URL
  // La 1ère URL = image principale → slug.ext
  // Les suivantes = images secondaires → slug-2.ext, slug-3.ext...
  for (let i = 0; i < cdnUrls.length; i++) {
    const url      = cdnUrls[i];
    const ext      = getExtension(url);
    const suffix   = i === 0 ? '' : `-${i + 1}`;
    const filename = `${slug}${suffix}${ext}`;
    const localPath = path.join(OUTPUT_DIR, filename);
    const astroPath = `/images/produits/${filename}`;

    totalImages++;

    // Vérifie si la valeur actuelle dans le .md est déjà locale
    if (!isWebflowUrl(url)) {
      console.log(`     ✅ déjà local : ${filename}`);
      skippedImages++;
      continue;
    }

    // Ne re-télécharge pas si déjà présent sur le disque
    if (fs.existsSync(localPath)) {
      const sizeKb = (fs.statSync(localPath).size / 1024).toFixed(0);
      console.log(`     ✅ déjà présent : ${filename} (${sizeKb} Ko)`);
      content  = content.replaceAll(url, astroPath);
      modified = true;
      successImages++;
      continue;
    }

    // Téléchargement
    process.stdout.write(`     ⬇️  ${filename} ... `);
    try {
      await download(url, localPath);
      const sizeKb = (fs.statSync(localPath).size / 1024).toFixed(0);
      console.log(`✅  (${sizeKb} Ko)`);
      content  = content.replaceAll(url, astroPath);
      modified = true;
      successImages++;
    } catch (err) {
      console.log(`❌  ${err.message}`);
      errorImages++;
    }
  }

  // Sauvegarde le .md mis à jour
  if (modified) {
    fs.writeFileSync(mdPath, content, 'utf8');
    console.log(`     💾 ${mdFile} mis à jour`);
  }
}

// ── Résumé final ─────────────────────────────────────────────────
console.log('\n' + '─'.repeat(60));
console.log(`\n✅ Migration terminée !\n`);
console.log(`   Images téléchargées : ${successImages}`);
if (skippedImages > 0) console.log(`   Déjà en local       : ${skippedImages}`);
if (errorImages   > 0) console.log(`   ⚠️  Erreurs          : ${errorImages} (URL expirée ou inaccessible)`);
console.log(`   📁 Dossier          : ${OUTPUT_DIR}`);
console.log(`\n📋 Nommage SEO appliqué :`);
console.log(`   image principale → {slug}.webp`);
console.log(`   images galerie   → {slug}-2.webp, {slug}-3.webp...`);
console.log(`\n👉 Redémarre "npm run dev" pour voir le résultat.\n`);
