import Image from 'next/image'
import FadeIn from './fade-in'

const TICKER_ITEMS = [
  'Fixed scope', '·', '2–3 week delivery', '·',
  'Direct collaboration', '·', 'No account managers', '·',
  'Fixed scope', '·', '2–3 week delivery', '·',
  'Direct collaboration', '·', 'No account managers', '·',
]

export default function HeroSection() {
  return (
    <section id="top" className="hero-zone relative overflow-hidden min-h-[100dvh] flex flex-col items-center">
      {/* Subtle grid */}
      <div className="absolute inset-0 hero-grid" />

      {/* Copper orb A — primary */}
      <div
        className="absolute top-[-8%] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, oklch(0.572 0.095 52 / 0.09) 0%, transparent 62%)',
          animation: 'orb-float-a 20s ease-in-out infinite',
        }}
      />

      {/* Copper orb B */}
      <div
        className="absolute bottom-[18%] right-[5%] w-[480px] h-[360px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, oklch(0.572 0.095 52 / 0.05) 0%, transparent 65%)',
          animation: 'orb-float-b 24s ease-in-out infinite 4s',
        }}
      />

      {/* Warm ambient left */}
      <div
        className="absolute top-[45%] -left-[8%] w-[380px] h-[280px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, oklch(0.572 0.095 52 / 0.035) 0%, transparent 70%)',
          animation: 'orb-float-c 28s ease-in-out infinite 8s',
        }}
      />

      {/* Content — 2-col on large screens */}
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,64px)] relative w-full py-36 flex-1 flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">

        {/* Left — copy */}
        <div className="flex-1 min-w-0">
          <FadeIn>
            <div className="font-mono text-[11px] tracking-[0.10em] uppercase mb-8" style={{ color: 'var(--color-ink-3)' }}>
              Creative agency
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <h1 className="display m-0 text-[clamp(52px,6.5vw,100px)] max-w-[640px]" style={{ color: 'var(--color-ink)' }}>
              Creative that<br className="hidden sm:block" />
              <span className="italic-accent shimmer-line">converts.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={140}>
            <p className="mt-8 mb-10 max-w-[460px] text-lg leading-[1.55]" style={{ color: 'var(--color-ink-2)' }}>
              Ads, landing pages, and campaign creative — scoped, built, and delivered in weeks.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="flex gap-3.5 flex-wrap">
              <a
                href="#form"
                data-clarity-label="hero-cta-primary"
                className="btn-primary inline-flex items-center gap-2.5 bg-accent text-paper font-medium px-6 py-3.5 rounded-full text-sm"
                style={{ background: '#A17248', color: '#F4F1EA' }}
              >
                Start a project <span>&rarr;</span>
              </a>
              <a
                href="#what"
                data-clarity-label="hero-cta-secondary"
                className="btn-secondary inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm"
                style={{ color: 'var(--color-ink-2)', border: '1px solid var(--color-line-2)' }}
              >
                See how we work
              </a>
            </div>
          </FadeIn>

          {/* Mini stat strip */}
          <FadeIn delay={280}>
            <div className="hidden lg:flex gap-8 mt-14 pt-8" style={{ borderTop: '1px solid var(--color-line)' }}>
              {[
                ['47+', 'projects delivered'],
                ['2–3 wk', 'avg. turnaround'],
                ['100%', 'direct collaboration'],
              ].map(([num, label]) => (
                <div key={num}>
                  <div className="font-heading font-bold text-[26px] leading-none" style={{ letterSpacing: '-0.03em', color: 'var(--color-ink)' }}>{num}</div>
                  <div className="font-mono text-[10px] tracking-[0.07em] uppercase mt-1" style={{ color: 'var(--color-ink-4)' }}>{label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right — studio image */}
        <FadeIn delay={160} className="hidden lg:block lg:w-[420px] xl:w-[500px] flex-shrink-0">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-[0_32px_80px_oklch(0_0_0/0.6)]" style={{ outline: '1px solid rgba(255,255,255,0.05)' }}>
            <Image
              src="/studio-desk.png"
              alt="Clear Motive studio workspace"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(28,22,20,0.4) 0%, transparent 50%)' }} />
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to left, transparent 60%, rgba(28,22,20,0.25) 100%)' }} />
          </div>
        </FadeIn>
      </div>

      {/* Marquee ticker */}
      <FadeIn delay={320} className="w-full relative mt-auto">
        <div className="py-4 overflow-hidden" style={{ borderTop: '1px solid var(--color-line)' }}>
          <div
            className="flex items-center whitespace-nowrap gap-0"
            style={{ animation: 'marquee 22s linear infinite', width: 'max-content' }}
          >
            {TICKER_ITEMS.map((item, i) => (
              <span
                key={i}
                className="font-mono text-[11px] tracking-[0.07em] uppercase"
                style={{ color: item === '·' ? '#A17248' : 'var(--color-ink-4)', margin: item === '·' ? '0 20px' : undefined }}
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
