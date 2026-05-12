import FadeIn from './fade-in'

const proofPoints = [
  { metric: '£2.4M+', label: 'in ad spend supported by our creative' },
  { metric: '3.2x', label: 'average ROAS across client campaigns' },
  { metric: '<5 days', label: 'average delivery turnaround' },
  { metric: '92%', label: 'repeat-client rate' },
]

export default function ProofStrip() {
  return (
    <section className="py-10 border-y border-border bg-muted/50">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {proofPoints.map((point, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="text-2xl md:text-3xl font-semibold tracking-tight">{point.metric}</p>
                <p className="text-xs text-muted-foreground mt-1">{point.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
