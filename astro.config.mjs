// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
//
// 部署到 GitHub Pages：
// - 若仓库名为 <用户名>.github.io（用户主页），保持 base: '/'，并把 site 改成 'https://<用户名>.github.io'
// - 若是项目仓库（如 user.github.io/personal-page），改为 base: '/personal-page/'，site 同理
export default defineConfig({
  // 仓库 bochiman/jhouharry.github.io → Pages URL 为 https://bochiman.github.io/jhouharry.github.io/
  // 若之后确认是用户主页仓库，把 base 改为 '/'
  site: 'https://bochiman.github.io',
  base: '/jhouharry.github.io',
  integrations: [tailwind()],
});
