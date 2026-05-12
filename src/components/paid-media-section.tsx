import FadeIn from './fade-in'

const capabilities = [
  {
    title: 'Platform-safe layouts',
    description: 'Every asset respects text-safe zones, CTA overlays, and profile UI elements across Meta, TikTok, LinkedIn, and Google.',
    visual: (
      <div className="relative w-full aspect-square bg-foreground rounded-lg overflow-hidden p-3 flex flex-col justify-between">
        <div className="border border-dashed border-background/20 rounded flex-1 m-1 flex items-center justify-center">
          <span className="text-[9px] text-background/40 uppercase tracking-wider">safe zone</span>
        </div>
        <div className="flex justify-between items-end mt-2">
          <span className="text-[8px] text-background/30">CTA overlay area</span>
          <span className="bg-accent text-[7px] text-accent-foreground px-2 py-0.5 rounded-full">Shop Now</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Multi-format variants',
    description: 'Every concept is delivered in feed (1:1), stories (9:16), and landscape (16:9) formats. No cropping, no guesswork.',
    visual: (
      <div className="flex items-end gap-2 justify-center h-full py-4">
        <div className="w-10 h-10 bg-muted border border-border rounded flex items-center justify-center text-[7px] text-muted-foreground">1:1</div>
        <div className="w-8 h-14 bg-muted border border-border rounded flex items-center justify-center text-[7px] text-muted-foreground">9:16</div>
        <div className="w-14 h-8 bg-muted border border-border rounded flex items-center justify-center text-[7px] text-muted-foreground">16:9</div>
      </div>
    ),
  },
  {
    title: 'Hook and CTA variants',
    description: 'We test headline angles, opening hooks, and CTA copy independently. You get structured test sets, not random variations.',
    visual: (
      <div className="space-y-1.5 py-2">
        {['Authority hook', 'Urgency hook', 'Outcome hook', 'Social proof hook'].map((hook, j) => (
          <div key={j} className={`flex items-center gap-2 text-[10px] px-2.5 py-1.5 rounded-lg border ${j === 2 ? 'border-accent bg-accent/10 text-foreground font-medium' : 'border-border text-muted-foreground'}`}>
            <span className={`w-3 h-3 rounded-full border-2 flex items-center justify-center ${j === 2 ? 'border-accent' : 'border-border'}`}>
              {j === 2 && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
            </span>
            {hook}
            {j === 2 && <span className="ml-auto text-[8px] text-accent">Winner</span>}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Ad-to-page message match',
    description: 'Ad headline, landing page H1, and CTA copy are written as a single system. No disconnect between what the ad promises and what the page delivers.',
    visual: (
      <div className="flex items-center gap-2 py-3">
        <div className="flex-1 bg-foreground rounded-lg p-2.5 text-background">
          <p className="text-[8px] opacity-40 uppercase">Ad</p>
          <p className="text-[9px] mt-1 font-medium">Book your free consult</p>
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-accent shrink-0"><path d="M3 8h10M10 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <div className="flex-1 bg-muted rounded-lg p-2.5 border border-border">
          <p className="text-[8px] text-muted-foreground uppercase">Page</p>
          <p className="text-[9px] mt-1 font-medium">Book your free consult</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Creative testing systems',
    description: 'We structure creative into testable variables — hook, visual, CTA, format — so you can isolate what works and scale it.',
    visual: (
      <div className="grid grid-cols-3 gap-1 py-2">
        {['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'].map((v) => (
          <div key={v} className={`aspect-square rounded flex items-center justify-center text-[8px] font-medium ${v === 'B2' ? 'bg-accent text-accent-foreground' : 'bg-muted border border-border text-muted-foreground'}`}>{v}</div>
        ))}
      </div>
    ),
  },
  {
    title: 'Fast turnaround for campaign teams',
    description: 'Most projects are delivered in 5–10 working days. Rush delivery available. We work on your timeline, not ours.',
    visual: (
      <div className="py-3">
        <div className="flex items-center gap-1.5 mb-2">
          {['Brief', 'Concept', 'Build', 'Deliver'].map((step, j) => (
            <div key={j} className="flex items-center gap-1.5 flex-1">
              <div className={`w-full h-1.5 rounded-full ${j < 3 ? 'bg-accent' : 'bg-accent/30'}`} />
            </div>
          ))}
        </div>
        <div className="flex justify-between text-[8px] text-muted-foreground">
          <span>Day 1</span>
          <span>Day 5</span>
          <span>Day 10</span>
        </div>
      </div>
    ),
  },
]

export default function PaidMediaSection() {
  return (
    <section className="py-24 lg:py-28 bg-muted/50 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Paid Media Fluency</p>
        </FadeIn>
        <FadeIn delay={80}>
          <h2 className="text-3xl lg:text-4xl font-medium leading-tight tracking-tight max-w-xl">
            We understand how paid media teams work &mdash; not just how design looks.
          </h2>
        </FadeIn>
        <FadeIn delay={120}>
          <p className="mt-4 text-muted-foreground text-[15px] max-w-xl">
            Every asset is built for performance contexts: platform specs, testing frameworks,
            message match, and campaign workflows. Not just aesthetics.
          </p>
        </FadeIn>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap, i) => (
            <FadeIn key={i} delay={200 + i * 80}>
              <div className="bg-white border border-border rounded-2xl p-5 card-hover h-full flex flex-col">
                <div className="h-28 mb-4">{cap.visual}</div>
                <h3 className="text-sm font-medium mb-1.5">{cap.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">{cap.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
