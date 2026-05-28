/**
 * recover-and-rename.mjs
 * ──────────────────────────────────────────────────────────────
 * Reconstruit les URLs Webflow CDN depuis les chemins locaux
 * présents dans les .md, re-télécharge les images et les renomme
 * en noms SEO-friendly basés sur le slug du produit.
 *
 * UTILISATION :
 *   node recover-and-rename.mjs
 * ──────────────────────────────────────────────────────────────
 */

import fs    from 'fs';
import path  from 'path';
import https from 'https';
import http  from 'http';

const PRODUITS_DIR = './src/content/produits';
const IMAGES_DIR   = './public/images/produits';
const WEBFLOW_BASE = 'https://cdn.prod.website-files.com/6801177f2f85fbffb253e442';

fs.mkdirSync(IMAGES_DIR, { recursive: true });

// ── Téléchargement avec suivi de redirections ──────────────────
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

// ── Lecture des .md ────────────────────────────────────────────
const mdFiles = fs.readdirSync(PRODUITS_DIR).filter(f => f.endsWith('.md'));

console.log(`\n🔍 ${mdFiles.length} fiche(s) produit trouvée(s)\n`);
console.log('─'.repeat(60));

let downloaded = 0;
let renamed    = 0;
let skipped    = 0;
let errors     = 0;

for (const mdFile of mdFiles) {
  const mdPath  = path.join(PRODUITS_DIR, mdFile);
  let   content = fs.readFileSync(mdPath, 'utf8');
  let   modified = false;

  // Récupère le slug
  const slugMatch = content.match(/^slug:\s*["']?([^"'\n]+)["']?/m);
  if (!slugMatch) {
    console.log(`  ⚠️  ${mdFile} — slug introuvable, ignoré`);
    continue;
  }
  const slug = slugMatch[1].trim();

  // Trouve tous les chemins /images/produits/... dans le fichier
  const localRegex = /\/images\/produits\/([^"'\s\]]+)/g;
  const matches    = [...content.matchAll(localRegex)];

  if (matches.length === 0) {
    console.log(`  ⏭️  ${mdFile} — aucun chemin image trouvé`);
    continue;
  }

  console.log(`\n  📄 ${mdFile}  (slug: ${slug})`);

  for (let i = 0; i < matches.length; i++) {
    const oldFilename   = matches[i][1];
    const oldLocalPath  = `/images/produits/${oldFilename}`;
    const ext           = path.extname(oldFilename).toLowerCase() || '.webp';
    const suffix        = i === 0 ? '' : `-${i + 1}`;
    const newFilename   = `${slug}${suffix}${ext}`;
    const newLocalPath  = `/images/produits/${newFilename}`;
    const newFullPath   = path.join(IMAGES_DIR, newFilename);

    // Déjà présent avec le bon nom SEO ?
    if (fs.existsSync(newFullPath)) {
      console.log(`     ✅ déjà présent : ${newFilename}`);
      if (oldLocalPath !== newLocalPath) {
        content  = content.replaceAll(oldLocalPath, newLocalPath);
        modified = true;
      }
      skipped++;
      continue;
    }

    // Reconstruit l'URL CDN Webflow depuis le nom de fichier
    const cdnUrl = `${WEBFLOW_BASE}/${encodeURIComponent(oldFilename)}`;

    process.stdout.write(`     ⬇️  ${newFilename} ... `);
    try {
      await download(cdnUrl, newFullPath);
      const sizeKb = (fs.statSync(newFullPath).size / 1024).toFixed(0);
      console.log(`✅ (${sizeKb} Ko)`);

      content  = content.replaceAll(oldLocalPath, newLocalPath);
      modified = true;
      downloaded++;
      renamed++;
    } catch (err) {
      console.log(`❌ ${err.message}`);
      errors++;
    }
  }

  if (modified) {
    fs.writeFileSync(mdPath, content, 'utf8');
    console.log(`     💾 ${mdFile} mis à jour`);
  }
}

// ── Résumé ─────────────────────────────────────────────────────
console.log('\n' + '─'.repeat(60));
console.log(`\n✅ Récupération terminée !\n`);
console.log(`   Téléchargées + renommées : ${downloaded}`);
console.log(`   Déjà présentes           : ${skipped}`);
if (errors > 0) {
  console.log(`\n   ⚠️  ${errors} erreur(s) — le CDN Webflow a peut-être supprimé ces images.`);
  console.log(`   Dans ce cas, il faudra les remplacer manuellement.`);
}
console.log(`\n👉 Redémarre "npm run dev" pour vérifier.\n`);
