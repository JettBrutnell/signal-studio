import FadeIn from './fade-in'

const industries = [
  'Clinics',
  'Gyms',
  'Builders',
  'Property campaigns',
  'Local service businesses',
  'Appointment-based practices',
]

export default function BestFitSection() {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <div>
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Best Fit
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="text-3xl lg:text-[2.75rem] font-medium leading-tight tracking-tight">
                Best fit for service businesses that need clarity, speed, and better
                conversion.
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="mt-6 flex flex-wrap gap-2">
                {industries.map((industry, i) => (
                  <span
                    key={industry}
                    className="text-xs border border-border rounded-full px-3.5 py-1.5 text-muted-foreground hover:border-foreground/30 hover:text-foreground transition-colors duration-300 cursor-default"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                Signal works closely with a small number of clients each quarter &mdash;
                focused on industries where booked time is the product.
              </p>
            </FadeIn>
          </div>

          {/* Right */}
          <div className="space-y-4">
            <FadeIn delay={250} direction="right">
              <div className="border border-border rounded-2xl p-6 card-hover">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2 font-medium">
                  Engagement
                </p>
                <p className="text-lg font-medium mb-1">Project-based</p>
                <p className="text-sm text-muted-foreground">
                  Fixed scope. Defined timeline. No retainers required.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={380} direction="right">
              <div className="relative border-2 border-accent/40 bg-accent/5 rounded-2xl p-6 card-hover overflow-hidden">
                {/* Accent glow */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-accent/20 rounded-full blur-2xl pointer-events-none" />

                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                      Availability
                    </p>
                  </div>
                  <p className="text-lg font-medium mb-1">2 slots open &middot; Q2</p>
                  <p className="text-sm text-muted-foreground">
                    Currently accepting new projects starting May 2026.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
