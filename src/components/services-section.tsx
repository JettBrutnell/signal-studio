import Image from 'next/image'
import FadeIn from './fade-in'
import SectionHead from './section-head'
import TiltCard from './tilt-card'

const cards = [
  {
    n: '01',
    title: 'Paid Social Creative',
    desc: 'Static and motion-ready ad concepts built around hooks, offer clarity, safe zones, and platform-ready layouts.',
    deliv: ['Meta ad creatives', 'Story, square, and landscape formats', 'Hook and CTA variants', 'Campaign concept directions'],
    img: '/service-ads.png',
    imgAlt: 'Paid social ad creative examples',
  },
  {
    n: '02',
    title: 'Landing Pages',
    desc: 'Clean landing pages built to explain the offer, build trust, handle objections, and drive enquiries.',
    deliv: ['Landing page structure', 'Copy hierarchy', 'Framer or Figma designs', 'CTA and form strategy'],
    img: '/service-landing.png',
    imgAlt: 'Landing page design on laptop and mobile',
  },
  {
    n: '03',
    title: 'Campaign Asset Systems',
    desc: 'Launch-ready creative sets that keep ads, landing pages, and campaign messaging consistent.',
    deliv: ['Ad sets across ratios', 'Landing page sections', 'Visual direction', 'Campaign messaging', 'Creative variants'],
    img: '/service-campaign.png',
    imgAlt: 'Full campaign asset system across formats',
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
            sub="We don't do brand systems, logos, or trophy-shelf websites. Three engagement types, scoped tightly."
          />
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <FadeIn key={c.n} delay={i * 100}>
              <TiltCard className="h-full">
                <div className="bg-paper border border-line rounded-xl overflow-hidden flex flex-col h-full">
                  {/* Visual area */}
                  <div className="aspect-[4/3] border-b border-line relative overflow-hidden">
                    <Image
                      src={c.img}
                      alt={c.imgAlt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover object-center"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6 lg:p-7 flex-1 flex flex-col">
                    <div className="mono text-accent">{c.n}</div>
                    <h3 className="mt-3 mb-2.5 font-heading font-bold text-[28px] leading-[1.0] tracking-tighter">{c.title}</h3>
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
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
