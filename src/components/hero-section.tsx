import FadeIn from './fade-in'

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden min-h-[100dvh] flex items-center">
      {/* ── Background layers ── */}

      {/* Grid pattern — masked to fade at edges */}
      <div className="absolute inset-0 hero-grid" />

      {/* Primary accent glow — top center */}
      <div
        className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, oklch(0.58 0.20 28 / 0.07) 0%, transparent 65%)' }}
      />

      {/* Secondary glow — offset right */}
      <div
        className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, oklch(0.50 0.14 28 / 0.04) 0%, transparent 60%)' }}
      />

      {/* Tertiary cool glow — bottom left */}
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, oklch(0.40 0.08 260 / 0.05) 0%, transparent 60%)' }}
      />

      {/* Large ring — decorative */}
      <div
        className="absolute top-[50%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none border border-line opacity-[0.35]"
      />

      {/* ── Content ── */}
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,64px)] relative w-full py-44">
        {/* Eyebrow */}
        <FadeIn>
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.10em] uppercase text-ink-3 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>Creative agency</span>
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={80}>
          <h1 className="display m-0 text-[clamp(56px,8vw,120px)] max-w-[900px]">
            Creative that<br className="hidden sm:block" />
            <span className="italic-accent">converts.</span>
          </h1>
        </FadeIn>

        {/* Sub — one line */}
        <FadeIn delay={140}>
          <p className="mt-8 mb-10 max-w-[520px] text-[18px] leading-[1.55] text-ink-2">
            Ads, landing pages, and campaign creative — scoped, built, and delivered in weeks.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={200}>
          <div className="flex gap-3.5 flex-wrap">
            <a href="#form" className="inline-flex items-center gap-2.5 bg-accent text-paper font-medium px-[22px] py-[13px] rounded-full text-sm hover:brightness-110 hover:-translate-y-px transition-all">
              Start a project <span>&rarr;</span>
            </a>
            <a href="#what" className="inline-flex items-center gap-2.5 text-ink border border-line-2 px-[22px] py-[13px] rounded-full text-sm hover:border-ink transition-all">
              See how we work
            </a>
          </div>
        </FadeIn>

        {/* Proof strip — minimal */}
        <FadeIn delay={260}>
          <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-4">
            <span>Fixed scope</span>
            <span className="text-line-2">/</span>
            <span>2–3 week delivery</span>
            <span className="text-line-2">/</span>
            <span>Direct collaboration</span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
