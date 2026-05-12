import FadeIn from './fade-in'

const services = [
  {
    title: 'Paid Social Ad Creative',
    who: 'Media buyers and growth teams running Meta, TikTok, or LinkedIn campaigns.',
    problem: 'Creative fatigue, declining CTR, and rising CPL from stale or generic ad assets.',
    deliverables: 'Static ads, motion graphics, UGC-style assets, variant sets across multiple aspect ratios.',
    outcome: 'Lower CPL, higher CTR, faster testing cycles, longer creative lifespan.',
  },
  {
    title: 'Landing Pages for Paid Traffic',
    who: 'DTC brands, lead gen businesses, and agencies sending paid traffic to dedicated pages.',
    problem: 'Low conversion rates from sending ad traffic to a generic website instead of a focused landing page.',
    deliverables: 'Full landing page design and build, A/B headline variants, mobile-optimised layouts, form integration.',
    outcome: 'Higher conversion rate, lower bounce, better ROAS from existing ad spend.',
  },
  {
    title: 'Campaign Creative Systems',
    who: 'Teams running ongoing acquisition who need consistent, scalable creative output.',
    problem: 'Inconsistent creative quality, slow iteration speed, and no structured testing framework.',
    deliverables: 'Brand system, template library, variant frameworks, testing protocols, asset management.',
    outcome: 'Faster campaign launches, consistent performance, reduced per-asset creative cost.',
  },
  {
    title: 'Creative Audits',
    who: 'Brands with underperforming campaigns who need a diagnostic before committing to a full project.',
    problem: 'Unclear why campaigns are underperforming — could be the ad, the page, the funnel, or the offer.',
    deliverables: 'Page audit, ad creative audit, competitor analysis, prioritised action list.',
    outcome: 'Clear diagnosis of conversion blockers with specific, actionable recommendations.',
  },
  {
    title: 'Ongoing Creative Support',
    who: 'Teams that need reliable monthly creative capacity without hiring in-house.',
    problem: 'Freelancer inconsistency, agency overhead, and gaps between campaign cycles.',
    deliverables: 'Monthly creative hours, priority access, strategy calls, iterative campaign support.',
    outcome: 'Consistent output, campaign continuity, no hiring overhead.',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Services</p>
        </FadeIn>
        <FadeIn delay={80}>
          <h2 className="text-3xl lg:text-4xl font-medium leading-tight tracking-tight max-w-xl">
            What we build, who it&apos;s for, and what it does for your business.
          </h2>
        </FadeIn>

        <div className="mt-12 space-y-4">
          {services.map((service, i) => (
            <FadeIn key={i} delay={160 + i * 80}>
              <div className="border border-border rounded-2xl p-6 lg:p-8 card-hover group">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Left — title and who */}
                  <div className="lg:w-1/3 shrink-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center text-[10px] font-semibold text-foreground">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-lg font-medium">{service.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.who}</p>
                  </div>

                  {/* Right — problem, deliverables, outcome */}
                  <div className="flex-1 grid sm:grid-cols-3 gap-4">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-1.5">Problem</h4>
                      <p className="text-sm text-foreground leading-relaxed">{service.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-1.5">Deliverables</h4>
                      <p className="text-sm text-foreground leading-relaxed">{service.deliverables}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-1.5">Outcome</h4>
                      <p className="text-sm text-foreground leading-relaxed">{service.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
