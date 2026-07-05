/**
 * rename-images-seo.mjs
 * ──────────────────────────────────────────────────────────────
 * Renomme les images déjà présentes dans public/images/produits/
 * d'après le SLUG du produit (SEO-friendly)
 * Met à jour les chemins dans les fichiers .md automatiquement
 *
 * UTILISATION :
 *   node rename-images-seo.mjs
 * ──────────────────────────────────────────────────────────────
 */

import fs   from 'fs';
import path from 'path';

const PRODUITS_DIR = './src/content/produits';
const IMAGES_DIR   = './public/images/produits';

// ── Lecture des .md ────────────────────────────────────────────
const mdFiles = fs.readdirSync(PRODUITS_DIR).filter(f => f.endsWith('.md'));

console.log(`\n🔍 ${mdFiles.length} fiche(s) produit trouvée(s)\n`);
console.log('─'.repeat(60));

let renamed  = 0;
let skipped  = 0;
let errors   = 0;

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

  // Trouve tous les chemins locaux /images/produits/... dans ce fichier
  const localRegex = /\/images\/produits\/([^"'\s\]]+)/g;
  const matches    = [...content.matchAll(localRegex)];

  if (matches.length === 0) {
    console.log(`  ⏭️  ${mdFile} — aucun chemin image local trouvé`);
    continue;
  }

  console.log(`\n  📄 ${mdFile}  (slug: ${slug})`);

  for (let i = 0; i < matches.length; i++) {
    const oldFilename  = matches[i][1];
    const oldLocalPath = `/images/produits/${oldFilename}`;
    const oldFullPath  = path.join(IMAGES_DIR, oldFilename);

    // Détermine l'extension
    const ext         = path.extname(oldFilename).toLowerCase() || '.webp';
    const suffix      = i === 0 ? '' : `-${i + 1}`;
    const newFilename = `${slug}${suffix}${ext}`;
    const newLocalPath = `/images/produits/${newFilename}`;
    const newFullPath  = path.join(IMAGES_DIR, newFilename);

    // Déjà bien nommé ?
    if (oldFilename === newFilename) {
      console.log(`     ✅ déjà SEO : ${newFilename}`);
      skipped++;
      continue;
    }

    // Le fichier source existe-t-il ?
    if (!fs.existsSync(oldFullPath)) {
      console.log(`     ⚠️  fichier introuvable : ${oldFilename}`);
      errors++;
      continue;
    }

    // Renommage
    try {
      fs.renameSync(oldFullPath, newFullPath);
      console.log(`     ✏️  ${oldFilename}`);
      console.log(`        → ${newFilename}`);

      // Met à jour le .md
      content  = content.replaceAll(oldLocalPath, newLocalPath);
      modified = true;
      renamed++;
    } catch (err) {
      console.log(`     ❌ Erreur : ${err.message}`);
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
console.log(`\n✅ Renommage terminé !\n`);
console.log(`   Renommées    : ${renamed}`);
console.log(`   Déjà OK      : ${skipped}`);
if (errors > 0) console.log(`   ⚠️  Erreurs   : ${errors}`);
console.log(`\n👉 Redémarre "npm run dev" pour vérifier.\n`);
