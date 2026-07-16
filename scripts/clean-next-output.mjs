import { rm } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

await Promise.all(
  [".next", "out"].map((directory) =>
    rm(path.join(root, directory), { recursive: true, force: true })
  )
);

console.log("Removed previous Next.js build output.");
