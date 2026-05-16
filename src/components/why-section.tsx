import FadeIn from './fade-in'
import SectionHead from './section-head'

const bullets = [
  ['Strategy and design handled together', "You don't hand off a brief to a stranger and hope it survives the relay."],
  ['Built for campaign use, not just aesthetics', 'Files arrive named, ratio-organized, and ready to run.'],
  ['Clear communication, direct contact', 'You text the maker, not a project manager three timezones away.'],
  ['Fast, fixed-scope execution', 'Two to three weeks per engagement. No retainer pressure.'],
  ['Strong visual taste, plain language', 'No "elevating brand narratives." Sharp design, said simply.'],
  ['Made for founders, media buyers, and lean teams', 'If you have five marketing people, you are probably bigger than my best clients.'],
]

export default function WhySection() {
  return (
    <section className="py-28 border-t border-line bg-paper-2">
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,64px)]">
        <FadeIn>
          <SectionHead
            num="04"
            kicker="Why Signal Studio"
            title="What you get when you skip the agency."
            sub="Six things I commit to on every project. They replace the testimonial wall."
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-x-20 gap-y-9">
          {bullets.map(([h, s], i) => (
            <FadeIn key={i} delay={i * 60}>
              <div className="grid grid-cols-[54px_1fr] gap-5 pt-[22px] border-t border-line">
                <div className="mono text-accent">0{i + 1}</div>
                <div>
                  <div className="font-serif text-[26px] leading-[1.1] tracking-tight text-ink">{h}</div>
                  <div className="mt-2 text-[14.5px] text-ink-3 leading-[1.55]">{s}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
