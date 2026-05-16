export default function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t border-line">
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,64px)]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-3 mb-[22px]">
              <div className="w-7 h-7 rounded-full bg-ink relative">
                <div className="absolute inset-2 rounded-full bg-accent" />
              </div>
              <div className="font-serif text-lg tracking-tight text-ink">
                Signal <i className="text-ink-3">Studio</i>
              </div>
            </a>
            <p className="text-sm text-ink-3 leading-[1.6] max-w-[360px]">
              Conversion-focused creative for ads, landing pages, and campaign launches. Fixed scope. Fast delivery. Direct collaboration.
            </p>
          </div>

          {/* Studio links */}
          <div>
            <div className="mono mb-3.5">Studio</div>
            <div className="flex flex-col gap-2">
              <a href="#what" className="text-[13.5px] text-ink-2 hover:text-accent transition-colors">What we do</a>
              <a href="#work" className="text-[13.5px] text-ink-2 hover:text-accent transition-colors">Selected work</a>
              <a href="#process" className="text-[13.5px] text-ink-2 hover:text-accent transition-colors">Process</a>
              <a href="#offer" className="text-[13.5px] text-ink-2 hover:text-accent transition-colors">Starting points</a>
              <a href="#faq" className="text-[13.5px] text-ink-2 hover:text-accent transition-colors">FAQ</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="mono mb-3.5">Contact</div>
            <div className="flex flex-col gap-2">
              <a href="mailto:hello@signalstudio.work" className="text-[13.5px] text-accent hover:text-accent-2 transition-colors">hello@signalstudio.work</a>
              <a href="#form" className="text-[13.5px] text-ink-2 hover:text-accent transition-colors">Request fit review &rarr;</a>
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
          <div>&copy; 2026 Signal Studio &middot; A creative agency</div>
          <div>Built for results. No fluff.</div>
        </div>
      </div>
    </footer>
  )
}
