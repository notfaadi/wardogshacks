import { WARDOGS_HERO, WARDOGS_SOLDIER, WARDOGS_COVER, WARDOGS_MENU, WARDOGS_ESP } from './media'
import { WARDOGS_OG, getOgImageForPath, PAGE_OG } from './og'

export { WARDOGS_OG, getOgImageForPath, PAGE_OG }
export { forumOgImage } from './og'

export const WARDOGS_PRODUCT_HERO = WARDOGS_HERO
export const WARDOGS_PRODUCT_COVER = WARDOGS_COVER

export type ImageSeoFields = {
  alt: string
  title: string
  caption: string
}

export const IMAGE_SEO: Record<
  string,
  ImageSeoFields & {
    heroAlt: string
    heroTitle: string
    heroCaption: string
  }
> = {
  wardogs: {
    alt: 'Wardogs hacks product artwork for Wardogs on PC',
    title: 'Wardogs Hacks Product Details',
    caption: 'Wardogs Aimbot, ESP, wallhack, loot ESP, radar hack and BattlEye compatibility',
    heroAlt: 'Wardogs hacks silent aim Aimbot and ESP features',
    heroTitle: 'Wardogs Hacks Features',
    heroCaption: 'Review Wardogs Aimbot, ESP, radar hack and current BattlEye status',
  },
}

type PageImage = ImageSeoFields & { src: string; og: string }

/** On-page media + dedicated OG JPEG for Google SERP thumbnails. */
export const PAGE_IMAGES: Record<
  'home' | 'forums' | 'reviews' | 'faq' | 'support' | 'product',
  PageImage
> = {
  home: {
    src: WARDOGS_SOLDIER,
    og: PAGE_OG.home,
    alt: 'Wardogs hacks Aimbot and ESP artwork for Wardogs on PC',
    title: 'Wardogs Hacks',
    caption: 'Wardogs Aimbot, ESP, wallhack and radar hack overview.',
  },
  forums: {
    src: WARDOGS_HERO,
    og: PAGE_OG.forums,
    alt: 'Wardogs hacks product artwork',
    title: 'Wardogs Hacks Guides',
    caption: 'Setup, Aimbot and ESP guides for Wardogs.',
  },
  reviews: {
    src: WARDOGS_ESP,
    og: PAGE_OG.reviews,
    alt: 'Wardogs hacks review artwork',
    title: 'Wardogs Hacks Reviews',
    caption: 'Feature and compatibility feedback for Wardogs.',
  },
  faq: {
    src: WARDOGS_MENU,
    og: PAGE_OG.faq,
    alt: 'Wardogs hacks FAQ artwork',
    title: 'Wardogs Hacks FAQ',
    caption: 'Compatibility, feature and setup answers for Wardogs.',
  },
  support: {
    src: WARDOGS_HERO,
    og: PAGE_OG.support,
    alt: 'Wardogs hacks support artwork',
    title: 'Wardogs Hacks Support',
    caption: 'Delivery, loader and setup support for Wardogs hacks.',
  },
  product: {
    src: WARDOGS_COVER,
    og: PAGE_OG.product,
    alt: 'Wardogs Aimbot ESP and radar hack product artwork',
    title: 'Wardogs Hacks Features',
    caption: 'Product details for Wardogs Aimbot and ESP.',
  },
}

export function getGameImage(_slug: string): string {
  return WARDOGS_PRODUCT_COVER
}

export function getProductHeroImage(_slug: string): string {
  return WARDOGS_PRODUCT_COVER
}

export function getOgImage(path?: string): string {
  return getOgImageForPath(path)
}

export function getPageImage(key: keyof typeof PAGE_IMAGES) {
  return PAGE_IMAGES[key]
}

export function getImageAlt(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroAlt : seo.alt
  return variant === 'product' ? `${name} product details` : `${name} product artwork`
}

export function getImageTitle(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroTitle : seo.title
  return `${name} product`
}
