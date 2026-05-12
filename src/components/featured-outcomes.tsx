import FadeIn from './fade-in'

const outcomes = [
  {
    client: 'Dermatology clinic',
    objective: 'Increase booking leads from paid social',
    result: '3.1x ROAS',
    detail: 'Landing page redesign + 6 ad variants. CPL dropped 38% in the first 30 days.',
    service: 'Landing page + paid social creative',
    channel: 'Meta Ads',
  },
  {
    client: 'Property developer',
    objective: 'Drive off-plan registrations at lower CPL',
    result: '42% lower CPL',
    detail: '8 static ad variants with hook testing. Best performer ran for 11 weeks before fatigue.',
    service: 'Creative testing system',
    channel: 'Meta + Google',
  },
  {
    client: 'Online fitness brand',
    objective: 'Scale acquisition creative without increasing cost',
    result: '2.8x ROAS',
    detail: 'Full campaign asset system: ads, landing page, email sequence. Consistent results across 3 months.',
    service: 'Full funnel creative',
    channel: 'Meta + TikTok',
  },
]

export default function FeaturedOutcomes() {
  return (
    <section className="py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Featured Outcomes</p>
        </FadeIn>
        <FadeIn delay={80}>
          <h2 className="text-3xl lg:text-4xl font-medium leading-tight tracking-tight max-w-xl">
            Recent results from campaigns we built creative for.
          </h2>
        </FadeIn>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {outcomes.map((item, i) => (
            <FadeIn key={i} delay={160 + i * 100}>
              <div className="border border-border rounded-2xl p-6 lg:p-7 card-hover h-full flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">{item.channel}</span>
                  <span className="text-[10px] bg-accent/15 text-foreground font-medium px-2.5 py-1 rounded-full">{item.service}</span>
                </div>
                <p className="text-3xl font-semibold tracking-tight text-foreground">{item.result}</p>
                <p className="text-sm font-medium mt-3">{item.client} &mdash; {item.objective}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2 flex-1">{item.detail}</p>
                <a href="#case-studies" className="mt-5 text-xs font-medium text-foreground hover:text-muted-foreground transition flex items-center gap-1">
                  Read full case study &rarr;
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
