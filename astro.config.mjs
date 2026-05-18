// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mon-aloe-site.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
