// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// lastmod réel des articles : updatedDate sinon pubDate (frontmatter).
// Les autres pages n'ont pas de date fiable : pas de lastmod (mieux qu'une date de build identique partout).
const lastmodBlog = new Map();
for (const f of readdirSync('./src/content/blog').filter((n) => n.endsWith('.md'))) {
  const head = readFileSync(`./src/content/blog/${f}`, 'utf8').split('---')[1] ?? '';
  const date = head.match(/^updatedDate:\s*"?([0-9-]+)/m)?.[1] ?? head.match(/^pubDate:\s*"?([0-9-]+)/m)?.[1];
  if (date) lastmodBlog.set(`https://espritaloe.fr/blog/${f.replace(/\.md$/, '')}/`, new Date(date));
}

export default defineConfig({
  site: 'https://espritaloe.fr',

  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/mentions-legales') &&
        !page.includes('/confidentialite') &&
        !page.includes('/bilan-un-mois-apres-c9') && // noindex tant que non publié : retirer cette ligne à la publication
        !page.includes('/404'),
      serialize(item) {
        const d = lastmodBlog.get(item.url);
        return d ? { url: item.url, lastmod: d.toISOString() } : { url: item.url };
      },
    }),
  ],

  build: {
    inlineStylesheets: 'always',
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
