'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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
  const containerRef  = useRef<HTMLDivElement>(null)
  const lineInnerRef  = useRef<HTMLDivElement>(null)
  const dotRefs       = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const container = containerRef.current
    const lineInner = lineInnerRef.current
    if (!container || !lineInner) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(lineInner, { scaleY: 1 })
      dotRefs.current.forEach(d => d && gsap.set(d, { opacity: 1, scale: 1 }))
      return
    }

    // Set initial hidden states
    gsap.set(lineInner, { scaleY: 0, transformOrigin: 'top center' })
    dotRefs.current.forEach(d => d && gsap.set(d, { opacity: 0, scale: 0 }))

    // Scrub the vertical line as user scrolls through the steps
    const lineST = gsap.to(lineInner, {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top 68%',
        end:   'bottom 55%',
        scrub: 0.9,
      },
    })

    // Reveal each dot when its row enters the viewport
    const dotSTs = dotRefs.current.map((dot, i) => {
      if (!dot) return null
      return gsap.to(dot, {
        opacity: 1,
        scale: 1,
        duration: 0.45,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: dot,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        delay: i * 0.04,
      })
    })

    return () => {
      lineST.scrollTrigger?.kill()
      dotSTs.forEach(t => t?.scrollTrigger?.kill())
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
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

        <div className="relative" ref={containerRef}>
          {/* Vertical rail */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-line hidden sm:block overflow-hidden">
            <div
              ref={lineInnerRef}
              className="absolute inset-0 bg-accent origin-top"
            />
          </div>

          {steps.map((s, i) => (
            <FadeIn key={s.n} delay={i * 70}>
              <div
                className={`grid grid-cols-[60px_1fr] lg:grid-cols-[80px_280px_1fr] gap-5 lg:gap-10 py-8 border-t border-line items-baseline ${
                  i === steps.length - 1 ? 'border-b border-b-line' : ''
                }`}
              >
                {/* Step number — sits on the rail */}
                <div className="relative flex items-center justify-center sm:justify-start">
                  {/* Dot on rail — controlled by GSAP */}
                  <div
                    ref={el => { dotRefs.current[i] = el }}
                    className="hidden sm:block absolute left-[20px] w-[14px] h-[14px] rounded-full border-2 border-accent bg-paper"
                  />
                  <div
                    className="font-heading font-bold text-5xl text-accent leading-none"
                    style={{ letterSpacing: '-0.03em', fontVariationSettings: "'opsz' 48" }}
                  >
                    {s.n}
                  </div>
                </div>
                <h3
                  className="m-0 font-heading font-bold text-4xl leading-none"
                  style={{ letterSpacing: '-0.03em', fontVariationSettings: "'opsz' 36" }}
                >
                  {s.t}
                </h3>
                <p className="m-0 text-base text-ink-2 leading-[1.6] max-w-[620px] col-span-2 lg:col-span-1">
                  {s.body}
                </p>
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
