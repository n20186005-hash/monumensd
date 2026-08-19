/**
 * 设计提醒：此配置对应“石碑与静默”的纯静态纪念地科普站；站点域名只从此处的 site 字段派生。
 */
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.SITE_URL?.trim() || undefined;

export default defineConfig({
  site,
  output: "static",
  trailingSlash: "never",
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
