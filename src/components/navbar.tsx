'use client'

import { useState } from 'react'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-1.5 shrink-0">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="font-medium text-sm">Signal</span>
          <span className="text-muted-foreground text-sm">/studio</span>
        </a>

        <ul className="hidden lg:flex items-center gap-7 text-[13px]">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 bg-foreground text-background text-[13px] font-medium px-4 py-2 rounded-full hover:bg-foreground/90 transition"
        >
          Request a Fit Review
        </a>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" /> : <path d="M4 8h16M4 16h16" strokeLinecap="round" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border px-6 py-4 bg-background space-y-2">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-1.5 text-sm text-muted-foreground">
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="inline-flex mt-2 bg-foreground text-background text-sm font-medium px-4 py-2 rounded-full">
            Request a Fit Review
          </a>
        </div>
      )}
    </header>
  )
}
