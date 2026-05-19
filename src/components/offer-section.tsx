import FadeIn from './fade-in'
import SectionHead from './section-head'

const offers = [
  {
    name: 'Ad Creative Sprint',
    who: 'For businesses or media buyers who need a fresh batch of campaign-ready ads.',
    price: 'From $350',
    time: '1–2 weeks',
    includes: ['Creative direction', 'Static ad concepts', 'Multiple ratios (9:16 · 1:1 · 4:5)', 'Hook and CTA variants'],
    featured: false,
  },
  {
    name: 'Landing Page Build',
    who: 'For businesses sending paid traffic to a page that needs to convert better.',
    price: 'From $750',
    time: '2 weeks',
    includes: ['Page structure', 'Copy hierarchy', 'Figma or Framer design', 'CTA and form strategy'],
    featured: false,
  },
  {
    name: 'Campaign Launch Pack',
    who: 'For businesses launching a new offer, product, or service.',
    price: 'From $1,000',
    time: '2–3 weeks',
    includes: ['Ad creative (ratios + variants)', 'Landing page direction', 'Campaign messaging', 'Visual system'],
    featured: true,
  },
]

export default function OfferSection() {
  return (
    <section id="offer" className="py-28 border-t border-line">
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,64px)]">
        <FadeIn>
          <SectionHead
            num="04"
            kicker="Starting points"
            title={<>Three ways to <span className="italic-accent">begin together.</span></>}
            sub="Fixed-scope projects. Most engagements start in one of these three shapes. Custom scopes available on request."
          />
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5">
          {offers.map((o, i) => (
            <FadeIn key={o.name} delay={i * 100}>
              <div
                className="rounded-xl p-8 flex flex-col h-full"
                style={{
                  background: o.featured ? 'var(--color-paper-3)' : 'var(--color-paper-2)',
                  color: 'var(--color-ink)',
                  border: o.featured ? '1px solid var(--color-accent)' : '1px solid var(--color-line)',
                }}
              >
                {/* Top meta */}
                <div className="flex justify-between items-center mb-[18px]">
                  <div className="mono" style={{ color: 'var(--color-accent)' }}>{o.time}</div>
                  {o.featured && (
                    <div className="font-mono text-[9px] tracking-widest uppercase bg-accent text-paper px-2 py-[3px] rounded">
                      Most common
                    </div>
                  )}
                </div>

                <h3 className="m-0 font-serif text-[34px] leading-[1.05] tracking-tight">{o.name}</h3>
                <p className="mt-3 mb-[22px] text-[14.5px] leading-[1.55] text-ink-2">
                  {o.who}
                </p>

                <div className="mt-auto">
                  {/* Includes */}
                  <div className="pt-[22px] mb-[22px] border-t border-line">
                    <div className="mono mb-2.5">Includes</div>
                    <ul className="flex flex-col gap-2 list-none p-0 m-0">
                      {o.includes.map(item => (
                        <li key={item} className="text-[13.5px] flex gap-2.5">
                          <span className="text-accent">+</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex justify-between items-end pt-[18px] border-t border-line">
                    <div>
                      <div className="mono">Starts at</div>
                      <div className="font-serif text-[32px] tracking-tight">{o.price}</div>
                    </div>
                    <a
                      href="#form"
                      data-clarity-label={`offer-cta-${o.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center gap-2 rounded-full px-[18px] py-[11px] text-[13px] font-medium text-paper transition-all hover:-translate-y-px"
                      style={{ background: o.featured ? 'var(--color-accent)' : 'var(--color-ink)' }}
                    >
                      Get a quote <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <p className="mt-9 text-sm text-ink-3 max-w-[720px] leading-[1.6]">
            Projects are scoped based on deliverables, timeline, and asset count. Pricing reflects a fixed-scope engagement with two structured revision rounds. Custom scopes are available — send us the brief and we&apos;ll quote it directly.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
