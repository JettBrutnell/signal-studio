'use client'

import { useRef, useEffect, useState } from 'react'
import FadeIn from './fade-in'
import SectionHead from './section-head'

const steps = [
  { n: '01', t: 'Diagnose', body: "We identify the offer, audience, campaign goal, and current friction points. A short call and an async questionnaire — no drawn-out discovery phase." },
  { n: '02', t: 'Structure', body: "We map the page, ad, or campaign asset around the single action the viewer needs to take. Structure first, design second." },
  { n: '03', t: 'Design', body: "We create clean, conversion-focused creative with hierarchy, contrast, and platform constraints handled. You see work, not deliverables theatre." },
  { n: '04', t: 'Refine', body: "We tighten the copy, layout, and visual system based on feedback. Two structured rounds — focused, not endless." },
  { n: '05', t: 'Deliver', body: "You receive final assets, source files where relevant, and clear handoff notes. Named, organized, and ready for your media or dev team." },
]

export default function ProcessSection() {
  const lineRef = useRef<HTMLDivElement>(null)
  const [drawn, setDrawn] = useState(false)

  useEffect(() => {
    const el = lineRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDrawn(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setDrawn(true); observer.disconnect() }
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" className="py-28 border-t border-line">
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,64px)]">
        <FadeIn>
          <SectionHead
            num="03"
            kicker="How the work gets done"
            title={<>A short, <span className="italic-accent">honest</span> process.</>}
            sub="Five steps. Most projects move through them in two to three weeks. No account managers, no kickoff theatre."
          />
        </FadeIn>

        {/* Steps with animated left-rail line */}
        <div className="relative" ref={lineRef}>
          {/* Vertical rail */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-line hidden sm:block overflow-hidden">
            <div
              className="absolute inset-0 bg-accent origin-top"
              style={{
                transform: drawn ? 'scaleY(1)' : 'scaleY(0)',
                transition: drawn ? 'transform 1.4s cubic-bezier(0.16,1,0.3,1) 0.3s' : 'none',
              }}
            />
          </div>

          {steps.map((s, i) => (
            <FadeIn key={s.n} delay={i * 80}>
              <div
                className={`grid grid-cols-[60px_1fr] lg:grid-cols-[80px_280px_1fr] gap-5 lg:gap-10 py-8 border-t border-line items-baseline ${i === steps.length - 1 ? 'border-b border-b-line' : ''}`}
              >
                {/* Step number — sits on the rail */}
                <div className="relative flex items-center justify-center sm:justify-start">
                  {/* Dot on rail */}
                  <div
                    className="hidden sm:block absolute left-[20px] w-[14px] h-[14px] rounded-full border-2 border-accent bg-paper"
                    style={{
                      opacity: drawn ? 1 : 0,
                      transform: drawn ? 'scale(1)' : 'scale(0)',
                      transition: `opacity 0.3s ease ${0.4 + i * 0.12}s, transform 0.3s cubic-bezier(0.34,1.56,0.64,1) ${0.4 + i * 0.12}s`,
                    }}
                  />
                  <div className="font-heading font-bold text-5xl text-accent leading-none" style={{ letterSpacing: '-0.03em', fontVariationSettings: "'opsz' 48" }}>{s.n}</div>
                </div>
                <h3 className="m-0 font-heading font-bold text-4xl leading-none" style={{ letterSpacing: '-0.03em', fontVariationSettings: "'opsz' 36" }}>{s.t}</h3>
                <p className="m-0 text-base text-ink-2 leading-[1.6] max-w-[620px] col-span-2 lg:col-span-1">{s.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <div className="mt-10 p-6 lg:px-7 bg-paper-2 rounded-xl border border-line flex gap-[18px] items-center">
            <div className="flex-1 text-[15px] text-ink leading-[1.55]">
              You work directly with the team building the creative.{' '}
              <span className="text-ink-3">
                No account manager layer. No bloated process. One point of contact, one project thread.
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
