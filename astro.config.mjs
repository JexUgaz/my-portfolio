import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://portfolio.jexugaz.work",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },

  integrations: [react()],
});
