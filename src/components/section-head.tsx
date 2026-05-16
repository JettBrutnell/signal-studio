import type { ReactNode } from 'react'

interface SectionHeadProps {
  num: string
  kicker: string
  title: ReactNode
  sub?: string
  align?: 'left' | 'center'
  id?: string
}

export default function SectionHead({ num, kicker, title, sub, align = 'left', id }: SectionHeadProps) {
  const centered = align === 'center'
  return (
    <div
      id={id}
      className="mb-16"
      style={{
        display: 'flex', flexDirection: 'column', gap: 18,
        alignItems: centered ? 'center' : 'flex-start',
        textAlign: centered ? 'center' : 'left',
        maxWidth: centered ? 800 : 'none',
        marginLeft: centered ? 'auto' : 0,
        marginRight: centered ? 'auto' : 0,
      }}
    >
      {/* Eyebrow */}
      <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.10em] uppercase text-ink-3">
        <span className="text-accent">{num}</span>
        <span className="w-6 h-px bg-ink-2" />
        <span>{kicker}</span>
      </div>
      {/* Title */}
      <h2 className="display m-0 text-[clamp(36px,4.4vw,60px)] max-w-[820px]">{title}</h2>
      {/* Sub */}
      {sub && <p className="m-0 max-w-[620px] text-[17px] leading-[1.55] text-ink-2">{sub}</p>}
    </div>
  )
}
