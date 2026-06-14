import Image from 'next/image'
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
            num="02"
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

        {/* Founder note */}
        <FadeIn delay={420}>
          <div className="mt-12 grid md:grid-cols-[auto_1fr] gap-0 rounded-xl overflow-hidden border border-line">
            <div className="relative hidden md:block w-[220px] flex-shrink-0">
              <Image
                src="/founder-portrait.png"
                alt="Jett Brutnell, founder of Clear Motive"
                fill
                sizes="220px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-paper-2/80 pointer-events-none" />
            </div>
            <div className="p-6 lg:p-8 bg-paper-2">
              <p className="text-[16px] text-ink leading-[1.65] max-w-[560px]">
                &ldquo;I started Clear Motive because I got tired of watching good businesses lose money on
                creative that looked nice but didn&apos;t sell. Everything we build has a job to do.&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                  <Image src="/founder-portrait.png" alt="Jett Brutnell" fill sizes="36px" className="object-cover object-top" />
                </div>
                <div>
                  <div className="font-heading font-bold text-[14px] text-ink" style={{ letterSpacing: '-0.02em' }}>Jett Brutnell</div>
                  <div className="font-mono text-[9px] tracking-widest uppercase text-ink-4">Founder, Clear Motive</div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
