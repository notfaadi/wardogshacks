export type SeoMediaItem = {
  image: string
  video?: string
  alt: string
  title: string
  caption: string
  videoTitle?: string
  videoDescription?: string
}

/** Wardogs product art + menu stills (self-hosted). */
export const WARDOGS_HERO = '/media/wardogs-hero-full.webp'
export const WARDOGS_SOLDIER = '/media/wardogs-hero-full.webp'
export const WARDOGS_COVER = '/media/wardogs-cover.webp'
export const WARDOGS_BOX = '/media/wardogs-box.jpg'
export const WARDOGS_ESP = '/media/wardogs-esp-gameplay.gif'
export const WARDOGS_MENU = '/media/wardogs-menu.gif'
export const WARDOGS_GAMEPLAY = '/media/wardogs-esp-gameplay.gif'
export const WARDOGS_HOME_ART = '/media/wardogs-home-art.jpg'
export const WARDOGS_CONTROL = '/media/wardogs-control-art.jpg'
export const WARDOGS_TACTICAL = '/media/wardogs-tactical-art.jpg'
export const WARDOGS_VIDEO_THUMB = '/media/wardogs-video-thumb.jpg'

/** Self-hosted Wardogs preview preview (Bunny Stream GUID ee0735e7-…). */
export const WARDOGS_HOME_VIDEO = {
  id: 'ee0735e7-c9a3-4072-b818-98e2bb7f07ff',
  src: '/videos/wardogs-preview.mp4',
  poster: WARDOGS_VIDEO_THUMB,
  title: 'Wardogs Hacks Aimbot and ESP preview',
  caption: 'Preview of Wardogs Aimbot, ESP menu, loot highlighting and radar hack features on PC.',
} as const

export const PAGE_MEDIA = {
  home: {
    image: WARDOGS_SOLDIER,
    alt: 'Wardogs hacks Aimbot and ESP product artwork for Wardogs on PC',
    title: 'Wardogs Hacks for Wardogs',
    caption: 'Feature overview for Wardogs Aimbot, ESP, wallhack, loot ESP and radar hack.',
  },
  product: {
    image: WARDOGS_COVER,
    video: WARDOGS_HOME_VIDEO.src,
    alt: 'Wardogs ESP, silent aim Aimbot and loot highlight feature artwork',
    title: 'Wardogs Aimbot, ESP and Radar Hack Features',
    caption: 'Product overview for Wardogs on Windows PC.',
    videoTitle: WARDOGS_HOME_VIDEO.title,
    videoDescription: WARDOGS_HOME_VIDEO.caption,
  },
  forums: {
    image: WARDOGS_HERO,
    alt: 'Wardogs hacks product artwork',
    title: 'Wardogs Hacks Guides',
    caption: 'Reference for setup, Aimbot, ESP, loot and BattlEye status articles.',
  },
  reviews: {
    image: WARDOGS_ESP,
    alt: 'Wardogs hacks ESP gameplay review artwork',
    title: 'Wardogs Hacks Reviews',
    caption: 'Feature and compatibility feedback for Wardogs hacks.',
  },
  faq: {
    image: WARDOGS_MENU,
    alt: 'Wardogs hacks menu artwork for the FAQ',
    title: 'Wardogs Hacks FAQ',
    caption: 'Compatibility, status and setup answers for Wardogs.',
  },
  support: {
    image: WARDOGS_HERO,
    alt: 'Wardogs hacks support artwork',
    title: 'Wardogs Hacks Support',
    caption: 'Delivery, loader and setup help for Wardogs hacks.',
  },
} as const satisfies Record<string, SeoMediaItem>

const FORUM_MEDIA: Record<string, SeoMediaItem> = {
  'features-list': { ...PAGE_MEDIA.product },
  hotkeys: { ...PAGE_MEDIA.forums },
  'complete-setup': { ...PAGE_MEDIA.product },
  'disable-antivirus': { ...PAGE_MEDIA.home },
  'undetected-status': { ...PAGE_MEDIA.product },
  'aimbot-settings': { ...PAGE_MEDIA.home },
  'esp-wallhack-guide': { ...PAGE_MEDIA.reviews },
  'radar-hack-guide': { ...PAGE_MEDIA.faq },
  'stream-proof-setup': { ...PAGE_MEDIA.forums },
  'battleye-status': { ...PAGE_MEDIA.product },
  'windows-setup': { ...PAGE_MEDIA.support },
  'raid-play-guide': {
    image: WARDOGS_BOX,
    alt: 'Wardogs survival and loot run cheats artwork',
    title: 'Wardogs Survival and Loot Run Cheats Guide',
    caption: 'Loot run tips for Wardogs Aimbot, ESP and radar hack.',
  },
  'loader-errors': { ...PAGE_MEDIA.support },
}

export function getForumMedia(slug: string): SeoMediaItem {
  return FORUM_MEDIA[slug] || PAGE_MEDIA.forums
}
