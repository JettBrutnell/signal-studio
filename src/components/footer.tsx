import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t border-line">
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,64px)]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-3 mb-[22px]">
              <div className="relative w-9 h-9 flex-shrink-0">
                <Image src="/cm-monogram.png" alt="Clear Motive" fill className="object-contain" />
              </div>
              <div className="font-heading font-bold text-lg tracking-tight text-ink">
                Clear <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 700, fontVariationSettings: "'WONK' 1" }} className="text-ink-3">Motive</span>
              </div>
            </a>
            <p className="text-sm text-ink-3 leading-[1.6] max-w-[360px]">
              Conversion-focused creative for ads, landing pages, and campaign launches. Fixed scope. Fast delivery. Direct collaboration.
            </p>
          </div>

          {/* Agency links */}
          <div>
            <div className="mono mb-3.5">Agency</div>
            <div className="flex flex-col gap-2">
              <a href="#what" className="text-[13.5px] text-ink-2 hover:text-accent transition-colors">What we do</a>
              <a href="#process" className="text-[13.5px] text-ink-2 hover:text-accent transition-colors">Process</a>
              <a href="#offer" className="text-[13.5px] text-ink-2 hover:text-accent transition-colors">Pricing</a>
              <a href="#faq" className="text-[13.5px] text-ink-2 hover:text-accent transition-colors">FAQ</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="mono mb-3.5">Contact</div>
            <div className="flex flex-col gap-2">
              <a href="mailto:hello@clearmotive.co" className="text-[13.5px] text-accent hover:text-accent-2 transition-colors">hello@clearmotive.co</a>
              <a href="#form" className="text-[13.5px] text-ink-2 hover:text-accent transition-colors">Start a project &rarr;</a>
              <span className="text-[13.5px] text-ink-4">Currently accepting projects</span>
            </div>
          </div>

          {/* Elsewhere */}
          <div>
            <div className="mono mb-3.5">Elsewhere</div>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-[13.5px] text-ink-2 hover:text-accent transition-colors">Instagram</a>
              <a href="#" className="text-[13.5px] text-ink-2 hover:text-accent transition-colors">Read.cv</a>
              <a href="#" className="text-[13.5px] text-ink-2 hover:text-accent transition-colors">Are.na</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-5 border-t border-line flex flex-col sm:flex-row justify-between items-center gap-3 font-mono text-[10px] tracking-[0.08em] uppercase text-ink-4">
          <div>&copy; 2026 Clear Motive &middot; A creative agency</div>
          <div>Built for results. No fluff.</div>
        </div>
      </div>
    </footer>
  )
}
