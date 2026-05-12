'use client'

import { useState } from 'react'
import FadeIn from './fade-in'

const categories = [
  'All',
  'Paid Social Creative',
  'Landing Pages',
  'Creative Testing',
  'Campaign Assets',
  'Lead Gen Funnels',
]

const projects = [
  {
    category: 'Paid Social Creative',
    client: 'Skin clinic (dermatology)',
    objective: 'Increase booking leads from cold traffic',
    service: 'Static ad creative',
    deliverables: '6 static variants, 3 hook angles, 2 aspect ratios',
    result: '3.2% CTR · 38% lower CPL',
    context: 'Meta Ads · £4k/mo spend · 4-day turnaround',
  },
  {
    category: 'Landing Pages',
    client: 'Boutique property developer',
    objective: 'Drive off-plan registrations',
    service: 'Landing page + lead capture',
    deliverables: 'Full landing page, thank-you page, email notification',
    result: '42% lower CPL vs. previous page',
    context: 'Meta + Google · £8k/mo spend · 8-day build',
  },
  {
    category: 'Creative Testing',
    client: 'DTC supplement brand',
    objective: 'Find winning creative angles at scale',
    service: 'Creative testing system',
    deliverables: '16 ad variants across 4 hook angles, testing framework',
    result: 'Winning variant ran 11 weeks before fatigue',
    context: 'Meta Ads · £12k/mo spend · ongoing',
  },
  {
    category: 'Campaign Assets',
    client: 'Fitness coaching brand',
    objective: 'Launch new programme with full creative suite',
    service: 'Campaign launch assets',
    deliverables: 'Ads, landing page, email sequence, social assets',
    result: '2.8x ROAS across first 90 days',
    context: 'Meta + TikTok · £6k/mo spend · 12-day delivery',
  },
  {
    category: 'Lead Gen Funnels',
    client: 'B2B consultancy',
    objective: 'Generate qualified leads from LinkedIn and Meta',
    service: 'Full funnel creative',
    deliverables: 'Lead magnet landing page, 8 ad variants, nurture sequence',
    result: '£32 CPL (target was £50)',
    context: 'LinkedIn + Meta · £3k/mo spend · 10-day build',
  },
  {
    category: 'Paid Social Creative',
    client: 'Luxury gym group',
    objective: 'Fill trial class bookings in new locations',
    service: 'Geo-targeted ad creative',
    deliverables: '4 location-specific ad sets, 3 formats each',
    result: '74% of trial slots filled in week 1',
    context: 'Meta Ads · £2k/mo spend · 3-day turnaround',
  },
  {
    category: 'Landing Pages',
    client: 'Legal services firm',
    objective: 'Convert PPC traffic to consultation requests',
    service: 'Landing page for paid traffic',
    deliverables: 'Landing page, A/B headline variant, form integration',
    result: '18% conversion rate (up from 6%)',
    context: 'Google Ads · £5k/mo spend · 7-day build',
  },
  {
    category: 'Campaign Assets',
    client: 'E-commerce pet brand',
    objective: 'Support seasonal sale with multi-platform creative',
    service: 'Seasonal campaign suite',
    deliverables: '12 ad variants, 2 landing pages, email banners',
    result: '4.1x ROAS during campaign window',
    context: 'Meta + Google + email · £10k campaign · 6-day turnaround',
  },
]

export default function PortfolioGrid() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="work" className="py-24 lg:py-28 bg-muted/50 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Work</p>
          <h2 className="text-3xl lg:text-4xl font-medium leading-tight tracking-tight max-w-xl">
            Projects organised by the problem they solved.
          </h2>
        </FadeIn>

        {/* Filter tabs */}
        <FadeIn delay={100}>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-full border transition-all duration-200 ${
                  active === cat
                    ? 'bg-foreground text-background border-foreground'
                    : 'bg-white text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {filtered.map((project, i) => (
            <div
              key={`${project.client}-${active}`}
              className="border border-border rounded-2xl bg-white p-6 card-hover"
              style={{
                opacity: 0,
                animation: `fadeSlideUp 500ms cubic-bezier(.16,1,.3,1) ${i * 80}ms forwards`,
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">{project.category}</span>
                  <p className="text-base font-medium mt-1">{project.client}</p>
                </div>
                <span className="text-sm font-semibold text-accent-foreground bg-accent/15 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                  {project.result.split('·')[0].trim()}
                </span>
              </div>

              <p className="text-sm text-muted-foreground"><span className="text-foreground font-medium">Objective:</span> {project.objective}</p>
              <p className="text-sm text-muted-foreground mt-1"><span className="text-foreground font-medium">Deliverables:</span> {project.deliverables}</p>
              <p className="text-sm text-muted-foreground mt-1"><span className="text-foreground font-medium">Result:</span> {project.result}</p>

              <div className="mt-4 pt-3 border-t border-border">
                <p className="text-[11px] text-muted-foreground">{project.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
