import FadeIn from './fade-in'

const steps = [
  {
    day: 'Day 1',
    title: 'Brief Intake',
    description: 'You share the goal, audience, budget range, and timeline. We confirm fit and define scope.',
    detail: 'You provide: brand assets, existing ads, target audience notes, and any performance data you have.',
  },
  {
    day: 'Day 2–3',
    title: 'Strategic Direction',
    description: 'We review your current assets, competitors, and positioning. We propose a creative direction with rationale.',
    detail: 'You receive: a written brief-back with our recommended approach, angles, and reference examples.',
  },
  {
    day: 'Day 3–5',
    title: 'Concepting',
    description: 'We present 2–3 concept directions. You choose one, or we refine based on feedback.',
    detail: 'Concepts include: layout, headline direction, visual treatment, and CTA approach.',
  },
  {
    day: 'Day 5–8',
    title: 'Production',
    description: 'We build final assets. Ads, landing pages, variants — whatever the scope covers.',
    detail: 'All assets built to platform spec. Multi-format exports included.',
  },
  {
    day: 'Day 8–10',
    title: 'Revisions',
    description: 'Two rounds of revisions included in every project. Feedback via Loom, email, or markup.',
    detail: 'Additional rounds available at an hourly rate. Most projects need one round or fewer.',
  },
  {
    day: 'Day 10–12',
    title: 'Delivery',
    description: 'Final files delivered in production-ready formats. Platform-specific exports included.',
    detail: 'You receive: organised file package, copy doc, and implementation notes.',
  },
  {
    day: 'Ongoing',
    title: 'Testing Support',
    description: 'Optional: we review performance data and recommend creative iterations based on what the numbers show.',
    detail: 'Available as a one-off review or as part of an ongoing creative support arrangement.',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
          {/* Left — sticky intro */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Process</p>
              <h2 className="text-3xl lg:text-4xl font-medium leading-tight tracking-tight">
                How the work gets done.
              </h2>
              <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
                Clear steps, predictable timelines, direct communication. No black boxes, no scope creep, no surprises.
              </p>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-8 h-8 rounded-lg bg-muted border border-border flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M8 4v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </span>
                  <span><span className="font-medium">Typical delivery:</span> 10–14 working days</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-8 h-8 rounded-lg bg-muted border border-border flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 8l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/></svg>
                  </span>
                  <span><span className="font-medium">Revisions:</span> 2 rounds included</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-8 h-8 rounded-lg bg-muted border border-border flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 4.5l6 4 6-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/></svg>
                  </span>
                  <span><span className="font-medium">Communication:</span> email + Loom, no meetings unless needed</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-8 h-8 rounded-lg bg-muted border border-border flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/></svg>
                  </span>
                  <span><span className="font-medium">Who leads:</span> founder-led, 1:1 throughout</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right — timeline */}
          <div className="space-y-3">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={100 + i * 60}>
                <div className="border border-border rounded-xl p-5 lg:p-6 card-hover group">
                  <div className="flex items-start gap-4">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground bg-muted px-2.5 py-1 rounded-full shrink-0 mt-0.5">
                      {step.day}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-base font-medium mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                      <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{step.detail}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
