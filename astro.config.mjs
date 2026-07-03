import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// GitHub 项目页面部署在子路径 /tinyfish-cookbook-cn/ 下，
// 通过环境变量 BASE 在 CI 中注入，本地 dev 保持根路径。
export default defineConfig({
  site: 'https://bbylw.github.io',
  base: process.env.BASE || '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
