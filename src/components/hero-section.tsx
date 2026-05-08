import FadeIn from './fade-in'

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-[-10%] w-[600px] h-[600px] rounded-full bg-accent/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div>
            <FadeIn delay={0}>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Independent Design Studio &middot; Est. 2018
              </p>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] tracking-tight">
                Websites and ads built to turn attention into{' '}
                <em className="font-serif italic font-normal">booked enquiries.</em>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl">
                Signal helps appointment-based businesses sharpen their online presence with
                conversion-first landing pages, websites, and static ad creative.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2.5 bg-foreground text-background font-medium px-6 py-3.5 rounded-full hover:bg-foreground/90 transition-all text-sm"
                >
                  Book a Strategy Call
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M7.5 6L11 9L7.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="#process"
                  className="text-sm font-medium text-foreground hover:text-muted-foreground transition flex items-center gap-1.5"
                >
                  See How It Works <span>&rarr;</span>
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="border border-border rounded-full px-3 py-1 bg-white/60 backdrop-blur-sm">Landing pages</span>
                <span className="border border-border rounded-full px-3 py-1 bg-white/60 backdrop-blur-sm">Static ads</span>
                <span className="border border-border rounded-full px-3 py-1 bg-white/60 backdrop-blur-sm">Conversion audits</span>
              </div>
            </FadeIn>
          </div>

          {/* Right — Mockup Stack */}
          <FadeIn delay={300} direction="right" className="relative hidden lg:block h-[480px]">
            {/* Main browser mockup */}
            <div className="absolute top-0 left-0 w-[340px] bg-white rounded-2xl border border-border shadow-lg shadow-black/5 overflow-hidden card-hover">
              <div className="px-3 py-2.5 border-b border-border flex items-center gap-1.5 bg-muted/50">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                <span className="ml-2 text-[10px] text-muted-foreground bg-white rounded-md px-3 py-0.5 flex-1 text-center border border-border">
                  meridian-clinic.co.uk
                </span>
              </div>
              <div className="p-6">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">
                  Meridian Clinic
                </p>
                <p className="text-base font-medium leading-snug">
                  Better skin in
                  <br />
                  three sessions.
                </p>
                <p className="text-[11px] text-muted-foreground mt-3 leading-relaxed">
                  Evidence-based skin consultations. Fast results. Real expertise.
                </p>
                <div className="mt-5 flex gap-2">
                  <span className="bg-foreground text-background text-[10px] font-medium px-4 py-1.5 rounded-full">
                    Book now
                  </span>
                  <span className="border border-border text-[10px] px-4 py-1.5 rounded-full">
                    Learn more
                  </span>
                </div>
                {/* Fake hero image placeholder */}
                <div className="mt-5 rounded-lg bg-gradient-to-br from-muted to-border h-20 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-muted-foreground/40">
                    <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="8.5" cy="8.5" r="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M2 16l5-4 3 3 4-5 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Stat card overlay */}
            <div className="absolute top-8 right-0 w-[210px] bg-white rounded-2xl border border-border shadow-lg shadow-black/5 p-5 card-hover">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">
                  Booking leads
                </span>
                <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-xs">&nearr;</span>
              </div>
              <p className="text-3xl font-semibold tracking-tight">+38%</p>
              <p className="text-[11px] text-muted-foreground mt-1">vs. previous quarter</p>
              <div className="mt-4 h-10 flex items-end gap-1">
                <span className="w-full h-3 bg-muted rounded-sm" />
                <span className="w-full h-5 bg-muted rounded-sm" />
                <span className="w-full h-4 bg-muted rounded-sm" />
                <span className="w-full h-7 bg-muted rounded-sm" />
                <span className="w-full h-6 bg-border rounded-sm" />
                <span className="w-full h-9 bg-accent/60 rounded-sm" />
                <span className="w-full h-10 bg-accent rounded-sm" />
              </div>
            </div>

            {/* Notification card */}
            <div className="absolute right-4 top-[220px] w-[200px] bg-white rounded-xl border border-border shadow-md shadow-black/5 p-3 card-hover">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 bg-accent rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l4 4 6-8" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-medium leading-tight">New booking received</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">via landing page &middot; 2m ago</p>
                </div>
              </div>
            </div>

            {/* Bottom flow card */}
            <div className="absolute bottom-0 left-4 right-4 bg-foreground text-background rounded-2xl p-5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l4 4 6-8" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Conversion flow verified</p>
                  <p className="text-[11px] text-background/50">
                    CTA &rarr; form &rarr; booking confirmation
                  </p>
                </div>
              </div>
              {/* Mini progress bar */}
              <div className="mt-4 h-1.5 bg-background/10 rounded-full overflow-hidden">
                <div className="h-full w-full bg-accent rounded-full" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
