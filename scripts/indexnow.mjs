#!/usr/bin/env node
/**
 * scripts/indexnow.mjs — Prévient Bing (et Yandex, Seznam…) des pages à recrawler via IndexNow.
 * Bing alimente ChatGPT Search et Copilot : plus vite il voit les mises à jour, mieux c'est.
 *
 * Usage, APRÈS le déploiement Vercel :
 *   npm run indexnow                 → toutes les URL du sitemap en ligne
 *   npm run indexnow -- /blog/xxx/   → seulement les chemins indiqués
 *
 * La clé est publique par conception : le fichier public/485bd7ec5f9cad7bacf57427ff613aed.txt prouve que le site en est propriétaire.
 */
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

const args = process.argv.slice(2);
const urlList = args.length ? args.map((p) => new URL(p, SITE).toString()) : await urlsDuSitemap();

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: 'espritaloe.fr', key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow : ${urlList.length} URL envoyées → HTTP ${res.status} ${res.statusText}`);
if (res.status >= 400) process.exit(1);
