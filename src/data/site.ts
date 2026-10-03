import { WARDOGS_OG } from './images'
import { PAGE_OG } from './og'

export const SITE_URL = 'https://getwardogshacks.org'
export const SITE_NAME = 'Wardogs Hacks'
export const SITE_HOST = 'getwardogshacks.org'

/**
 * Sole purpose — used in schema + about copy.
 * Single-product site: Wardogs / Wardogs cheats for PC (worldwide).
 * Canonical host is apex https://getwardogshacks.org (www 301s to apex in the Worker).
 */
export const SITE_PURPOSE =
  'Buy Wardogs hacks on Windows PC — silent-aim Aimbot, player and loot ESP, wallhack, radar hack and live BattlEye status with instant digital delivery.'

export const SITE_ABOUT = [
  'wardogs hacks',
  'wardogs hack',
  'getwardogshacks',
  'get wardogs hacks',
  'wardogs aimbot',
  'wardogs esp',
  'wardogs wallhack',
  'wardogs radar hack',
  'battleye wardogs hacks',
  'wardogs hack aimbot',
] as const

/** Offer price shown on product schema + purchase UI. */
export const PRODUCT_PRICE_USD = '35'

export const SEO_REGIONS = [
  { hreflang: 'en', label: 'English' },
  { hreflang: 'x-default', label: 'Default' },
] as const

export const OG_IMAGE = WARDOGS_OG

export type PageSeo = {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'article' | 'product'
  /** Prefer /og/*.jpg (1200x630) for Google SERP thumbnails */
  image?: string
  imageAlt?: string
  robots?: string
}

const INDEX_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

export const SEO = {
  home: {
    title: 'Wardogs Hacks | Aimbot, ESP & Radar for PC',
    description:
      'Buy Wardogs hacks for Wardogs — silent aim Aimbot, player and loot ESP, wallhack and radar hack from $35. Check live BattlEye status, then checkout.',
    path: '/',
    ogType: 'website',
    image: PAGE_OG.home,
    imageAlt: 'Wardogs Hacks — Wardogs Aimbot, ESP and radar hack for PC',
    robots: INDEX_ROBOTS,
  },
  forums: {
    title: 'Wardogs Hacks Guides | Aimbot, ESP, Radar & Status',
    description:
      'Wardogs hacks guides hub — silent aim, player and loot ESP, radar hack, antivirus exclusions, loader setup and BattlEye status articles before you buy.',
    path: '/forums',
    ogType: 'website',
    image: PAGE_OG.forums,
    imageAlt: 'Wardogs Hacks setup guides for Aimbot, ESP and BattlEye',
    robots: INDEX_ROBOTS,
  },
  reviews: {
    title: 'Wardogs Hacks Reviews | Buyer Feedback on Wardogs Hacks',
    description:
      'Read Wardogs hacks reviews covering silent aim, player ESP, loot ESP and BattlEye rebuilds before you buy a Wardogs license for PC.',
    path: '/reviews',
    ogType: 'website',
    image: PAGE_OG.reviews,
    imageAlt: 'Wardogs Hacks buyer reviews for Wardogs',
    robots: INDEX_ROBOTS,
  },
  faq: {
    title: 'Wardogs Hacks FAQ | Price, BattlEye Status & Setup',
    description:
      'FAQ for buying Wardogs hacks on Windows PC — price, Aimbot and ESP features, BattlEye status, private server support, loader setup and delivery.',
    path: '/faq',
    ogType: 'website',
    image: PAGE_OG.faq,
    imageAlt: 'Wardogs Hacks FAQ — price, BattlEye and setup',
    robots: INDEX_ROBOTS,
  },
  support: {
    title: 'Wardogs Hacks Support | Loader, Delivery & Setup Help',
    description:
      'Get help buying and loading Wardogs hacks — delivery email, Windows setup, antivirus exclusions, loader errors and BattlEye status updates.',
    path: '/support',
    ogType: 'website',
    image: PAGE_OG.support,
    imageAlt: 'Wardogs Hacks support for loader and delivery help',
    robots: INDEX_ROBOTS,
  },
  product: {
    title: 'Wardogs Hacks Price & Checkout | Aimbot, ESP, Radar',
    description:
      'Wardogs hacks price and checkout — silent aim Aimbot, player ESP, loot ESP, wallhack, radar hack, spoofer and live BattlEye status from $35.',
    path: '/wardogs-hacks',
    ogType: 'product',
    image: PAGE_OG.product,
    imageAlt: 'Wardogs Aimbot, ESP and radar hack product details',
    robots: INDEX_ROBOTS,
  },
} as const satisfies Record<string, PageSeo>

export const HOME_HEADINGS = {
  h1: 'Wardogs Hacks — Aimbot, ESP & Radar',
  h2Features: 'Wardogs Aimbot, ESP, loot ESP & radar hack',
  h2Featured: 'Wardogs ESP and silent aim Aimbot',
  h2About: 'Clear BattlEye status before you buy Wardogs hacks',
  h2Access: 'Buy Wardogs Hacks',
  h2Faq: 'Wardogs Hacks FAQ',
} as const

export function absoluteUrl(path: string) {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
