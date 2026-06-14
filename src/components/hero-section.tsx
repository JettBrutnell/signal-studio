'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const TICKER_ITEMS = [
  'Fixed scope', '·', '2–3 week delivery', '·',
  'Direct collaboration', '·', 'No account managers', '·',
  'Fixed scope', '·', '2–3 week delivery', '·',
  'Direct collaboration', '·', 'No account managers', '·',
]

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const orbARef   = useRef<HTMLDivElement>(null)
  const orbBRef   = useRef<HTMLDivElement>(null)
  const orbCRef   = useRef<HTMLDivElement>(null)

  // Entrance timeline — fires after loading screen exits (~1.8s)
  useEffect(() => {
    const targets = ['.hero-eyebrow', '.hero-h1', '.hero-sub', '.hero-ctas', '.hero-stats']

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(targets, { opacity: 1, y: 0 })
      return
    }

    // Hide immediately to prevent FOUC, then animate
    gsap.set('.hero-eyebrow', { opacity: 0, y: 22 })
    gsap.set('.hero-h1',      { opacity: 0, y: 38 })
    gsap.set('.hero-sub',     { opacity: 0, y: 26 })
    gsap.set('.hero-ctas',    { opacity: 0, y: 20 })
    gsap.set('.hero-stats',   { opacity: 0, y: 16 })

    const tl = gsap.timeline({ delay: 1.85 })
    tl.to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' })
      .to('.hero-h1',      { opacity: 1, y: 0, duration: 0.90, ease: 'power3.out' }, '-=0.40')
      .to('.hero-sub',     { opacity: 1, y: 0, duration: 0.70, ease: 'power3.out' }, '-=0.55')
      .to('.hero-ctas',    { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' }, '-=0.45')
      .to('.hero-stats',   { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' }, '-=0.35')

    return () => { tl.kill() }
  }, [])

  // Mouse parallax on orbs
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      gsap.to(orbARef.current, { x: x *  40, y: y *  22, duration: 1.4, ease: 'power2.out' })
      gsap.to(orbBRef.current, { x: x * -22, y: y * -14, duration: 1.8, ease: 'power2.out' })
      gsap.to(orbCRef.current, { x: x *  16, y: y *  10, duration: 2.2, ease: 'power2.out' })
    }

    section.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => section.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="top"
      ref={sectionRef}
      className="hero-zone relative overflow-hidden min-h-[100dvh] flex flex-col"
    >
      {/* ── Full-bleed background image ── */}
      <div className="absolute inset-0">
        <Image
          src="/studio-desk.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          quality={75}
          sizes="100vw"
        />
        {/* Left-heavy gradient so text stays readable while studio is visible on right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(28,22,20,0.92) 0%, rgba(28,22,20,0.72) 38%, rgba(28,22,20,0.38) 62%, rgba(28,22,20,0.18) 100%)',
          }}
        />
        {/* Bottom darkening for marquee legibility */}
        <div
          className="absolute bottom-0 left-0 right-0 h-28"
          style={{ background: 'linear-gradient(to top, rgba(28,22,20,0.88), transparent)' }}
        />
        {/* Top vignette for navbar */}
        <div
          className="absolute top-0 left-0 right-0 h-28"
          style={{ background: 'linear-gradient(to bottom, rgba(28,22,20,0.50), transparent)' }}
        />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 hero-grid opacity-25" />

      {/* ── Copper orbs (animated + mouse-parallaxed) ── */}
      <div
        ref={orbARef}
        className="absolute top-[-8%] left-[18%] w-[900px] h-[620px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, oklch(0.572 0.095 52 / 0.08) 0%, transparent 62%)',
          animation: 'orb-float-a 20s ease-in-out infinite',
        }}
      />
      <div
        ref={orbBRef}
        className="absolute bottom-[18%] right-[6%] w-[440px] h-[320px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, oklch(0.572 0.095 52 / 0.06) 0%, transparent 65%)',
          animation: 'orb-float-b 24s ease-in-out infinite 4s',
        }}
      />
      <div
        ref={orbCRef}
        className="absolute top-[42%] -left-[4%] w-[340px] h-[260px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, oklch(0.572 0.095 52 / 0.04) 0%, transparent 70%)',
          animation: 'orb-float-c 28s ease-in-out infinite 8s',
        }}
      />

      {/* ── Main content ── */}
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,64px)] relative w-full pt-36 pb-24 flex-1 flex flex-col justify-center">
        <div className="max-w-[660px]">

          <div
            className="hero-eyebrow font-mono text-[11px] tracking-[0.10em] uppercase mb-8"
            style={{ color: 'var(--color-ink-3)' }}
          >
            Creative agency
          </div>

          <h1
            className="hero-h1 display m-0 text-[clamp(52px,6.5vw,100px)]"
            style={{ color: 'var(--color-ink)' }}
          >
            Creative that<br className="hidden sm:block" />
            <span className="italic-accent shimmer-line">converts.</span>
          </h1>

          <p
            className="hero-sub mt-8 mb-10 max-w-[460px] text-lg leading-[1.55]"
            style={{ color: 'var(--color-ink-2)' }}
          >
            Ads, landing pages, and campaign creative — scoped, built, and delivered in weeks.
          </p>

          <div className="hero-ctas flex gap-3.5 flex-wrap">
            <a
              href="#form"
              data-clarity-label="hero-cta-primary"
              className="btn-primary inline-flex items-center gap-2.5 font-medium px-6 py-3.5 rounded-full text-sm"
              style={{ background: '#A17248', color: '#F4F1EA' }}
            >
              Start a project <span>&rarr;</span>
            </a>
            <a
              href="#what"
              data-clarity-label="hero-cta-secondary"
              className="btn-secondary inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm"
              style={{ color: 'var(--color-ink-2)', border: '1px solid var(--color-line-2)' }}
            >
              See how we work
            </a>
          </div>

          {/* Stats strip — visible on all screen sizes */}
          <div
            className="hero-stats flex flex-wrap gap-x-8 gap-y-5 mt-14 pt-8"
            style={{ borderTop: '1px solid var(--color-line)' }}
          >
            {[
              ['47+',   'projects delivered'],
              ['2–3 wk','avg. turnaround'],
              ['100%',  'direct collaboration'],
            ].map(([num, label]) => (
              <div key={num}>
                <div
                  className="font-heading font-bold text-[26px] leading-none"
                  style={{ letterSpacing: '-0.03em', color: 'var(--color-ink)' }}
                >
                  {num}
                </div>
                <div
                  className="font-mono text-[10px] tracking-[0.07em] uppercase mt-1"
                  style={{ color: 'var(--color-ink-4)' }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Marquee ticker ── */}
      <div className="w-full relative">
        <div className="py-4 overflow-hidden" style={{ borderTop: '1px solid var(--color-line)' }}>
          <div
            className="flex items-center whitespace-nowrap"
            style={{ animation: 'marquee 22s linear infinite', width: 'max-content' }}
          >
            {TICKER_ITEMS.map((item, i) => (
              <span
                key={i}
                className="font-mono text-[11px] tracking-[0.07em] uppercase"
                style={{
                  color: item === '·' ? '#A17248' : 'var(--color-ink-4)',
                  margin: item === '·' ? '0 20px' : undefined,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
