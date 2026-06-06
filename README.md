# 个人学术主页 (Personal Academic Page)

基于 [Astro](https://astro.build/) 构建的个人学术主页，组件化、数据驱动，支持中英文双语切换与深色/浅色主题切换，构建产物为纯静态文件，可直接部署到 GitHub Pages。

## 目录结构

```
src/
├── assets/
│   ├── images/            # 图片资源（已按类型归档）
│   │   ├── avatar.jpg
│   │   ├── publications/  # 论文配图
│   │   └── logos/         # 机构 Logo
│   └── styles/
│       └── global.css     # 主题变量 / 动画 / 全局样式
├── data/                  # 【维护内容只需改这里】
│   ├── personal.ts        # 个人信息、简介、社交链接
│   ├── nav.ts             # 导航栏锚点
│   ├── news.ts            # 最新动态
│   ├── publications.ts    # 论文列表
│   └── experience.ts      # 教育与经历
├── components/            # 视图组件（结构模板）
├── layouts/
│   └── Base.astro         # 页面骨架 + 字体/图标 + 交互脚本
└── pages/
    └── index.astro        # 组装各组件
```

## 如何更新内容

无需改动任何 HTML，只编辑 `src/data/` 下对应的数据文件即可。

- 新增一篇论文：在 `src/data/publications.ts` 的数组里加一项。配图放进 `src/assets/images/publications/` 并 `import` 进来即可（`image`、`abstract`、`links` 均为可选字段）。
- 修改个人简介 / 社交链接：编辑 `src/data/personal.ts`。
- 新增动态：编辑 `src/data/news.ts`。
- 新增教育/工作经历：编辑 `src/data/experience.ts`。

## 本地开发

```bash
npm install      # 安装依赖
npm run dev      # 启动开发服务器 (默认 http://localhost:4321)
npm run build    # 构建到 dist/
npm run preview  # 本地预览构建产物
```

## 部署到 GitHub Pages

本仓库已包含 `.github/workflows/deploy.yml`，使用官方 `withastro/action` 自动构建并部署。

### 推荐方式：用户主页仓库

1. 在 `astro.config.mjs` 中把 `site` 改成 `https://<你的用户名>.github.io`，`base` 保持 `'/'`。
2. 新建名为 `<你的用户名>.github.io` 的 GitHub 仓库，推送本项目代码到 `main` 分支。
3. 仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
4. 之后每次 push 到 `main` 会自动构建部署，访问 `https://<你的用户名>.github.io`。

### 备选方式：项目仓库（子路径）

如果部署在 `https://<用户名>.github.io/<仓库名>/`：

1. 在 `astro.config.mjs` 中设置 `base: '/<仓库名>/'`，`site: 'https://<用户名>.github.io'`。
2. 其余步骤同上。

## 技术栈

- Astro（静态站点生成）
- Tailwind CSS（`@astrojs/tailwind`，配置见 `tailwind.config.mjs`）
- Font Awesome 图标 + Fira Code 字体（通过 CDN 引入）
- `astro:assets` 图片优化（自动压缩头像与论文配图）
