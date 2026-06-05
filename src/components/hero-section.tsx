import FadeIn from './fade-in'

const TICKER_ITEMS = [
  'Fixed scope', '·', '2–3 week delivery', '·',
  'Direct collaboration', '·', 'No account managers', '·',
  'Fixed scope', '·', '2–3 week delivery', '·',
  'Direct collaboration', '·', 'No account managers', '·',
]

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden min-h-[100dvh] flex flex-col items-center">
      {/* Grid */}
      <div className="absolute inset-0 hero-grid" />

      {/* Orb A — primary centre glow, slowly drifting */}
      <div
        className="absolute top-[-8%] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, oklch(0.72 0.12 230 / 0.07) 0%, transparent 62%)',
          animation: 'orb-float-a 20s ease-in-out infinite',
        }}
      />

      {/* Orb B — bottom-right accent */}
      <div
        className="absolute bottom-[18%] right-[5%] w-[480px] h-[360px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, oklch(0.72 0.12 230 / 0.045) 0%, transparent 65%)',
          animation: 'orb-float-b 24s ease-in-out infinite 4s',
        }}
      />

      {/* Orb C — far left, very faint */}
      <div
        className="absolute top-[45%] -left-[8%] w-[380px] h-[280px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, oklch(0.72 0.12 230 / 0.03) 0%, transparent 70%)',
          animation: 'orb-float-c 28s ease-in-out infinite 8s',
        }}
      />

      {/* Content */}
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,64px)] relative w-full py-44 flex-1 flex flex-col justify-center">
        <FadeIn>
          <div className="font-mono text-[11px] tracking-[0.10em] uppercase text-ink-3 mb-8">
            Creative agency
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <h1 className="display m-0 text-[clamp(56px,8vw,120px)] max-w-[900px]">
            Creative that<br className="hidden sm:block" />
            <span className="italic-accent shimmer-line">converts.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={140}>
          <p className="mt-8 mb-10 max-w-[480px] text-lg leading-[1.55] text-ink-2">
            Ads, landing pages, and campaign creative — scoped, built, and delivered in weeks.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="flex gap-3.5 flex-wrap">
            <a
              href="#form"
              data-clarity-label="hero-cta-primary"
              className="btn-primary inline-flex items-center gap-2.5 bg-accent text-paper font-medium px-6 py-3.5 rounded-full text-sm"
            >
              Start a project <span>&rarr;</span>
            </a>
            <a
              href="#what"
              data-clarity-label="hero-cta-secondary"
              className="btn-secondary inline-flex items-center gap-2.5 text-ink-2 border border-line-2 px-6 py-3.5 rounded-full text-sm"
            >
              See how we work
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Marquee ticker strip */}
      <FadeIn delay={320} className="w-full relative mt-auto">
        <div className="border-t border-line py-4 overflow-hidden">
          <div
            className="flex items-center whitespace-nowrap gap-0"
            style={{ animation: 'marquee 22s linear infinite', width: 'max-content' }}
          >
            {TICKER_ITEMS.map((item, i) => (
              <span
                key={i}
                className={`font-mono text-[11px] tracking-[0.07em] uppercase ${
                  item === '·' ? 'text-accent mx-5' : 'text-ink-4'
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
