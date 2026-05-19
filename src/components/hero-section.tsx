import FadeIn from './fade-in'

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden min-h-[100dvh] flex items-center">
      {/* Background — one purposeful glow, subtle grid */}
      <div className="absolute inset-0 hero-grid" />
      <div
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, oklch(0.72 0.12 230 / 0.06) 0%, transparent 65%)' }}
      />

      {/* Content */}
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,64px)] relative w-full py-44">
        <FadeIn>
          <div className="font-mono text-[11px] tracking-[0.10em] uppercase text-ink-3 mb-8">
            Creative agency
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <h1 className="display m-0 text-[clamp(56px,8vw,120px)] max-w-[900px]">
            Creative that<br className="hidden sm:block" />
            <span className="italic-accent">converts.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={140}>
          <p className="mt-8 mb-10 max-w-[480px] text-lg leading-[1.55] text-ink-2">
            Ads, landing pages, and campaign creative — scoped, built, and delivered in weeks.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="flex gap-3.5 flex-wrap">
            <a href="#form" className="inline-flex items-center gap-2.5 bg-accent text-paper font-medium px-6 py-3.5 rounded-full text-sm hover:bg-accent-2 hover:-translate-y-px transition-all">
              Start a project <span>&rarr;</span>
            </a>
            <a href="#what" className="inline-flex items-center gap-2.5 text-ink-2 border border-line-2 px-6 py-3.5 rounded-full text-sm hover:text-ink hover:border-ink-3 transition-all">
              See how we work
            </a>
          </div>
        </FadeIn>

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
