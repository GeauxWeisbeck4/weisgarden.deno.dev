// @ts-check
import { defineConfig } from "astro/config";
import { expressiveCodeOptions, siteConfig } from "./src/site.config.ts";
import deno from "@deno/astro-adapter";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import { remarkModifiedTime } from "./src/plugins/remark-modified-time.mjs";
import { remarkReadingTime } from "./src/plugins/remark-reading-time.mjs";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: siteConfig.url,
  output: "server",
  adapter: deno(),
  integrations: [
    expressiveCode(expressiveCodeOptions),
    sitemap(),
  ],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkModifiedTime, remarkReadingTime],
    }),
  },
});
