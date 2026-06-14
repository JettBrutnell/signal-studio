'use client'

import { useState, useEffect } from 'react'

const BARS = [
  { cls: 'animate-eq-1', delay: '0ms' },
  { cls: 'animate-eq-2', delay: '0ms' },
  { cls: 'animate-eq-3', delay: '0ms' },
  { cls: 'animate-eq-4', delay: '0ms' },
  { cls: 'animate-eq-5', delay: '0ms' },
]

export default function LoadingScreen() {
  const [phase, setPhase] = useState<'active' | 'exiting' | 'done'>('active')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPhase('done')
      return
    }

    document.body.style.overflow = 'hidden'

    const exitTimer = setTimeout(() => setPhase('exiting'), 1200)
    const doneTimer = setTimeout(() => {
      setPhase('done')
      document.body.style.overflow = ''
    }, 1800)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
      document.body.style.overflow = ''
    }
  }, [])

  if (phase === 'done') return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{
        background: '#1C1614',
        transform: phase === 'exiting' ? 'translateY(-100%)' : 'translateY(0)',
        transition: phase === 'exiting' ? 'transform 0.6s cubic-bezier(0.76, 0, 0.24, 1)' : 'none',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute w-[500px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, oklch(0.572 0.095 52 / 0.10) 0%, transparent 70%)',
          animation: 'glow-pulse 3s ease-in-out infinite',
        }}
      />

      <div className="relative flex flex-col items-center gap-8">
        {/* Equalizer bars */}
        <div className="flex items-end gap-[5px] h-[56px]">
          {BARS.map((b, i) => (
            <div
              key={i}
              className={`w-[5px] rounded-full bg-accent ${b.cls}`}
              style={{ minHeight: '4px', animationDelay: b.delay }}
            />
          ))}
        </div>

        {/* Brand name */}
        <div className="overflow-hidden">
          <h2
            className="font-heading font-extrabold text-[clamp(36px,6vw,64px)] loader-text"
            style={{ color: '#F0EBE3', lineHeight: 0.92, letterSpacing: '-0.04em' }}
          >
            Clear{' '}
            <span
              className="text-ink-3"
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontWeight: 700,
                fontVariationSettings: "'WONK' 1, 'opsz' 48",
              }}
            >
              Motive
            </span>
          </h2>
        </div>

        {/* Tagline */}
        <div className="overflow-hidden">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase loader-tagline" style={{ color: '#5A4E46' }}>
            Creative that converts
          </p>
        </div>
      </div>
    </div>
  )
}
