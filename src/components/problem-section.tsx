import FadeIn from './fade-in'

const problems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 8h20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 8v14" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Weak first impression',
    description:
      "Visitors don't instantly understand who you help, what you offer, or why they should care.",
    accent: 'from-red-500/10 to-transparent',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: 'Poor conversion path',
    description:
      'CTAs, booking systems, and page structure create friction instead of momentum.',
    accent: 'from-orange-500/10 to-transparent',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="14" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6h4M14 10v4M10 18H6M6 10v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3" />
      </svg>
    ),
    title: 'Disconnected ads and pages',
    description:
      'Your ads create interest, but the landing page fails to finish the job.',
    accent: 'from-yellow-500/10 to-transparent',
  },
]

export default function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            The Problem
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="text-3xl lg:text-[2.75rem] font-medium leading-tight tracking-tight max-w-xl">
            Most websites look fine. They just don&apos;t sell clearly enough.
          </h2>
        </FadeIn>

        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {problems.map((problem, i) => (
            <FadeIn key={i} delay={200 + i * 120}>
              <div className="relative bg-muted rounded-2xl p-7 lg:p-8 group card-hover accent-line-hover overflow-hidden h-full">
                {/* Subtle gradient accent at top */}
                <div className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-b ${problem.accent} pointer-events-none rounded-t-2xl`} />

                <div className="relative">
                  <div className="flex items-start justify-between mb-10">
                    <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center text-muted-foreground shadow-sm">
                      {problem.icon}
                    </div>
                    <svg
                      className="text-border group-hover:text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
