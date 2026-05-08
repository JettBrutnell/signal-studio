import FadeIn from './fade-in'

const stats = [
  {
    value: '2+',
    label: 'Client landing pages delivered',
    description: 'Built end to end for appointment-based businesses.',
  },
  {
    value: 'Live',
    label: 'Static ad creative running',
    description: 'Geo-actively driving traffic to client offers.',
  },
  {
    value: '1:1',
    label: 'Direct, founder-led communication',
    description: 'Fast turnaround. No account manager layers.',
  },
]

export default function CredibilitySection() {
  return (
    <section id="work" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Credibility
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="text-3xl lg:text-[2.75rem] font-medium leading-tight tracking-tight max-w-lg">
            Built for businesses where every enquiry matters.
          </h2>
        </FadeIn>

        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={200 + i * 120}>
              <div className="relative border border-border rounded-2xl p-7 lg:p-8 card-hover group overflow-hidden h-full">
                {/* Accent glow on hover */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/0 group-hover:bg-accent/10 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

                <div className="relative">
                  <p className="text-5xl lg:text-6xl font-medium tracking-tight mb-5 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium mb-1">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
