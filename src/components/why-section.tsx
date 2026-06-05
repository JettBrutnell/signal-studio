import FadeIn from './fade-in'
import SectionHead from './section-head'

const bullets = [
  ['Strategy baked into every deliverable', "We don't just make things look good — every asset is built around your offer, your audience, and a clear conversion goal."],
  ['Campaign-ready from day one', 'Files arrive named, ratio-organized, and ready to run. No rework, no reformatting, no wasted ad spend on broken assets.'],
  ['One team, one thread, zero handoffs', 'The people on the call are the people doing the work. Nothing gets lost in translation between departments.'],
  ['Fixed scope, no surprises', 'You know exactly what you get, what it costs, and when it ships. Scope changes are agreed in writing before anything moves.'],
  ['Built for speed without cutting corners', 'Most projects deliver in two to three weeks. We move fast because the process is tight, not because the work is rushed.'],
  ['Designed for teams that ship', 'Founders, media buyers, growth leads — if you make decisions quickly and value execution over process theatre, we are the right fit.'],
]

export default function WhySection() {
  return (
    <section className="py-28 border-t border-line bg-paper-2">
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,64px)]">
        <FadeIn>
          <SectionHead
            num="03"
            kicker="Why Clear Motive"
            title={<>Six reasons teams <span className="italic-accent">keep coming back.</span></>}
            sub="No testimonial wall. No client logos. Just the commitments we make on every project — and why they matter."
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-x-20 gap-y-9">
          {bullets.map(([h, s], i) => (
            <FadeIn key={i} delay={i * 60}>
              <div className="grid grid-cols-[54px_1fr] gap-5 pt-[22px] border-t border-line">
                <div className="mono text-accent">0{i + 1}</div>
                <div>
                  <div className="font-heading font-bold text-[24px] leading-[1.05] text-ink" style={{ letterSpacing: '-0.03em' }}>{h}</div>
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
