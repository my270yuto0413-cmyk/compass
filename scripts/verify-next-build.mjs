import { createHash } from "node:crypto";
import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const out = path.join(root, "out");

function expectIncludes(html, expected, label) {
  if (!html.includes(expected)) throw new Error(`${label} is missing: ${expected}`);
}

function expectOneH1(html, label) {
  const count = (html.match(/<h1\b/gi) ?? []).length;
  if (count !== 1) throw new Error(`${label} must contain exactly one h1; found ${count}.`);
}

async function fileMap(directory) {
  const result = new Map();

  async function visit(current, relative = "") {
    for (const entry of await readdir(current, { withFileTypes: true })) {
      const absolute = path.join(current, entry.name);
      const nextRelative = path.posix.join(relative, entry.name);
      if (entry.isDirectory()) await visit(absolute, nextRelative);
      if (entry.isFile()) {
        const bytes = await readFile(absolute);
        result.set(nextRelative, createHash("sha256").update(bytes).digest("hex"));
      }
    }
  }

  await visit(directory);
  return result;
}

function expectSameMap(label, expected, actual) {
  const keys = new Set([...expected.keys(), ...actual.keys()]);
  const differences = [...keys].filter((key) => expected.get(key) !== actual.get(key));
  if (differences.length) throw new Error(`${label} changed: ${differences.slice(0, 10).join(", ")}`);
}

const official = await readFile(path.join(out, "index.html"), "utf8");
const interactive = await readFile(path.join(out, "INTRO_Interactive", "index.html"), "utf8");

for (const expected of [
  '<html lang="ja"',
  "Better Education.",
  "Better Decisions.",
  'id="vision"',
  'id="resources"',
  'id="education"',
  'id="community"',
  'id="contact"',
  'href="messages/index.html"',
  'href="INTRO_Interactive/"',
  'rel="canonical" href="https://compass-official.pages.dev/"',
  'type="application/ld+json"',
  "G-EHKJ8B8N0Y"
]) expectIncludes(official, expected, "Official page");

for (const expected of [
  '<html lang="ja"',
  'id="main"',
  'id="top"',
  'id="students"',
  'id="features"',
  'id="ai-support"',
  'id="teachers"',
  'id="developers"',
  "わからないが、動き出す。",
  "未来の講義を、いま体験。",
  'rel="canonical" href="https://compass-official.pages.dev/INTRO_Interactive/"',
  "G-7VT6Z59NE0"
]) expectIncludes(interactive, expected, "Interactive page");

if (interactive.includes('<div id="root"></div>')) {
  throw new Error("Interactive page regressed to an empty client-rendered shell.");
}

expectOneH1(official, "Official page");
expectOneH1(interactive, "Interactive page");

for (const relative of [
  "messages/index.html",
  "future-strategy-library/index.html",
  "images/compass-mark.svg",
  "_headers",
  "_redirects",
  "robots.txt",
  "sitemap.xml"
]) await access(path.join(out, relative));

for (const directory of ["messages", "future-strategy-library"]) {
  const source = await fileMap(path.join(root, directory));
  const built = await fileMap(path.join(out, directory));
  expectSameMap(directory, source, built);
  console.log(`${directory}: ${source.size} files preserved byte-for-byte`);
}

await access(path.join(out, "_next", "static"));
console.log("Verified static HTML, route metadata, one h1 per Next route, frozen sites, and deployment assets.");
