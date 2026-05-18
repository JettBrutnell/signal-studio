/* Shared mock visual components — ad mocks and landing page mocks for portfolio display */

interface MiniAdProps {
  ratio?: string
  headline?: string
  sub?: string
  cta?: string
  brand?: string
  label?: string
  className?: string
}

export function MiniAd({ ratio = '4/5', headline, sub, cta = 'Learn more', brand = 'BRAND', label, className = '' }: MiniAdProps) {
  return (
    <div className={`relative overflow-hidden rounded-[10px] border border-line bg-paper-2 ${className}`} style={{ aspectRatio: ratio }}>
      {/* Photo placeholder */}
      <div className="absolute inset-0" style={{ background: 'repeating-linear-gradient(135deg, transparent 0 14px, oklch(1 0 0 / 0.04) 14px 15px), var(--color-paper-3)' }} />
      {/* Chrome bar */}
      <div className="absolute left-3 right-3 top-2.5 flex items-center gap-2 font-mono text-[9px] text-ink-3 tracking-wider">
        <div className="w-4 h-4 rounded-full bg-ink" />
        <b className="text-ink">{brand}</b>
        <span>&middot; Sponsored</span>
      </div>
      {label && (
        <div className="absolute top-2.5 right-3 z-10 font-mono text-[9px] tracking-widest uppercase bg-accent text-paper px-[7px] py-[3px] rounded">
          {label}
        </div>
      )}
      {headline && (
        <div className="absolute left-3.5 right-3.5 bottom-14 font-serif text-[22px] leading-[1.05] text-ink tracking-tight">
          {headline}
        </div>
      )}
      {sub && (
        <div className="absolute left-3.5 right-3.5 bottom-10 font-mono text-[9px] text-ink-3 tracking-wide">
          {sub}
        </div>
      )}
      <div className="absolute left-3 right-3 bottom-3 bg-[oklch(1_0_0/0.06)] rounded-md px-2.5 py-[7px] flex justify-between items-center font-mono text-[9px] text-ink tracking-wider">
        <span>{cta}</span>
        <span className="text-accent">&rarr;</span>
      </div>
    </div>
  )
}

interface MiniLPProps {
  headline?: string
  sub?: string
  cta?: string
  className?: string
}

export function MiniLP({ headline = 'A page that explains the offer.', sub = 'Built for clarity, not decoration.', cta = 'Get started', className = '' }: MiniLPProps) {
  return (
    <div className={`bg-paper-2 border border-line rounded-xl overflow-hidden ${className}`}>
      {/* Browser chrome */}
      <div className="flex gap-1.5 px-3.5 py-2.5 border-b border-line bg-paper-3">
        <span className="w-[7px] h-[7px] rounded-full bg-line-2" />
        <span className="w-[7px] h-[7px] rounded-full bg-line-2" />
        <span className="w-[7px] h-[7px] rounded-full bg-line-2" />
        <div className="flex-1 ml-3 h-3.5 rounded bg-paper" />
      </div>
      {/* Page content */}
      <div className="p-6">
        <div className="mono mb-3">HERO</div>
        <div className="font-serif text-[26px] leading-[1.05] text-ink tracking-tight mb-2">{headline}</div>
        <div className="text-xs text-ink-3 mb-4 leading-relaxed max-w-[280px]">{sub}</div>
        <div className="inline-block px-3.5 py-2 rounded-full bg-accent text-paper text-[11px] font-medium">{cta} &rarr;</div>
        <div className="grid grid-cols-3 gap-2 mt-5">
          <div className="h-[52px] rounded-md bg-paper-3 border border-line" />
          <div className="h-[52px] rounded-md bg-paper-3 border border-line" />
          <div className="h-[52px] rounded-md bg-paper-3 border border-line" />
        </div>
      </div>
    </div>
  )
}
