import FadeIn from './fade-in'

export default function CtaSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden grain">
      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-grid-dark pointer-events-none" />

      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-accent/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-[5%] w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-background/10 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-background/35 mb-4">
            Next Step
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight tracking-tight max-w-xl">
            Your site should make the next step{' '}
            <em className="font-serif italic font-normal text-accent">obvious.</em>
          </h2>
        </FadeIn>

        <FadeIn delay={250}>
          <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-6">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 bg-accent text-accent-foreground font-medium px-7 py-4 rounded-full hover:shadow-[0_0_30px_rgba(200,255,0,0.3)] transition-all duration-300 text-sm"
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
            <div className="text-sm text-background/40 space-y-1">
              <p>30-minute call &middot; No pitch decks.</p>
              <p>
                You&apos;ll walk away with a clear read on what&apos;s holding your
                enquiries.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Decorative accent bar */}
        <FadeIn delay={400}>
          <div className="mt-16 flex items-center gap-3">
            <div className="h-px flex-1 bg-background/10" />
            <span className="w-2 h-2 rounded-full bg-accent" />
            <div className="h-px w-12 bg-accent/40" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
