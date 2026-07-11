import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));
const sourceRoot = fileURLToPath(new URL("./src", import.meta.url));

export default defineConfig({
  base: "./",
  root: "app",
  resolve: {
    alias: {
      "/src": sourceRoot
    }
  },
  server: {
    fs: {
      allow: [projectRoot]
    }
  },
  plugins: [react()]
});
