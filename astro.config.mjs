/**
 * 设计提醒：此配置对应“石碑与静默”的纯静态纪念地科普站；站点域名只从此处的 site 字段派生。
 */
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// 固定为 https 站点，确保构建期一定产出 canonical / og:url / sitemap（避免 http:// 变体被重复收录）。
// 仍可用 SITE_URL 环境变量覆盖（如其他部署目标）。
const site = process.env.SITE_URL?.trim() || "https://monumensd.com";

export default defineConfig({
  site,
  output: "static",
  trailingSlash: "never",
  integrations: site ? [sitemap({ filter: (page) => !page.endsWith("/404") && !page.endsWith("/404/") })] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
