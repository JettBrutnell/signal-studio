import FadeIn from './fade-in'

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* ── Above the fold ── */}
      <div className="pt-44 pb-32 relative">
        {/* Subtle background glow */}
        <div
          className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, oklch(0.58 0.20 28 / 0.06) 0%, transparent 70%)' }}
        />

        <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,64px)] relative">
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
      </div>

      {/* ── Below the fold — recent work showcase ── */}
      <div className="pb-28">
        <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,64px)]">
          <FadeIn>
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.10em] uppercase text-ink-3 mb-6">
              <span className="text-accent">&bull;</span>
              <span>Recent work</span>
            </div>
          </FadeIn>

          {/* Browser window with property LP */}
          <FadeIn delay={60}>
            <div className="rounded-xl border border-line overflow-hidden shadow-[0_40px_100px_-30px_oklch(0_0_0/0.6)]">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-paper-3 border-b border-line">
                <div className="flex gap-1.5">
                  <span className="w-[10px] h-[10px] rounded-full bg-line-2" />
                  <span className="w-[10px] h-[10px] rounded-full bg-line-2" />
                  <span className="w-[10px] h-[10px] rounded-full bg-line-2" />
                </div>
                <div className="flex-1 mx-3 h-[26px] rounded-md bg-paper flex items-center px-3">
                  <span className="font-mono text-[11px] text-ink-4 tracking-wide">peninsula-kipparing.com.au</span>
                </div>
              </div>

              {/* Property page content — light theme for contrast */}
              <div style={{ background: '#fafaf8', color: '#111' }}>
                {/* Property page nav */}
                <div className="flex items-center justify-between px-8 py-4" style={{ borderBottom: '1px solid #e8e6e1' }}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-sm" style={{ background: '#1a2b4a' }} />
                    <span className="font-serif text-[15px] tracking-tight" style={{ color: '#1a2b4a' }}>The Peninsula</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-6 font-mono text-[10px] tracking-[0.08em] uppercase" style={{ color: '#888' }}>
                    <span>Residences</span>
                    <span>Location</span>
                    <span>Floor Plans</span>
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.06em] uppercase px-3.5 py-2 rounded-full" style={{ background: '#1a2b4a', color: '#fff' }}>
                    Register Interest
                  </div>
                </div>

                {/* Hero */}
                <div className="px-8 pt-12 pb-10">
                  <div className="font-mono text-[9px] tracking-[0.14em] uppercase mb-4" style={{ color: '#b08d6e' }}>
                    Now selling &middot; Kippa-Ring, QLD
                  </div>
                  <div className="font-serif text-[clamp(32px,4vw,52px)] leading-[0.95] tracking-tight mb-3" style={{ color: '#1a2b4a' }}>
                    The Peninsula
                  </div>
                  <div className="font-serif text-[clamp(18px,2.2vw,26px)] leading-[1.1] tracking-tight mb-5" style={{ color: '#1a2b4a', opacity: 0.5 }}>
                    at Kippa-Ring
                  </div>
                  <p className="text-[14px] leading-[1.6] max-w-[480px] mb-6" style={{ color: '#555' }}>
                    Waterfront townhomes on the Redcliffe Peninsula. Walking distance to the esplanade, Kippa-Ring station, and everything the bay has to offer.
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="font-serif text-[22px] tracking-tight" style={{ color: '#1a2b4a' }}>From $620,000</div>
                    <div className="px-4 py-2.5 rounded-full text-[12px] font-medium" style={{ background: '#b08d6e', color: '#fff' }}>
                      Register your interest &rarr;
                    </div>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 mx-8 mb-10 rounded-lg overflow-hidden" style={{ border: '1px solid #e8e6e1' }}>
                  {[
                    ['3', 'Bedrooms'],
                    ['2', 'Bathrooms'],
                    ['2', 'Car spaces'],
                    ['Q2 2026', 'Completion'],
                  ].map(([val, label], i) => (
                    <div
                      key={i}
                      className="py-4 px-5 text-center"
                      style={{ borderRight: i < 3 ? '1px solid #e8e6e1' : 'none' }}
                    >
                      <div className="font-serif text-[22px] tracking-tight mb-0.5" style={{ color: '#1a2b4a' }}>{val}</div>
                      <div className="font-mono text-[9px] tracking-[0.10em] uppercase" style={{ color: '#999' }}>{label}</div>
                    </div>
                  ))}
                </div>

                {/* Location features */}
                <div className="px-8 pb-10">
                  <div className="font-mono text-[9px] tracking-[0.14em] uppercase mb-5" style={{ color: '#999' }}>
                    Why Kippa-Ring
                  </div>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {[
                      ['800m', 'to the waterfront esplanade and Moreton Bay foreshore'],
                      ['Direct train', 'to Brisbane CBD via Kippa-Ring station — 45 min'],
                      ['Walk to everything', 'Schools, shops, cafes, and the Redcliffe markets'],
                    ].map(([title, desc], i) => (
                      <div key={i} className="rounded-lg p-5" style={{ background: '#f2f0eb' }}>
                        <div className="font-serif text-[17px] tracking-tight mb-1.5" style={{ color: '#1a2b4a' }}>{title}</div>
                        <div className="text-[12px] leading-[1.55]" style={{ color: '#777' }}>{desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Project label */}
          <FadeIn delay={120}>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
              <h3 className="font-serif text-[28px] tracking-tight">The Peninsula at Kippa-Ring</h3>
              <p className="text-[14px] text-ink-3 leading-[1.5]">
                Property landing page — lead generation, ad creative, campaign messaging.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
