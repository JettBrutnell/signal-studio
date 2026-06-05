'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-paper/85 backdrop-blur-[14px] backdrop-saturate-[1.4] border-b border-line' : ''
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,64px)] flex items-center gap-6 py-[18px]">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-accent relative animate-ring-pulse">
            <div className="absolute inset-2 rounded-full bg-paper" />
          </div>
          <div className="font-serif text-lg tracking-tight text-ink">
            Clear <i className="text-ink-3">Motive</i>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-[26px] ml-auto">
          {[
            ['What we do', '#what'],
            ['Process', '#process'],
            ['Pricing', '#offer'],
            ['FAQ', '#faq'],
          ].map(([label, href]) => (
            <a key={href} href={href} className="text-[13.5px] text-ink-2 hover:text-accent transition-colors">
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#form"
          data-clarity-label="nav-cta"
          className="hidden md:inline-flex items-center gap-2.5 bg-accent text-paper text-sm font-medium px-[22px] py-[13px] rounded-full hover:brightness-110 hover:-translate-y-px transition-all whitespace-nowrap"
        >
          Start a project <span>&rarr;</span>
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden ml-auto min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Menu">
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
        <div className="md:hidden border-t border-line px-[clamp(24px,5vw,64px)] py-5 bg-paper">
          <nav className="flex flex-col gap-3 text-sm">
            {[
              ['What we do', '#what'],
              ['Process', '#process'],
              ['Pricing', '#offer'],
              ['FAQ', '#faq'],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMobileOpen(false)} className="text-ink-2">
                {label}
              </a>
            ))}
          </nav>
          <a href="#form" onClick={() => setMobileOpen(false)} className="mt-4 inline-flex items-center gap-2 bg-accent text-paper text-sm font-medium px-5 py-3 rounded-full">
            Start a project &rarr;
          </a>
        </div>
      )}
    </header>
  )
}
