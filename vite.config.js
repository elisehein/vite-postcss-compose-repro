import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  root: "src",

  plugins: [
    react(),

    legacy({
      targets: ["defaults", "ie >= 11"],

      /* regenerator-runtime is specifically needed for IE11, as explained in plugin-legacy README. */
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"]
    })
  ],

  build: {
    cssCodeSplit: true,

    outDir: "../public",
    emptyOutDir: true,
    rollupOptions: {
      input: [
        "src/index.html"
      ]
    }
  },

  css: {
    modules: {
      localsConvention: "camelCaseOnly"
    }
  }
});
