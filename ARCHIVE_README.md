# Monumen Ground Zero Bali — 完整网站归档

该归档包含可运行的 **Astro 7 + Tailwind CSS + TypeScript** 网站源代码、锁定依赖、Cloudflare Workers Static Assets 配置、预构建的 `dist/` 文件、favicon 以及两张纪念碑实景照片。

## 本地运行与构建

项目要求 Node.js `22.13.0` 与 pnpm `10.4.1`。安装依赖并启动开发环境：

```bash
pnpm install --frozen-lockfile
pnpm dev
```

生产检查与构建：

```bash
pnpm check
pnpm build
```

## Cloudflare Workers Static Assets

`wrangler.jsonc` 已设置为将 `dist/` 作为 Workers Static Assets 目录。确定实际域名后，以环境变量在构建时设置它：

```bash
SITE_URL=https://your-domain.example pnpm build
pnpm deploy
```

在未设置 `SITE_URL` 时，构建仍可通过；canonical、绝对 Open Graph URL 及 sitemap 集成会优雅降级，不会写入示例域名。

## 照片与归因

`public/bali-memorial-jonathan-liem.jpg`：Jonathan Liem，经 Wikimedia Commons 标注为公共领域。

`public/bali-memorial-ken-eckert.jpg`：Ken Eckert，Wikimedia Commons，CC BY-SA 4.0。页面已经在图注中保留归因与许可说明；再次发布时请继续保留对应归因。

## 归档内容

| 路径 | 用途 |
| --- | --- |
| `src/` | Astro 页面、布局、样式和结构化数据 |
| `public/` | 本地 favicon、robots.txt 与两张真实纪念碑照片 |
| `dist/` | 已验证的静态构建产物，可由 Workers Static Assets 提供 |
| `package.json` / `pnpm-lock.yaml` | 精确锁定的依赖和脚本 |
| `astro.config.mjs` / `wrangler.jsonc` | 站点与 Cloudflare 部署配置 |
| `research-notes.md` | 内容事实、照片许可和公开来源的研究记录 |
