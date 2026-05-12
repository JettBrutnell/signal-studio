import FadeIn from './fade-in'

const studies = [
  {
    client: 'Meridian Skin Clinic',
    context: 'Independent dermatology clinic, 2 locations, appointment-based',
    problem: 'Existing website converted at 2.1% from paid traffic. Ad creative had not been refreshed in 6 months. CPL was climbing and the clinic was relying on word-of-mouth to fill appointment slots.',
    goal: 'Reduce CPL by 30% and increase monthly booking leads from 40 to 80+.',
    constraints: 'Budget capped at £4k/mo media spend. No in-house creative team. Needed to launch within 10 days of briefing.',
    strategy: 'Rebuilt the landing page around a single offer (free skin consultation) with proof-led copy. Created 6 ad variants testing 3 hook angles: authority ("dermatologist-led"), urgency ("limited slots this month"), and outcome ("visible results in 3 sessions"). All ads designed for Meta feed and stories placements with platform-safe text zones.',
    deliverables: 'Conversion-optimised landing page, 6 static ad variants (1080×1080 + 1080×1350), thank-you page, Calendly booking integration, UTM tracking setup.',
    iterations: 'Round 1: headline and hero image variants. Round 2: CTA button copy and form length testing. Shortened form from 6 fields to 3 after week-2 data showed 40% drop-off at field 4.',
    results: [
      '3.1x ROAS (up from 1.4x)',
      'CPL dropped from £48 to £29 (40% reduction)',
      'Monthly leads increased from 42 to 96',
      'Winning ad variant ran 11 weeks before creative fatigue',
    ],
    testimonial: {
      quote: 'We had been burning money on ads that sent people to our main website. Signal rebuilt the whole flow in under two weeks and our bookings nearly doubled.',
      name: 'Dr. Sarah Chen',
      role: 'Founder, Meridian Skin Clinic',
    },
  },
  {
    client: 'Apex Property Group',
    context: 'Boutique developer, off-plan apartment scheme, 24 units, Manchester',
    problem: 'Previous agency produced brand-heavy creative that generated impressions but very few registrations. The landing page was visually polished but had no clear conversion path. The sales team was manually chasing every enquiry with no structured funnel.',
    goal: 'Generate 200+ qualified registrations before the launch event, at under £40 CPL.',
    constraints: '£8k/mo media budget across Meta and Google. Competing with major housebuilders in the same market. Needed to segment investor vs. owner-occupier enquiries.',
    strategy: 'Designed a landing page with segmented registration paths: investors saw yield projections and payment structures; owner-occupiers saw lifestyle imagery and floor plans. Ad creative focused on scarcity ("12 of 24 units remaining"), social proof ("£1.2M in reservations in week 1"), and specificity ("2-bed apartments from £325k"). Gated floor plan downloads behind email capture for lead nurturing.',
    deliverables: '2 landing page variants (investor / owner-occupier), 8 static ad variants, floor plan download gate, email notification system, registration form with segmentation logic.',
    iterations: 'Round 1: tested investor vs. lifestyle lead angles. Round 2: added price anchoring to ads after data showed price-led ads outperformed lifestyle by 2.3x. Round 3: shortened registration form and added "What are you interested in?" dropdown to pre-qualify.',
    results: [
      '247 qualified registrations in 8 weeks',
      'CPL of £31 (22% under target)',
      'Investor segment converted at 2.4x the rate of lifestyle segment',
      '14 units reserved directly attributable to paid campaign',
    ],
    testimonial: {
      quote: 'Signal understood that we were not selling apartments — we were selling financial outcomes to investors and lifestyle to buyers. The segmented approach was the difference.',
      name: 'Marcus Hale',
      role: 'Sales Director, Apex Property Group',
    },
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 lg:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Case Studies</p>
        </FadeIn>
        <FadeIn delay={80}>
          <h2 className="text-3xl lg:text-4xl font-medium leading-tight tracking-tight max-w-xl">
            How the work gets results. Strategy, process, and proof.
          </h2>
        </FadeIn>

        <div className="mt-12 space-y-8">
          {studies.map((study, i) => (
            <FadeIn key={i} delay={160 + i * 120}>
              <article className="border border-border rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-foreground text-background p-6 lg:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-background/40 mb-1">Case Study {String(i + 1).padStart(2, '0')}</p>
                      <h3 className="text-xl lg:text-2xl font-medium">{study.client}</h3>
                      <p className="text-sm text-background/50 mt-1">{study.context}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.results.slice(0, 2).map((r, j) => (
                        <span key={j} className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full font-medium">{r}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 lg:p-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2">Business Problem</h4>
                      <p className="text-sm text-foreground leading-relaxed">{study.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2">Goal</h4>
                      <p className="text-sm text-foreground leading-relaxed">{study.goal}</p>
                      <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2 mt-4">Constraints</h4>
                      <p className="text-sm text-foreground leading-relaxed">{study.constraints}</p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2">Strategy &amp; Creative Rationale</h4>
                    <p className="text-sm text-foreground leading-relaxed">{study.strategy}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 border-t border-border pt-6">
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2">Deliverables</h4>
                      <p className="text-sm text-foreground leading-relaxed">{study.deliverables}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2">Iterations</h4>
                      <p className="text-sm text-foreground leading-relaxed">{study.iterations}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="border-t border-border pt-6">
                    <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-3">Results &amp; Commercial Impact</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {study.results.map((r, j) => (
                        <div key={j} className="bg-muted rounded-xl p-4">
                          <p className="text-sm font-medium text-foreground">{r}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-muted/60 rounded-xl p-5 border border-border">
                    <p className="text-sm text-foreground leading-relaxed italic">
                      &ldquo;{study.testimonial.quote}&rdquo;
                    </p>
                    <p className="text-xs text-muted-foreground mt-3">
                      <span className="font-medium text-foreground">{study.testimonial.name}</span> &mdash; {study.testimonial.role}
                    </p>
                  </div>

                  <div className="pt-2">
                    <a href="#contact" className="text-sm font-medium text-foreground hover:text-muted-foreground transition flex items-center gap-1.5">
                      Have a similar problem? Request a fit review &rarr;
                    </a>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
