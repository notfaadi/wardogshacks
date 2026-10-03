import { LogoMark } from './LogoMark'
import { SITE_HOST, SITE_NAME } from '../data/site'

/** Homepage-only cinematic hero — no legacy product artwork. */
export function HomeHeroBanner() {
  return (
    <div className="home-hero-banner pointer-events-none absolute inset-0 z-0 overflow-hidden select-none" aria-hidden>
      <div className="home-hero-banner__base absolute inset-0 bg-z-bg" />
      <div className="home-hero-banner__aurora home-hero-banner__aurora--a" />
      <div className="home-hero-banner__aurora home-hero-banner__aurora--b" />
      <div className="home-hero-banner__aurora home-hero-banner__aurora--c" />
      <div className="home-hero-banner__grid absolute inset-0" />
      <div className="home-hero-banner__noise absolute inset-0 opacity-[0.35]" />

      <div className="home-hero-banner__art absolute inset-0">
        <img
          src="/media/wardogs-cover.webp"
          alt=""
          width={800}
          height={800}
          className="home-hero-banner__art-img"
          decoding="async"
        />
      </div>

      <div className="home-hero-banner__stage absolute inset-0 flex items-center justify-end">
        <div className="home-hero-banner__radar mr-[6%] hidden sm:block lg:mr-[10%]">
          <span className="home-hero-banner__radar-ring home-hero-banner__radar-ring--1" />
          <span className="home-hero-banner__radar-ring home-hero-banner__radar-ring--2" />
          <span className="home-hero-banner__radar-ring home-hero-banner__radar-ring--3" />
          <span className="home-hero-banner__radar-sweep" />
          <span className="home-hero-banner__radar-dot" />
        </div>

        <div className="home-hero-banner__wordmark mr-[4%] max-w-[min(52vw,520px)] text-right sm:mr-[6%] lg:mr-[8%]">
          <div className="mb-3 flex items-center justify-end gap-2 opacity-90">
            <LogoMark className="h-7 w-7 text-z-soft sm:h-8 sm:w-8" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-z-soft/90 sm:text-xs">
              {SITE_HOST}
            </span>
          </div>
          <p
            className="home-hero-banner__title font-silkscreen text-[clamp(2.75rem,14vw,7rem)] font-normal leading-[0.88] tracking-tight text-white"
          >
            WARDOGS
          </p>
          <p
            className="home-hero-banner__subtitle -mt-1 font-silkscreen text-[clamp(1.75rem,8vw,4.25rem)] font-normal leading-none tracking-tight"
          >
            HACKS
          </p>
          <p className="mt-4 hidden text-sm font-medium text-white/50 sm:block">{SITE_NAME} · PC · Worldwide</p>
        </div>
      </div>

      <div className="home-hero-banner__vignette absolute inset-0" />
      <div className="home-hero-banner__fade-bottom absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-z-bg via-z-bg/85 to-transparent" />
      <div className="home-hero-banner__fade-top absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-z-bg/80 to-transparent" />
    </div>
  )
}
