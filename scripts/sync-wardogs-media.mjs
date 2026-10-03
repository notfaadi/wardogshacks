/**
 * Map legacy dayz-* filenames in git to wardogs-* paths used by the site.
 * Safe to run repeatedly (copy-if-source-newer).
 */
import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = join(root, 'public')

const pairs = [
  ['media/dayz-hero-full.webp', 'media/wardogs-hero-full.webp'],
  ['media/dayz-cover.webp', 'media/wardogs-cover.webp'],
  ['media/dayz-box.jpg', 'media/wardogs-box.jpg'],
  ['media/dayz-esp-gameplay.gif', 'media/wardogs-esp-gameplay.gif'],
  ['media/dayz-menu.gif', 'media/wardogs-menu.gif'],
  ['media/dayz-video-thumb.jpg', 'media/wardogs-video-thumb.jpg'],
  ['media/dayz-control-art.jpg', 'media/wardogs-control-art.jpg'],
  ['media/dayz-home-art.jpg', 'media/wardogs-home-art.jpg'],
  ['media/dayz-tactical-art.jpg', 'media/wardogs-tactical-art.jpg'],
  ['og/dayz-cheats.jpg', 'og/wardogs-hacks.jpg'],
  ['videos/dayz-preview.mp4', 'videos/wardogs-preview.mp4'],
]

for (const [from, to] of pairs) {
  const src = join(publicDir, from)
  const dest = join(publicDir, to)
  if (!existsSync(src)) continue
  mkdirSync(dirname(dest), { recursive: true })
  copyFileSync(src, dest)
}
