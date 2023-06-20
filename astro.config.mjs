import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  site: "https://mrzcookie.com",
  integrations: [
    svelte(),
    tailwind(),
    sitemap(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp"
    })
  ]
});