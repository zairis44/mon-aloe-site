/**
 * fetch-from-forever.mjs
 * ──────────────────────────────────────────────────────────────
 * Récupère les images manquantes directement depuis foreverliving.fr
 * en utilisant la référence produit présente dans chaque .md
 *
 * UTILISATION :
 *   node fetch-from-forever.mjs
 * ──────────────────────────────────────────────────────────────
 */

import fs    from 'fs';
import path  from 'path';
import https from 'https';
import http  from 'http';

const PRODUITS_DIR = './src/content/produits';
const IMAGES_DIR   = './public/images/produits';

fs.mkdirSync(IMAGES_DIR, { recursive: true });

// ── Téléchargement ─────────────────────────────────────────────
function downloadUrl(url, dest, redirectCount = 0) {
  return new Promise((resolve, reject) => {
    if (redirectCount > 5) return reject(new Error('Trop de redirections'));
    const lib = url.startsWith('https') ? https : http;
    const req = lib.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120 Safari/537.36',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
        'Accept-Language': 'fr-FR,fr;q=0.9',
        'Referer': 'https://www.foreverliving.fr/',
      }
    }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307) {
        return downloadUrl(res.headers.location, dest, redirectCount + 1).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
      file.on('error', reject);
    });
    req.on('error', reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

// ── Fetch HTML d'une page ──────────────────────────────────────
function fetchHtml(url, redirectCount = 0) {
  return new Promise((resolve, reject) => {
    if (redirectCount > 5) return reject(new Error('Trop de redirections'));
    const lib = url.startsWith('https') ? https : http;
    const req = lib.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Language': 'fr-FR,fr;q=0.9',
      }
    }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307) {
        const loc = res.headers.location;
        const next = loc.startsWith('http') ? loc : `https://www.foreverliving.fr${loc}`;
        return fetchHtml(next, redirectCount + 1).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      let body = '';
      res.setEncoding('utf8');
      res.on('data', chunk => body += chunk);
      res.on('end', () => resolve(body));
    });
    req.on('error', reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

// ── Extrait l'URL de l'image produit depuis le HTML ────────────
function extractProductImage(html, baseUrl) {
  const patterns = [
    // og:image (Open Graph — très fiable)
    /property="og:image"\s+content="([^"]+)"/,
    /<meta\s+content="([^"]+)"\s+property="og:image"/,
    // Image principale produit (sélecteurs communs)
    /class="[^"]*product[^"]*image[^"]*"[^>]*src="([^"]+\.(?:webp|jpg|jpeg|png))"/i,
    /class="[^"]*product-image[^"]*"[^>]*>\s*<img[^>]+src="([^"]+\.(?:webp|jpg|jpeg|png))"/i,
    /<img[^>]+id="[^"]*product[^"]*image[^"]*"[^>]+src="([^"]+\.(?:webp|jpg|jpeg|png))"/i,
    // Fallback : première grande image
    /<img[^>]+src="(https?:\/\/[^"]+(?:products|produit)[^"]+\.(?:webp|jpg|jpeg|png))"/i,
    // Données structurées JSON-LD
    /"image"\s*:\s*["']?(https?:\/\/[^"'\s,}]+\.(?:webp|jpg|jpeg|png))/i,
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match && match[1]) {
      let imgUrl = match[1];
      // Résoudre les URLs relatives
      if (imgUrl.startsWith('//')) imgUrl = 'https:' + imgUrl;
      if (imgUrl.startsWith('/')) imgUrl = new URL(baseUrl).origin + imgUrl;
      return imgUrl;
    }
  }
  return null;
}

// ── Lecture des .md ────────────────────────────────────────────
const mdFiles = fs.readdirSync(PRODUITS_DIR).filter(f => f.endsWith('.md'));
console.log(`\n🔍 ${mdFiles.length} fiche(s) produit trouvée(s)\n`);
console.log('─'.repeat(60));

let success = 0;
let errors  = 0;
let skipped = 0;
const manualList = [];

