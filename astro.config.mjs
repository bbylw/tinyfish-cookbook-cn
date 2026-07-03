import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// GitHub Pages 自定义域名部署到根域 tinyfish.ndjp.net，
// base 默认 '/'；如需子路径部署，通过环境变量 BASE 注入。
export default defineConfig({
  site: 'https://tinyfish.ndjp.net',
  base: process.env.BASE || '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
