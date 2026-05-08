import FadeIn from './fade-in'

const steps = [
  {
    number: '01',
    title: 'Diagnose',
    description:
      'Review your current site, offer, audience, and conversion leaks.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="8.5" cy="8.5" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 13l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Build the page structure, copy direction, visual system, and creative assets.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 14l8.5-8.5 3 3L6 17H3v-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11.5 5.5l3 3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Launch',
    description:
      'Hand over a clean, ready-to-use digital asset built for real enquiries.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 16L16 4M16 4H9M16 4v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-24 lg:py-32 bg-muted overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            The Process
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="text-3xl lg:text-[2.75rem] font-medium leading-tight tracking-tight max-w-2xl">
            Simple process. Clear checkpoints. No bloated agency theatre.
          </h2>
        </FadeIn>

        <div className="mt-16">
          {/* Timeline bar — desktop */}
          <FadeIn delay={250} className="hidden md:block mb-14">
            <div className="flex items-center">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center flex-1">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-border flex items-center justify-center text-foreground shrink-0 shadow-sm">
                    {step.icon}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 mx-3">
                      <div className="h-px bg-border relative">
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[9px] text-muted-foreground bg-muted px-3 uppercase tracking-widest whitespace-nowrap font-medium">
                          Step / {String(i + 1).padStart(2, '0')}
                        </span>
                        {/* Animated accent dot on line */}
                        <span className="absolute top-1/2 left-1/4 -translate-y-1/2 w-1.5 h-1.5 bg-accent rounded-full" />
                        <span className="absolute top-1/2 left-3/4 -translate-y-1/2 w-1.5 h-1.5 bg-accent rounded-full" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Step cards */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={300 + i * 150}>
                <div className="relative">
                  <p className="text-6xl lg:text-7xl font-light text-foreground/[0.06] leading-none mb-4 tracking-tighter">
                    {step.number}
                  </p>
                  <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  {/* Accent bar */}
                  <div className="mt-5 h-0.5 w-8 bg-accent rounded-full" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
