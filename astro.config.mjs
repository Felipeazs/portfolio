import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

import preact from "@astrojs/preact";

export default defineConfig({
  output: "server",

  vite: {
      plugins: [tailwindcss()],
	},

  adapter: vercel(),
  integrations: [preact()],
});