import { WARDOGS_HOME_VIDEO } from '../data/media'

type WardogsPreviewProps = {
  className?: string
  /** Wider crop on product page */
  wide?: boolean
}

/** Self-hosted Wardogs preview scraped from battlelog (mediadelivery embeds 403 off-domain). */
export function WardogsPreview({ className = '', wide = false }: WardogsPreviewProps) {
  return (
    <div className={`video-brand-mask border border-z-soft/20 ${className}`.trim()}>
      <div
        className={`relative w-full overflow-hidden ${wide ? 'aspect-video lg:aspect-[21/9]' : 'aspect-video'}`}
      >
        <video
          className="video-brand-crop absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={WARDOGS_HOME_VIDEO.poster}
          aria-label={WARDOGS_HOME_VIDEO.title}
        >
          <source src={WARDOGS_HOME_VIDEO.src} type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-z-bg/50 via-transparent to-z-bg/20" />
        <div className="video-brand-blur video-brand-blur--top" aria-hidden />
        <div className="video-brand-blur" aria-hidden />
      </div>
      <p className="sr-only">{WARDOGS_HOME_VIDEO.title}</p>
    </div>
  )
}
