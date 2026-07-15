import { access } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const images = path.join(process.cwd(), "public", "images");

for (const name of ["hero.desktop.highlight", "hero.mobile.highlight"]) {
  const source = path.join(images, `${name}.png`);
  const destination = path.join(images, `${name}.webp`);
  await access(source);
  await sharp(source)
    .webp({ quality: 88, effort: 6, smartSubsample: true })
    .toFile(destination);
  console.log(`Optimized ${path.basename(destination)}`);
}
