// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://fikremariam1331.github.io',
  base: '/FM-menu',
  vite: {
    plugins: [tailwindcss()]
  }
});