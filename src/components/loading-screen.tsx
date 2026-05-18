'use client'

import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [phase, setPhase] = useState<'active' | 'exiting' | 'done'>('active')

  useEffect(() => {
    // Prevent scroll while loading
    document.body.style.overflow = 'hidden'

    const exitTimer = setTimeout(() => setPhase('exiting'), 1900)
    const doneTimer = setTimeout(() => {
      setPhase('done')
      document.body.style.overflow = ''
    }, 2700)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
      document.body.style.overflow = ''
    }
  }, [])

  if (phase === 'done') return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-paper"
      style={{
        transform: phase === 'exiting' ? 'translateY(-100%)' : 'translateY(0)',
        transition: phase === 'exiting' ? 'transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)' : 'none',
      }}
    >
      {/* Accent glow behind text */}
      <div
        className="absolute w-[400px] h-[200px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, oklch(0.58 0.20 28 / 0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative flex flex-col items-center gap-6">
        {/* Line */}
        <div className="w-[60px] h-px bg-accent loader-line" />

        {/* Brand name */}
        <div className="overflow-hidden">
          <h2
            className="font-serif text-[clamp(36px,6vw,64px)] tracking-tight text-ink loader-text"
            style={{ lineHeight: 1 }}
          >
            Clear <i className="text-ink-3">Motive</i>
          </h2>
        </div>

        {/* Tagline */}
        <div className="overflow-hidden">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-4 loader-tagline">
            Creative that converts
          </p>
        </div>
      </div>
    </div>
  )
}
