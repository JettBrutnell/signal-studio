'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const linkColor  = scrolled ? '#68442C' : '#C4B8AC'
  const logoColor  = scrolled ? '#353534' : '#F0EBE3'
  const logoMuted  = scrolled ? '#8A7060' : '#C4B8AC'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'backdrop-blur-[14px] backdrop-saturate-[1.4] border-b' : ''
      }`}
      style={scrolled ? { background: 'rgba(244,241,234,0.88)', borderBottomColor: '#D8D3C6' } : {}}
    >
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,64px)] flex items-center gap-6 py-[18px]">

        {/* Logo — CM monogram + wordmark */}
        <a href="#top" className="flex items-center gap-3 flex-shrink-0">
          <div className="relative w-8 h-8 flex-shrink-0">
            <Image
              src="/cm-monogram.png"
              alt="Clear Motive"
              fill
              sizes="32px"
              className="object-contain"
            />
          </div>
          <div className="font-heading font-bold text-lg tracking-tight" style={{ color: logoColor }}>
            Clear{' '}
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontWeight: 700,
                fontVariationSettings: "'WONK' 1",
                color: logoMuted,
              }}
            >
              Motive
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-[26px] ml-auto">
          {[
            ['What we do', '#what'],
            ['Process',    '#process'],
            ['Pricing',    '#offer'],
            ['FAQ',        '#faq'],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[13.5px] transition-colors"
              style={{ color: linkColor }}
              onMouseEnter={e => (e.currentTarget.style.color = '#A17248')}
              onMouseLeave={e => (e.currentTarget.style.color = linkColor)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#form"
          data-clarity-label="nav-cta"
          className="btn-primary hidden md:inline-flex items-center gap-2.5 text-sm font-medium px-[22px] py-[13px] rounded-full whitespace-nowrap"
          style={{ background: '#A17248', color: '#F4F1EA' }}
        >
          Start a project <span>&rarr;</span>
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden ml-auto min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Menu"
          style={{ color: scrolled ? '#353534' : '#F0EBE3' }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 8h16M4 16h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t px-[clamp(24px,5vw,64px)] py-5"
          style={{ background: '#F4F1EA', borderTopColor: '#D8D3C6' }}
        >
          <nav className="flex flex-col gap-3 text-sm">
            {[
              ['What we do', '#what'],
              ['Process',    '#process'],
              ['Pricing',    '#offer'],
              ['FAQ',        '#faq'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                style={{ color: '#68442C' }}
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#form"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-full"
            style={{ background: '#A17248', color: '#F4F1EA' }}
          >
            Start a project &rarr;
          </a>
        </div>
      )}
    </header>
  )
}
