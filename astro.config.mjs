// @ts-check
import vercelStatic from '@astrojs/vercel/static';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
  }),
});
