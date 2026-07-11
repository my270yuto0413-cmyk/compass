import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const root = process.cwd();
const clientDir = path.join(root, ".build", "client");
const serverEntry = path.join(root, ".build", "server", "entry-server.js");
const distDir = path.join(root, "dist");

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });
await cp(clientDir, distDir, { recursive: true });

const { render } = await import(`${pathToFileURL(serverEntry).href}?t=${Date.now()}`);
const templatePath = path.join(distDir, "index.html");
const template = await readFile(templatePath, "utf8");
const marker = "<!--app-html-->";

if (!template.includes(marker)) {
  throw new Error(`Prerender marker ${marker} was not found in the client build.`);
}

await writeFile(templatePath, template.replace(marker, render()), "utf8");

const passthroughDirectories = [
  "images",
  "messages",
  "future-strategy-library",
  "INTRO_Interactive"
];

for (const directory of passthroughDirectories) {
  await cp(path.join(root, directory), path.join(distDir, directory), {
    recursive: true,
    filter(source) {
      const name = path.basename(source);
      return !["node_modules", ".git", "dist", ".build"].includes(name);
    }
  });
}

const passthroughFiles = [
  ".nojekyll",
  "_headers",
  "_redirects",
  "google1a9ab00aa28adfe2.html",
  "robots.txt",
  "sitemap.xml"
];

for (const file of passthroughFiles) {
  await cp(path.join(root, file), path.join(distDir, file));
}
