import { copyFileSync, cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const distDir = join(projectRoot, "app", "dist");
const publicAssetsDir = join(projectRoot, "assets");

if (!existsSync(join(distDir, "index.html"))) {
  throw new Error("Vite build output is missing dist/index.html");
}

copyFileSync(join(distDir, "index.html"), join(projectRoot, "index.html"));

if (existsSync(publicAssetsDir)) {
  rmSync(publicAssetsDir, { recursive: true, force: true });
}

mkdirSync(publicAssetsDir, { recursive: true });
cpSync(join(distDir, "assets"), publicAssetsDir, { recursive: true });
