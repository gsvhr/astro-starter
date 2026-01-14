// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://sudexpert-tlt.ru',
  trailingSlash: 'ignore',
});
