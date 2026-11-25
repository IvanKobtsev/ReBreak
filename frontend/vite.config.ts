import { fileURLToPath, URL } from "node:url";
import xcss from "@cross-css/vite/solidjs-plugin";
import solid from "@solidjs/vite-plugin";
import { defineConfig, lazyPlugins } from "vite-plus";
import solidLint from "eslint-plugin-solid";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  fmt: {},
  lint: {
    plugins: ["typescript", "oxc"],
    jsPlugins: [
      "eslint-plugin-solid",
      {
        name: "vite-plus",
        specifier: "vite-plus/oxlint-plugin",
      },
    ],
    settings: {
      solid: { version: 2 },
    },
    rules: {
      ...solidLint.configs.v2.rules,
      "vite-plus/prefer-vite-plus-imports": "error",
    },
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  plugins: lazyPlugins(() => [xcss(), solid()]),
});
