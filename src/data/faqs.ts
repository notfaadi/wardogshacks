export type FaqItem = {
  q: string
  a: string
}

/** Master FAQ — visible on /faq and reused in sections. */
export const SITE_FAQS: FaqItem[] = [
  {
    q: 'What are Wardogs Hacks?',
    a: 'Wardogs Hacks are Wardogs tools on getwardogshacks.org — silent-aim Aimbot, player ESP, wallhack, infected and loot ESP, and a 2D radar hack — with live BattlEye status after game patches.',
  },
  {
    q: 'How much do Wardogs hacks cost?',
    a: `Wardogs hacks start from $35 for short access. Longer licenses cost more. Always confirm live BattlEye status and the price on getwardogshacks.org before checkout.`,
  },
  {
    q: 'Do you sell Wardogs hacks for other games?',
    a: 'No. getwardogshacks.org sells Wardogs hacks / Wardogs hacks only — one product, no multi-game catalog.',
  },
  {
    q: 'Is Aimbot the main feature?',
    a: 'Aimbot is optional. Most buyers lead with Wardogs ESP, loot highlighting and radar awareness, then enable silent aim only if they want it.',
  },
  {
    q: 'How do you handle BattlEye updates?',
    a: 'We publish live clear-to-load or Updating labels after Wardogs and BattlEye patches. Always check status on getwardogshacks.org before you load.',
  },
  {
    q: 'What is Wardogs ESP / wallhack?',
    a: 'Wardogs ESP and wallhack show survivors, infected and loot through walls with distance and health when supported. Loot ESP highlights guns, ammo and medical gear so empty houses stop wasting your time.',
  },
  {
    q: 'What is a Wardogs radar hack?',
    a: 'The radar hack is a 2D overlay for off-screen survivors and third parties — useful for military loot approaches and avoiding ambushes on Wardogs maps.',
  },
  {
    q: 'What features are included?',
    a: 'Wardogs Aimbot with silent aim, player ESP, infected ESP, loot and item ESP, radar hack, base and stash intel, spoofer and stream-proof options — Wardogs on Windows PC only. See the Features Checklist guide for the full list.',
  },
  {
    q: 'Do Wardogs Hacks work on official and private servers?',
    a: 'Yes. The cheats run on official Wardogs servers and on private servers using most common mod setups. Heavily modded servers with custom anti-cheat scripts can behave differently — ask support before you buy.',
  },
  {
    q: 'How do I buy Wardogs hacks?',
    a: 'Start on the homepage, confirm live BattlEye status and review the price from $35. Open Product details for compatibility and features, then continue to checkout for digital delivery.',
  },
  {
    q: 'How do I load Wardogs Hacks?',
    a: 'After checkout, follow the Complete Setup forum thread for the current load order. If status is Updating, wait rather than forcing an outdated build.',
  },
  {
    q: 'Where do I get Wardogs Hacks support?',
    a: 'Use the Support page and your checkout order channel. Include current BattlEye status and whether you need load, menu or delivery help.',
  },
  {
    q: 'Where can I read Wardogs Hacks reviews?',
    a: 'Player reviews with ratings are on the Reviews page. They cover ESP usefulness, status honesty and patch survival before you buy.',
  },
  {
    q: 'What is your refund policy?',
    a: 'Digital licenses follow the Refunds page — delivery failures and extended Updating windows can qualify; change of mind after a working key does not.',
  },
  {
    q: 'Is this the official Wardogs site?',
    a: 'No. We sell Wardogs Hacks only. Buy and play the game from getwardogshacks.org. We are not affiliated with Wardogs or Wardogs.',
  },
]

/** Commercial questions shown on the homepage; FAQ schema lives on /faq only. */
export const HOME_FAQS: FaqItem[] = [
  SITE_FAQS[1],
  SITE_FAQS[4],
  SITE_FAQS[5],
  SITE_FAQS[9],
]

export const PRODUCT_PAGE_FAQS: FaqItem[] = [
  SITE_FAQS[1],
  SITE_FAQS[4],
  SITE_FAQS[5],
  SITE_FAQS[6],
  SITE_FAQS[9],
  SITE_FAQS[11],
]
