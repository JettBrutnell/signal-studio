import FadeIn from './fade-in'
import SectionHead from './section-head'
import { MiniAd, MiniLP } from './mock-visuals'

const cards = [
  {
    n: '01',
    title: 'Paid Social Creative',
    desc: 'Static and motion-ready ad concepts built around hooks, offer clarity, safe zones, and platform-ready layouts.',
    deliv: ['Meta ad creatives', 'Story, square, and landscape formats', 'Hook and CTA variants', 'Campaign concept directions'],
    visual: <MiniAd ratio="4/5" headline="Hook · 6s read" sub="Pain → product" brand="STUDIO" cta="See more" label="1:1" />,
  },
  {
    n: '02',
    title: 'Landing Pages',
    desc: 'Clean landing pages built to explain the offer, build trust, handle objections, and drive enquiries.',
    deliv: ['Landing page structure', 'Copy hierarchy', 'Framer or Figma designs', 'CTA and form strategy'],
    visual: <MiniLP headline="A page that earns its click." sub="Built for the campaign, not the brand site." cta="Continue" />,
  },
  {
    n: '03',
    title: 'Campaign Asset Systems',
    desc: 'Launch-ready creative sets that keep ads, landing pages, and campaign messaging consistent.',
    deliv: ['Ad sets across ratios', 'Landing page sections', 'Visual direction', 'Campaign messaging', 'Creative variants'],
    visual: (
      <div className="relative h-full grid grid-cols-2 gap-2 p-1">
        <MiniAd ratio="9/16" brand="BRAND" cta="Shop" />
        <div className="flex flex-col gap-2">
          <MiniAd ratio="1/1" brand="BRAND" cta="Shop" />
          <div className="placeholder-img flex-1 text-[9px]">LP / hero</div>
        </div>
      </div>
    ),
  },
]

export default function ServicesSection() {
  return (
    <section id="what" className="py-28 border-t border-line">
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,64px)]">
        <FadeIn>
          <SectionHead
            num="01"
            kicker="What we do"
            title={<>Three things, <span className="italic-accent">done well.</span></>}
            sub="Signal Studio doesn't do brand systems, logos, or websites for the trophy shelf. Three engagements, scoped tightly."
          />
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <FadeIn key={c.n} delay={i * 100}>
              <div className="bg-paper border border-line rounded-xl overflow-hidden flex flex-col h-full">
                {/* Visual area */}
                <div className="aspect-[4/3] border-b border-line bg-paper-2 relative overflow-hidden">
                  <div className="absolute inset-5 flex items-center justify-center">
                    <div className="w-[70%] max-h-full">{c.visual}</div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 lg:p-7 flex-1 flex flex-col">
                  <div className="mono text-accent">{c.n}</div>
                  <h3 className="mt-3 mb-2.5 font-serif text-[30px] leading-[1.05] tracking-tight">{c.title}</h3>
                  <p className="text-[14.5px] leading-[1.55] text-ink-2">{c.desc}</p>
                  <div className="mt-auto pt-5">
                    <div className="pt-[18px] border-t border-dashed border-line">
                      <div className="mono mb-2.5">Deliverables</div>
                      <ul className="flex flex-col gap-1.5 list-none p-0 m-0">
                        {c.deliv.map(d => (
                          <li key={d} className="text-[13px] text-ink-2 flex gap-2">
                            <span className="text-ink-4">&middot;</span>{d}
                          </li>
                        ))}
                      </ul>
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
