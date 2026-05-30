// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
<<<<<<< HEAD
import sitemap from '@astrojs/sitemap';
=======
>>>>>>> 75a4dceb7b0c1f0328825babad017a3bd7eeb7f3

export default defineConfig({
  site: 'https://espritaloe.fr',

<<<<<<< HEAD
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/mentions-legales') &&
        !page.includes('/confidentialite') &&
        !page.includes('/livraison') &&
        !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],

=======
>>>>>>> 75a4dceb7b0c1f0328825babad017a3bd7eeb7f3
  build: {
    inlineStylesheets: 'always',
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
