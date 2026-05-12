import FadeIn from './fade-in'

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/10 blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
                Conversion-focused creative studio
              </p>
            </FadeIn>
            <FadeIn delay={80}>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] tracking-tight">
                Creative for paid acquisition teams that need ads, landing pages, and campaign assets{' '}
                <em className="font-serif italic font-normal">built to convert.</em>
              </h1>
            </FadeIn>
            <FadeIn delay={160}>
              <p className="mt-5 text-muted-foreground text-[15px] leading-relaxed max-w-lg">
                Signal Studio builds performance creative for media buyers, growth teams, and DTC brands.
                Static ads, landing pages, creative testing systems, and campaign assets &mdash; designed
                around your funnel, delivered on deadline.
              </p>
            </FadeIn>
            <FadeIn delay={240}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a href="#contact" className="group inline-flex items-center gap-2 bg-foreground text-background font-medium px-5 py-3 rounded-full text-sm hover:bg-foreground/90 transition">
                  Request a Project Fit Review
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5"><path d="M3 8h10M10 4l3.5 4-3.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <a href="#case-studies" className="text-sm font-medium text-foreground hover:text-muted-foreground transition">
                  View Case Studies &darr;
                </a>
              </div>
            </FadeIn>

            {/* Proof row */}
            <FadeIn delay={320}>
              <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  12+ campaign systems delivered
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  &lt; 5-day avg. turnaround
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  92% repeat-client rate
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Visual collage */}
          <FadeIn delay={200} direction="right" className="relative hidden lg:block h-[520px]">
            {/* Ad variant card */}
            <div className="absolute top-0 left-0 w-[180px] bg-white rounded-xl border border-border shadow-md overflow-hidden card-hover">
              <div className="h-[140px] bg-gradient-to-br from-foreground to-foreground/80 p-4 flex flex-col justify-between text-background">
                <span className="text-[9px] uppercase tracking-wider opacity-60">Meta &middot; 1080&times;1080</span>
                <div>
                  <p className="text-xs font-medium leading-tight">Book your free<br/>skin consultation</p>
                  <span className="mt-2 inline-block text-[8px] bg-accent text-accent-foreground px-2 py-0.5 rounded-full font-medium">Book Now &rarr;</span>
                </div>
              </div>
              <div className="px-3 py-2 flex items-center justify-between">
                <span className="text-[9px] text-muted-foreground">Variant A</span>
                <span className="text-[9px] text-accent font-medium">3.2% CTR</span>
              </div>
            </div>

            {/* Landing page mockup */}
            <div className="absolute top-4 right-0 w-[240px] bg-white rounded-xl border border-border shadow-lg overflow-hidden card-hover">
              <div className="px-3 py-1.5 border-b border-border flex items-center gap-1 bg-muted/50">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400/50" />
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/50" />
                <span className="w-1.5 h-1.5 rounded-full bg-green-400/50" />
                <span className="ml-1.5 text-[8px] text-muted-foreground bg-white rounded px-2 py-0.5 flex-1 text-center border border-border">client-lp.com</span>
              </div>
              <div className="p-4">
                <div className="h-16 bg-gradient-to-br from-muted to-border rounded-lg mb-3" />
                <div className="space-y-1.5">
                  <div className="h-2 bg-foreground/10 rounded w-3/4" />
                  <div className="h-2 bg-foreground/10 rounded w-full" />
                  <div className="h-2 bg-foreground/10 rounded w-2/3" />
                </div>
                <div className="mt-3 flex gap-1.5">
                  <span className="h-6 bg-foreground text-background text-[8px] px-3 rounded-full flex items-center">Get Started</span>
                  <span className="h-6 border border-border text-[8px] px-3 rounded-full flex items-center">Learn More</span>
                </div>
              </div>
            </div>

            {/* Variant testing card */}
            <div className="absolute top-[200px] left-[20px] w-[200px] bg-foreground text-background rounded-xl p-4 shadow-lg card-hover">
              <span className="text-[9px] uppercase tracking-wider text-background/40">Creative testing</span>
              <p className="text-sm font-medium mt-2">4 hook variants</p>
              <p className="text-[11px] text-background/50 mt-1">Testing headline, visual, CTA, and social proof angles</p>
              <div className="mt-3 grid grid-cols-4 gap-1">
                {['A', 'B', 'C', 'D'].map((v) => (
                  <div key={v} className={`h-10 rounded text-[8px] flex items-center justify-center font-medium ${v === 'B' ? 'bg-accent text-accent-foreground' : 'bg-background/10'}`}>{v}</div>
                ))}
              </div>
              <p className="text-[9px] text-accent mt-2">Variant B: +42% vs. control</p>
            </div>

            {/* Performance stat */}
            <div className="absolute right-[20px] top-[260px] w-[150px] bg-white rounded-xl border border-border shadow-md p-3 card-hover">
              <span className="text-[9px] text-muted-foreground uppercase tracking-wider">Campaign ROAS</span>
              <p className="text-2xl font-semibold tracking-tight mt-1">3.2x</p>
              <div className="mt-2 h-6 flex items-end gap-0.5">
                {[3, 5, 4, 6, 5, 8, 7, 9].map((h, i) => (
                  <span key={i} className={`w-full rounded-sm ${i >= 6 ? 'bg-accent' : 'bg-muted'}`} style={{ height: `${h * 2.5}px` }} />
                ))}
              </div>
            </div>

            {/* Delivery badge */}
            <div className="absolute bottom-8 left-4 right-4 bg-accent/10 border border-accent/20 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l4 4 6-8" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <p className="text-xs font-medium">Assets delivered &middot; Day 4</p>
                  <p className="text-[10px] text-muted-foreground">8 ad variants + landing page &middot; ready for launch</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
