import Image from 'next/image'
import FadeIn from './fade-in'
import SectionHead from './section-head'

const projects = [
  {
    slug: 'aether-living',
    label: 'Brand + Web',
    client: 'Aether Living',
    blurb: 'Full site redesign for a modern real estate brand. Elevated from generic to editorial.',
    img: '/work-aether.png',
    aspect: 'aspect-[3/4]',
  },
  {
    slug: 'solstice-studio',
    label: 'Campaign Pack',
    client: 'Solstice Studio',
    blurb: 'Brand guide, print collateral, and digital assets for a boutique interior design firm.',
    img: '/work-solstice.png',
    aspect: 'aspect-[3/4]',
  },
  {
    slug: 'sagemill',
    label: 'Full Rebrand',
    client: 'Sagemill',
    blurb: 'Before: generic, outdated, forgettable. After: strategic, elevated, effective.',
    img: '/work-sagemill.png',
    aspect: 'aspect-[3/4]',
  },
]

export default function WorkSection() {
  return (
    <section id="work" className="py-28 border-t border-line">
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,64px)]">
        <FadeIn>
          <SectionHead
            num="02"
            kicker="Recent work"
            title={<>What we&apos;ve <span className="italic-accent">shipped.</span></>}
            sub="A sample of projects across brand, web, and campaign. Results over aesthetics — though ideally both."
          />
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 100}>
              <div className="group img-card rounded-xl overflow-hidden border border-line bg-paper-2">
                {/* Image */}
                <div className={`relative ${p.aspect} overflow-hidden`}>
                  <Image
                    src={p.img}
                    alt={p.client}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  {/* Label badge */}
                  <div className="absolute top-4 left-4 font-mono text-[9px] tracking-widest uppercase bg-paper/80 backdrop-blur-sm text-ink-2 px-2.5 py-1 rounded">
                    {p.label}
                  </div>
                </div>

                {/* Meta */}
                <div className="p-5 border-t border-line">
                  <div className="font-heading font-bold text-[20px] leading-tight text-ink" style={{ letterSpacing: '-0.03em' }}>{p.client}</div>
                  <p className="mt-1.5 text-[13.5px] text-ink-3 leading-[1.5]">{p.blurb}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={350}>
          <div className="mt-9 flex items-center gap-5">
            <div className="h-px flex-1 bg-line" />
            <p className="text-[13px] text-ink-4 font-mono tracking-[0.05em] uppercase">
              More work on request
            </p>
            <div className="h-px flex-1 bg-line" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
