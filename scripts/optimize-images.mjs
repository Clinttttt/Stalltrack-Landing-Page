// Converts showcase PNGs to optimized WebP. Run: npm run optimize:images
import sharp from 'sharp'
import { readdir } from 'node:fs/promises'
import path from 'node:path'

const dir = path.resolve('public/showcase')
const files = (await readdir(dir)).filter((f) => f.toLowerCase().endsWith('.png'))

for (const f of files) {
  const input = path.join(dir, f)
  const out = path.join(dir, f.replace(/\.png$/i, '.webp'))
  const info = await sharp(input)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(out)
  console.log(`${f}  ->  ${path.basename(out)}  (${(info.size / 1024).toFixed(0)} KB)`)
}
