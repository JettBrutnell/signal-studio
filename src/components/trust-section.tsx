import FadeIn from './fade-in'

const testimonials = [
  {
    quote: 'We had been burning money on ads that sent people to our main website. Signal rebuilt the whole flow in under two weeks and our bookings nearly doubled.',
    name: 'Dr. Sarah Chen',
    role: 'Founder',
    company: 'Meridian Skin Clinic',
  },
  {
    quote: 'Signal understood that we were not selling apartments — we were selling financial outcomes to investors and lifestyle to buyers. The segmented approach was the difference.',
    name: 'Marcus Hale',
    role: 'Sales Director',
    company: 'Apex Property Group',
  },
  {
    quote: 'Fast, reliable, and zero hand-holding needed. I send a brief and get back production-ready assets that actually perform. Best creative partner we have worked with.',
    name: 'Jess Wardle',
    role: 'Media Buyer',
    company: 'Independent (DTC clients)',
  },
]

const operationalProof = [
  { metric: '92%', label: 'Repeat-client rate', detail: '9 of 11 clients have commissioned a second project or moved to retainer.' },
  { metric: '<5 days', label: 'Average first-draft delivery', detail: 'From brief sign-off to first concepts in hand.' },
  { metric: '2 rounds', label: 'Revisions included', detail: 'Most projects ship after one round. Two are included as standard.' },
  { metric: '1:1', label: 'Founder-led, no layers', detail: 'You talk to the person doing the work. No project managers, no account execs.' },
]

export default function TrustSection() {
  return (
    <section className="py-24 lg:py-28 bg-muted/50 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Trust &amp; Proof</p>
        </FadeIn>
        <FadeIn delay={80}>
          <h2 className="text-3xl lg:text-4xl font-medium leading-tight tracking-tight max-w-xl">
            What clients say. How we operate. Why teams come back.
          </h2>
        </FadeIn>

        {/* Testimonials */}
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={160 + i * 100}>
              <div className="bg-white border border-border rounded-2xl p-6 card-hover h-full flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 16 16" fill="currentColor" className="text-accent">
                      <path d="M8 1l2.2 4.4 4.8.7-3.5 3.4.8 4.8L8 12l-4.3 2.3.8-4.8L1 6.1l4.8-.7z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Operational proof */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {operationalProof.map((item, i) => (
            <FadeIn key={i} delay={300 + i * 80}>
              <div className="bg-white border border-border rounded-xl p-5 text-center card-hover">
                <p className="text-2xl font-semibold tracking-tight">{item.metric}</p>
                <p className="text-xs font-medium mt-1">{item.label}</p>
                <p className="text-[11px] text-muted-foreground mt-1.5">{item.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
