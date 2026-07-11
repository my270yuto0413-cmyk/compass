import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const html = await readFile(path.join(dist, "index.html"), "utf8");

const requiredHtml = [
  '<html lang="ja">',
  'rel="canonical" href="https://compass-official.pages.dev/"',
  'type="application/ld+json"',
  'id="hero-title"',
  'Better Education.',
  'Better Decisions.',
  'id="vision"',
  'id="resources"',
  'id="education"',
  'id="community"',
  'id="contact"',
  'href="messages/index.html"',
  'href="INTRO_Interactive/"'
];

for (const expected of requiredHtml) {
  if (!html.includes(expected)) throw new Error(`Missing prerendered HTML: ${expected}`);
}

if (html.includes("<!--app-html-->")) throw new Error("The prerender marker remains in dist/index.html.");
if (html.includes("hero.desktop.highlight.png\"\n    media=\"(min-width")) {
  throw new Error("The removed desktop Hero image is still preloaded.");
}
if ((html.match(/<h1/g) ?? []).length !== 1) throw new Error("The production page must contain exactly one h1.");

for (const relative of [
  "messages/index.html",
  "future-strategy-library/index.html",
  "INTRO_Interactive/index.html",
  "_redirects",
  "robots.txt",
  "sitemap.xml"
]) {
  await access(path.join(dist, relative));
}

const assets = await readdir(path.join(dist, "assets"));
if (!assets.some((file) => file.endsWith(".js"))) throw new Error("Client JavaScript bundle is missing.");
if (!assets.some((file) => file.endsWith(".css"))) throw new Error("Client CSS bundle is missing.");

console.log("Verified prerendered HTML, one h1, preserved routes, and client assets.");
