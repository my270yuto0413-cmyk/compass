import { readFile, stat } from "node:fs/promises";
import { gzipSync } from "node:zlib";
import path from "node:path";

const out = path.join(process.cwd(), "out");

for (const relative of ["index.html", "INTRO_Interactive/index.html"]) {
  const html = await readFile(path.join(out, relative), "utf8");
  const sources = [...new Set(
    [...html.matchAll(/<script[^>]+src="([^"]+)"/g)]
      .map((match) => match[1])
      .filter((source) => source.startsWith("/_next/"))
  )];
  const files = sources.map((source) => path.join(out, ...source.slice(1).split("/")));
  const raw = (await Promise.all(files.map(async (file) => (await stat(file)).size))).reduce((sum, size) => sum + size, 0);
  const gzip = (await Promise.all(files.map(async (file) => gzipSync(await readFile(file), { level: 9 }).length))).reduce(
    (sum, size) => sum + size,
    0
  );
  console.log(`${relative}: ${files.length} scripts, ${(raw / 1024).toFixed(1)} KB raw, ${(gzip / 1024).toFixed(1)} KB gzip`);
}

const previousRoot = process.argv[2];
if (previousRoot) {
  const previous = {
    "previous official": ["assets/index-DkUUF0DF.js", "assets/legacy-interactions-DImyx-zC.js"],
    "previous Interactive": ["INTRO_Interactive/assets/index-B69xsCky.js"]
  };
  for (const [label, relativeFiles] of Object.entries(previous)) {
    const files = relativeFiles.map((relative) => path.join(previousRoot, relative));
    const raw = (await Promise.all(files.map(async (file) => (await stat(file)).size))).reduce((sum, size) => sum + size, 0);
    const gzip = (await Promise.all(files.map(async (file) => gzipSync(await readFile(file), { level: 9 }).length))).reduce(
      (sum, size) => sum + size,
      0
    );
    console.log(`${label}: ${(raw / 1024).toFixed(1)} KB raw, ${(gzip / 1024).toFixed(1)} KB gzip`);
  }
}