for (const mdFile of mdFiles) {
  const mdPath  = path.join(PRODUITS_DIR, mdFile);
  let   content = fs.readFileSync(mdPath, 'utf8');
  let   modified = false;

  // Slug
  const slugMatch = content.match(/^slug:\s*["']?([^"'\n]+)["']?/m);
  if (!slugMatch) continue;
  const slug = slugMatch[1].trim();

  // Extension attendue
  const imgMatch = content.match(/^image:\s*["']?([^"'\n]+)["']?/m);
  const currentImg = imgMatch ? imgMatch[1].trim() : '';
  const ext = path.extname(currentImg).toLowerCase() || '.webp';
  const newFilename = `${slug}${ext}`;
  const newFullPath = path.join(IMAGES_DIR, newFilename);
  const newLocalPath = `/images/produits/${newFilename}`;

  // Déjà présent ?
  if (fs.existsSync(newFullPath)) {
    console.log(`  ✅ ${newFilename} — déjà présent`);
    // Met à jour le .md si le chemin est encore l'ancien
    if (currentImg !== newLocalPath) {
      content = content.replace(/^image:\s*["']?[^"'\n]+["']?/m, `image: "${newLocalPath}"`);
      fs.writeFileSync(mdPath, content, 'utf8');
    }
    skipped++;
    continue;
  }

  // lienCommande pour retrouver l'URL produit
  const lienMatch = content.match(/^lienCommande:\s*["']?([^"'\n]+)["']?/m);
  if (!lienMatch || !lienMatch[1].trim()) {
    console.log(`  ⚠️  ${mdFile} — pas de lienCommande`);
    manualList.push({ slug, mdFile });
    errors++;
    continue;
  }

  const shopUrl = lienMatch[1].trim().replace('http://', 'https://');
  console.log(`\n  📄 ${slug}`);
  process.stdout.write(`     🌐 Récupération sur foreverliving.fr ... `);

  try {
    const html     = await fetchHtml(shopUrl);
    const imgUrl   = extractProductImage(html, shopUrl);

    if (!imgUrl) {
      console.log(`❌ image non trouvée dans le HTML`);
      manualList.push({ slug, shopUrl, mdFile });
      errors++;
      continue;
    }

    process.stdout.write(`OK\n     ⬇️  Téléchargement ... `);
    await downloadUrl(imgUrl, newFullPath);
    const sizeKb = (fs.statSync(newFullPath).size / 1024).toFixed(0);
    console.log(`✅ (${sizeKb} Ko)`);

    // Met à jour le .md
    content = content.replace(/^image:\s*["']?[^"'\n]+["']?/m, `image: "${newLocalPath}"`);
    fs.writeFileSync(mdPath, content, 'utf8');
    console.log(`     💾 ${mdFile} mis à jour`);
    success++;

  } catch (err) {
    console.log(`❌ ${err.message}`);
    manualList.push({ slug, shopUrl: shopUrl, mdFile });
    errors++;
  }
}

// ── Résumé ─────────────────────────────────────────────────────
console.log('\n' + '─'.repeat(60));
console.log(`\n✅ Terminé !\n`);
console.log(`   Téléchargées : ${success}`);
console.log(`   Déjà présentes : ${skipped}`);
if (errors > 0) {
  console.log(`   ⚠️  Non récupérées : ${errors}\n`);
  console.log('📋 Images à télécharger manuellement :');
  console.log('   → Allez sur chaque URL, clic droit sur l\'image → Enregistrer');
  console.log(`   → Renommez le fichier et placez-le dans : public/images/produits/\n`);
  manualList.forEach(item => {
    console.log(`   📦 ${item.slug}`);
    if (item.shopUrl) console.log(`      URL : ${item.shopUrl}`);
    console.log(`      Fichier attendu : ${item.slug}.webp`);
  });
}
console.log(`\n👉 Redémarre "npm run dev" pour vérifier.\n`);
