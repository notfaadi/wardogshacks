import { readFileSync, writeFileSync, readdirSync, statSync, renameSync, existsSync } from 'node:fs'
import { join, extname } from 'node:path'

const root = join(import.meta.dirname, '..')
const skipDirs = new Set(['node_modules', '.git', 'dist', '.astro'])

const replacements = [
  ['https://dayzcheats.io', 'https://getwardogshacks.org'],
  ['dayzcheats.io', 'getwardogshacks.org'],
  ['DayZ Standalone', 'Wardogs'],
  ['DayZ Cheats', 'Wardogs Hacks'],
  ['DayZ cheats', 'Wardogs hacks'],
  ['DayZ cheat', 'Wardogs hack'],
  ['dayz cheats', 'wardogs hacks'],
  ['dayz cheat', 'wardogs hack'],
  ['DayZ Hacks', 'Wardogs Hacks'],
  ['dayz hacks', 'wardogs hacks'],
  ['/dayz-cheats', '/wardogs-hacks'],
  ['dayz-cheats', 'wardogs-hacks'],
  ['DayZ Aimbot', 'Wardogs Aimbot'],
  ['dayz aimbot', 'wardogs aimbot'],
  ['DayZ ESP', 'Wardogs ESP'],
  ['dayz esp', 'wardogs esp'],
  ['DayZ Wallhack', 'Wardogs Wallhack'],
  ['DayZ Radar', 'Wardogs Radar'],
  ['DayZ-only', 'Wardogs-only'],
  ['DayZ player', 'Wardogs player'],
  ['DayZ survivor', 'Wardogs survivor'],
  ['DayZ server', 'Wardogs server'],
  ['DayZ servers', 'Wardogs servers'],
  ['DayZ patches', 'Wardogs patches'],
  ['DayZ and BattlEye', 'Wardogs and BattlEye'],
  ['DayZ on ', 'Wardogs on '],
  ['load DayZ', 'load Wardogs'],
  ['buy DayZ', 'buy Wardogs'],
  ['Buy DayZ', 'Buy Wardogs'],
  ['for DayZ', 'for Wardogs'],
  ['DayZ license', 'Wardogs license'],
  ['DayZ licenses', 'Wardogs licenses'],
  ['DayZ product', 'Wardogs product'],
  ['DayZ features', 'Wardogs features'],
  ['DayZ feature', 'Wardogs feature'],
  ['DayZ preview', 'Wardogs preview'],
  ['DayZ media', 'Wardogs media'],
  ['DayZ Reaper', 'Wardogs preview'],
  ['DayZ ·', 'Wardogs ·'],
  ["game: 'DayZ'", "game: 'Wardogs'"],
  ["slug: 'dayz'", "slug: 'wardogs'"],
  ["getGame('dayz')", "getGame('wardogs')"],
  ["guidePath('dayz')", "guidePath('wardogs')"],
  ['guideSlug="dayz-cheats"', 'guideSlug="wardogs-hacks"'],
  ['OFFICIAL_DAYZ_LINKS', 'OFFICIAL_WARDOGS_LINKS'],
  ['DAYZ_HOME_VIDEO', 'WARDOGS_HOME_VIDEO'],
  ['DAYZ_HERO', 'WARDOGS_HERO'],
  ['DAYZ_SOLDIER', 'WARDOGS_SOLDIER'],
  ['DAYZ_COVER', 'WARDOGS_COVER'],
  ['DAYZ_BOX', 'WARDOGS_BOX'],
  ['DAYZ_ESP', 'WARDOGS_ESP'],
  ['DAYZ_MENU', 'WARDOGS_MENU'],
  ['DAYZ_GAMEPLAY', 'WARDOGS_GAMEPLAY'],
  ['DAYZ_HOME_ART', 'WARDOGS_HOME_ART'],
  ['DAYZ_CONTROL', 'WARDOGS_CONTROL'],
  ['DAYZ_TACTICAL', 'WARDOGS_TACTICAL'],
  ['DAYZ_VIDEO_THUMB', 'WARDOGS_VIDEO_THUMB'],
  ['DAYZ_OG', 'WARDOGS_OG'],
  ['DAYZ_PRODUCT_HERO', 'WARDOGS_PRODUCT_HERO'],
  ['DAYZ_PRODUCT_COVER', 'WARDOGS_PRODUCT_COVER'],
  ['DayZPreview', 'WardogsPreview'],
  ['DayZPreviewProps', 'WardogsPreviewProps'],
  ['/media/dayz-', '/media/wardogs-'],
  ['/videos/dayz-', '/videos/wardogs-'],
  ['/og/dayz-', '/og/wardogs-'],
  ['Chernarus and Livonia', 'Wardogs maps'],
  ['Chernarus or Livonia', 'Wardogs maps'],
  ['Bohemia or BattlEye', 'BattlEye'],
  ['Bohemia Interactive', 'Wardogs'],
  ['https://dayz.com/', 'https://getwardogshacks.org/'],
  ['dayz.com', 'getwardogshacks.org'],
  ['/products/dayz-cheats', '/products/wardogs-hacks'],
  ['name: "dayzcheats"', 'name: "wardogshacks"'],
  ['"name": "dayzcheats"', '"name": "wardogshacks"'],
  ['DayZ', 'Wardogs'],
  ['dayz', 'wardogs'],
]

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    if (skipDirs.has(name)) continue
    const p = join(dir, name)
    const st = statSync(p)
    if (st.isDirectory()) walk(p, files)
    else files.push(p)
  }
  return files
}

const textExt = new Set([
  '.ts',
  '.tsx',
  '.astro',
  '.js',
  '.mjs',
  '.css',
  '.md',
  '.txt',
  '.xml',
  '.toml',
  '.json',
  '.svg',
])

for (const file of walk(root)) {
  if (!textExt.has(extname(file))) continue
  if (file.endsWith('rebrand-wardogs.mjs')) continue
  if (file.includes('package-lock.json')) continue
  let s = readFileSync(file, 'utf8')
  const before = s
  for (const [from, to] of replacements) s = s.split(from).join(to)
  if (s !== before) writeFileSync(file, s, 'utf8')
}

// Rename source files
const renames = [
  [join(root, 'src/pages/dayz-cheats.astro'), join(root, 'src/pages/wardogs-hacks.astro')],
  [join(root, 'src/components/DayZPreview.tsx'), join(root, 'src/components/WardogsPreview.tsx')],
]

for (const [from, to] of renames) {
  if (existsSync(from) && !existsSync(to)) renameSync(from, to)
}

console.log('Rebrand complete.')
