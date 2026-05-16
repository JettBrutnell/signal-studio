import FadeIn from './fade-in'
import { MiniLP, MiniAd } from './mock-visuals'

export default function HeroSection() {
  return (
    <section id="top" className="pt-40 pb-28 relative">
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,64px)]">
        {/* Eyebrow */}
        <FadeIn>
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.10em] uppercase text-ink-3 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>Creative agency &middot; Currently accepting new projects</span>
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={80}>
          <h1 className="display m-0 text-[clamp(48px,7vw,104px)] max-w-[1100px]">
            Conversion-focused creative<br className="hidden lg:block" />
            for ads, landing pages,<br className="hidden lg:block" />
            and <span className="italic-accent">campaign launches.</span>
          </h1>
        </FadeIn>

        {/* Sub */}
        <FadeIn delay={160}>
          <p className="mt-9 mb-10 max-w-[620px] text-[19px] leading-[1.55] text-ink-2">
            Signal Studio helps businesses and media buyers turn offers, campaigns, and ideas
            into polished creative built for clarity, speed, and conversion. Fixed scope. Fast delivery. Direct collaboration.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={220}>
          <div className="flex gap-3.5 flex-wrap mb-20">
            <a href="#form" className="inline-flex items-center gap-2.5 bg-ink text-paper font-medium px-[22px] py-[13px] rounded-full text-sm hover:bg-accent hover:-translate-y-px transition-all">
              Request a project fit review <span>&rarr;</span>
            </a>
            <a href="#work" className="inline-flex items-center gap-2.5 text-ink border border-ink px-[22px] py-[13px] rounded-full text-sm hover:bg-ink hover:text-paper transition-all">
              View selected work
            </a>
          </div>
        </FadeIn>

        {/* Operational proof row */}
        <FadeIn delay={280}>
          <div className="pt-9 border-t border-line grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              ['Fixed scope', 'Defined deliverables. No surprise scope creep.'],
              ['Fast turnaround', 'Most projects ship in 2–3 weeks.'],
              ['Direct contact', 'You work with the team making the work.'],
              ['Clean handoff', 'Source files, named, organized by use.'],
            ].map(([title, desc], i) => (
              <div key={i}>
                <div className="mono text-accent mb-2">0{i + 1}</div>
                <div className="font-serif text-[22px] leading-[1.1] tracking-tight text-ink mb-1.5">{title}</div>
                <div className="text-[13px] text-ink-3 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Sample visual — one carefully placed piece, not a collage */}
        <FadeIn delay={360}>
          <div className="mt-20 relative">
            <div className="mono mb-[18px]">A recent page — in progress</div>
            <div className="relative max-w-[880px] mx-auto">
              <MiniLP
                headline="Sleep cooler. Without changing your mattress."
                sub="A weighted, cooling sheet system. Tested cooler than the top 3 competitors. 60-night trial, free returns."
                cta="Try it for 60 nights"
                className="shadow-[0_30px_80px_-20px_oklch(0_0_0/0.15)]"
              />
              <div className="absolute -right-5 top-10 w-[180px] rotate-[4deg] hidden lg:block">
                <MiniAd
                  ratio="4/5"
                  headline="Skip the bedtime debate."
                  sub="Cool. Heavy. Made of wool."
                  brand="HAVN"
                  cta="Shop bedding"
                  label="MATCH"
                  className="shadow-[0_20px_60px_-20px_oklch(0_0_0/0.2)]"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
