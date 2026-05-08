'use client'

import { useState } from 'react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-accent" />
          <span className="font-medium text-sm">Signal</span>
          <span className="text-muted-foreground text-sm">/studio</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          <li>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition">
              Services
            </a>
          </li>
          <li>
            <a href="#process" className="text-muted-foreground hover:text-foreground transition">
              Process
            </a>
          </li>
          <li>
            <a href="#work" className="text-muted-foreground hover:text-foreground transition">
              Work
            </a>
          </li>
          <li>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition">
              Contact
            </a>
          </li>
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-foreground text-background text-sm font-medium px-4 py-2 rounded-full hover:bg-foreground/90 transition"
        >
          Book a Call
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 13L13 1M13 1H5M13 1V9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 8h16M4 16h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border px-6 py-4 bg-background">
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#services" onClick={() => setMobileOpen(false)} className="block text-muted-foreground">
                Services
              </a>
            </li>
            <li>
              <a href="#process" onClick={() => setMobileOpen(false)} className="block text-muted-foreground">
                Process
              </a>
            </li>
            <li>
              <a href="#work" onClick={() => setMobileOpen(false)} className="block text-muted-foreground">
                Work
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMobileOpen(false)} className="block text-muted-foreground">
                Contact
              </a>
            </li>
          </ul>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex items-center gap-2 bg-foreground text-background text-sm font-medium px-4 py-2 rounded-full"
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  )
}
