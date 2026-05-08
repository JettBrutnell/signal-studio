import FadeIn from './fade-in'

const services = [
  {
    number: '01',
    title: 'Landing Pages',
    description:
      'Focused pages built around one offer, one audience, and one clear action.',
    features: [
      'Conversion-first structure',
      'Custom messaging direction',
      'Booking flow integration',
    ],
  },
  {
    number: '02',
    title: 'Website Redesigns',
    description:
      'Cleaner structure, stronger messaging, and harder-working flow for service businesses.',
    features: [
      'Information architecture',
      'Brand-aligned visual system',
      'Editable, lightweight build',
    ],
  },
  {
    number: '03',
    title: 'Static Ads',
    description:
      'Scroll-stopping creative designed to match the offer and drive action.',
    features: [
      'Meta and Google sets',
      'Platform-ready templates',
      'Ad-to-page consistency',
    ],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            The Offer
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="text-3xl lg:text-[2.75rem] font-medium leading-tight tracking-tight max-w-xl">
            A sharper digital system for getting more booked consults.
          </h2>
        </FadeIn>

        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <FadeIn key={service.number} delay={200 + i * 120}>
              <div className="border border-border rounded-2xl overflow-hidden card-hover group h-full bg-white">
                {/* Card header */}
                <div className="px-6 py-4 flex items-center justify-between border-b border-border bg-muted/50 group-hover:bg-accent/5 transition-colors duration-300">
                  <span className="text-xs text-muted-foreground tracking-wider font-medium">
                    {service.number} / SERVICE
                  </span>
                  <svg
                    className="text-border group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Card body */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                        <span className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                          <svg width="10" height="10" viewBox="0 0 14 14" fill="none" className="text-foreground">
                            <path d="M2 7l4 4 6-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
