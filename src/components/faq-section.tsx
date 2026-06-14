'use client'

import { useState } from 'react'
import FadeIn from './fade-in'

const items = [
  { q: 'Do you only work with established businesses?', a: "No. Most of our work is with early-stage founders, small DTC brands, and media buyers running modest-but-real budgets. If you have an offer and a goal, that's enough to start." },
  { q: 'Can you work with media buyers?', a: "Yes — a good chunk of our work is buyer-led. We deliver ad-set-ready files: named, labeled, ratio-organized. No back-and-forth on naming conventions." },
  { q: 'Can you create ads and landing pages together?', a: "Yes, and we recommend it. Ads and pages perform better when one team owns the message match. The Campaign Launch Pack is built around this." },
  { q: 'How fast can a project be delivered?', a: "An Ad Creative Sprint typically ships in 7–10 working days. Landing Page Builds run 10–14 days. Campaign Launch Packs run 2–3 weeks. Rush options exist for an additional fee." },
  { q: 'Do you offer fixed-scope projects?', a: "Yes — everything on the Starting Points list is fixed-scope. The price doesn't move unless the scope does, and any scope change is agreed in writing before work continues." },
  { q: 'Do you need performance data before starting?', a: "Helpful but not required. If you have it, we'll review it during the diagnose step. If you don't, we work from offer, audience, and intent instead." },
  { q: 'What if I only need one landing page or a few ads?', a: "Perfect — that's a large part of what we do. Smaller scopes are welcome and priced accordingly." },
  { q: 'What happens after I submit the form?', a: "You get a personal reply within one business day. The reply confirms whether the project is a fit, a rough scope, a timeline, and a next step. If it's not a fit, we'll say so." },
]

export default function FaqSection() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="py-28 border-t border-line">
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,64px)] grid lg:grid-cols-[1fr_1.5fr] gap-20 items-start">
        {/* Left — sticky heading */}
        <div className="lg:sticky lg:top-[100px]">
          <FadeIn>
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.10em] uppercase text-ink-3 mb-[18px]">
              <span className="text-accent">05</span>
              <span className="w-6 h-px bg-ink-2" />
              <span>FAQ</span>
            </div>
            <h2 className="display m-0 text-[clamp(36px,4.4vw,60px)] max-w-[820px]">
              Common <span className="italic-accent">questions.</span>
            </h2>
            <p className="mt-6 text-ink-2 text-base leading-[1.55] max-w-[380px]">
              If yours isn&apos;t here, write it into the project note when you submit — we&apos;ll address it in the reply.
            </p>
          </FadeIn>
        </div>

        {/* Right — accordion */}
        <div>
          {items.map((it, i) => (
            <FadeIn key={i} delay={i * 40}>
              <div className={`border-b border-line ${i === 0 ? 'border-t' : ''}`}>
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full flex justify-between items-center gap-5 py-6 text-left text-ink text-[17px] font-medium cursor-pointer bg-transparent border-0"
                  style={{ fontFamily: 'var(--font-sans)', letterSpacing: '-0.01em' }}
                >
                  <span className="flex gap-[18px] items-baseline">
                    <span className="mono text-ink-4">{String(i + 1).padStart(2, '0')}</span>
                    <span>{it.q}</span>
                  </span>
                  <span
                    className="w-[26px] h-[26px] rounded-full border flex-shrink-0 grid place-items-center text-sm transition-all"
                    style={{
                      borderColor: open === i ? 'var(--color-ink)' : 'var(--color-line-2)',
                      color: open === i ? 'var(--color-paper)' : 'var(--color-ink-2)',
                      background: open === i ? 'var(--color-ink)' : 'transparent',
                    }}
                  >
                    {open === i ? '−' : '+'}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: open === i ? 300 : 0, opacity: open === i ? 1 : 0 }}
                >
                  <div className="pb-7 px-12 text-ink-2 text-base leading-[1.65]">
                    {it.a}
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
