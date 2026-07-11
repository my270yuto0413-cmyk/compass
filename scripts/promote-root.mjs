import { cp, rm } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");

await cp(path.join(dist, "index.html"), path.join(root, "index.html"));
await rm(path.join(root, "assets"), { recursive: true, force: true });
await cp(path.join(dist, "assets"), path.join(root, "assets"), { recursive: true });
