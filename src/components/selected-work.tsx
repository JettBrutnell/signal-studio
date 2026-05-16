import FadeIn from './fade-in'
import SectionHead from './section-head'
import { MiniAd, MiniLP } from './mock-visuals'

const projects = [
  {
    label: 'Client project',
    name: 'Havn Bedding',
    type: 'DTC · sleep & home',
    problem: "Existing landing page was a beautiful brand page that didn't close paid traffic. Bounce rate above 70% on Meta.",
    created: 'Landing page redesign + matched ad set (statics, 4:5)',
    decision: 'Reworked the page around three buyer objections (price, fit, comfort) instead of brand storytelling.',
    outcome: 'Live A/B test underway. Early read: +22% time-on-page, CVR data pending.',
    tag: 'PROJECT 01',
    visualKind: 'lp-and-ad' as const,
  },
  {
    label: 'Spec concept',
    name: 'Salt + Sky Beverage',
    type: 'F&B · seasonal launch',
    problem: 'Showed how a small launch could ship a full campaign set on a tight timeline without an agency.',
    created: 'Campaign system — anthem direction, 4 ad variants, landing section, social cutdowns',
    decision: 'One offer, one visual world, four hooks. No multi-message bloat.',
    outcome: 'Concept piece. Available on request.',
    tag: 'CONCEPT 02',
    visualKind: 'campaign' as const,
  },
  {
    label: 'Client project',
    name: 'Northbound SaaS',
    type: 'B2B · early-stage',
    problem: 'Founder was running LinkedIn ads to a homepage. No clear next step, no qualification.',
    created: 'Single landing page · two hook variants · qualification form',
    decision: 'Replaced "Book a demo" with a project-fit question that doubled as enrichment.',
    outcome: 'Qualified-lead rate doubled over the first two weeks. Sample size small — honest about that.',
    tag: 'PROJECT 03',
    visualKind: 'lp-and-ad' as const,
  },
  {
    label: 'Internal concept',
    name: 'Folio Newsletter',
    type: 'Media · growth funnel',
    problem: 'An internal study on how a newsletter would design its own growth funnel.',
    created: 'Funnel map · 3 landing variants · 6 paid social hooks',
    decision: 'Built around the subscribe action, not the publication brand.',
    outcome: 'Internal concept. Used as the template for client funnel work.',
    tag: 'CONCEPT 04',
    visualKind: 'campaign' as const,
  },
]

function FieldRow({ label, body }: { label: string; body: string }) {
  return (
    <div className="grid grid-cols-[140px_1fr] gap-5">
      <div className="mono pt-0.5">{label}</div>
      <div className="text-[15px] text-ink leading-[1.6]">{body}</div>
    </div>
  )
}

function WorkRow({ p, idx }: { p: typeof projects[0]; idx: number }) {
  const isClient = p.label === 'Client project'

  return (
    <FadeIn>
      <div className={`grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start py-[72px] border-t border-line ${idx === projects.length - 1 ? 'border-b border-b-line' : ''}`}>
        {/* Visual */}
        <div className="relative aspect-[5/4] bg-paper-2 border border-line rounded-xl overflow-hidden p-[30px]">
          {p.visualKind === 'lp-and-ad' ? (
            <>
              <div className="absolute left-6 top-[30px] right-[110px] bottom-[30px]">
                <MiniLP headline={`${p.name} — refined LP`} sub="Rebuilt around objections. CTA visible above fold." cta="Continue" />
              </div>
              <div className="absolute right-6 top-[70px] w-[110px] rotate-[4deg]">
                <MiniAd ratio="4/5" brand={p.name.split(' ')[0].toUpperCase()} headline="Matched hook" sub="Same offer" cta="Try it" label="4:5" />
              </div>
            </>
          ) : (
            <div className="absolute inset-[30px] grid grid-cols-3 grid-rows-2 gap-2.5">
              <div className="row-span-2"><MiniAd ratio="9/16" brand={p.name.split(' ')[0].toUpperCase()} cta="Shop" /></div>
              <MiniAd ratio="1/1" brand={p.name.split(' ')[0].toUpperCase()} cta="Shop" label="A" />
              <MiniAd ratio="1/1" brand={p.name.split(' ')[0].toUpperCase()} cta="Shop" label="B" />
              <div className="placeholder-img text-[9px]">LP hero</div>
              <div className="placeholder-img text-[9px]">Email</div>
            </div>
          )}
          <div className="absolute left-4 top-4 font-mono text-[10px] tracking-[0.1em] text-ink-3 bg-paper px-2 py-1 rounded border border-line">
            {p.tag}
          </div>
        </div>

        {/* Copy */}
        <div>
          <div className="mono mb-3" style={{ color: isClient ? 'var(--color-accent)' : 'var(--color-ink-3)' }}>
            &bull; {p.label}
          </div>
          <h3 className="m-0 font-serif text-[44px] tracking-tight leading-none">{p.name}</h3>
          <div className="mono mt-2.5">{p.type}</div>
          <div className="mt-8 flex flex-col gap-5">
            <FieldRow label="Problem" body={p.problem} />
            <FieldRow label="What was created" body={p.created} />
            <FieldRow label="Key decision" body={p.decision} />
            <FieldRow label={isClient ? 'Project outcome' : 'Notes'} body={p.outcome} />
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

export default function SelectedWork() {
  return (
    <section id="work" className="py-28 border-t border-line">
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,64px)]">
        <FadeIn>
          <SectionHead
            num="02"
            kicker="Selected work"
            title={<>Four pieces. <span className="italic-accent">Honestly labelled.</span></>}
            sub="The studio is early. Two are paid client projects. One is a concept commissioned for this site. One is internal. We mark which is which."
          />
        </FadeIn>
        <div className="flex flex-col">
          {projects.map((p, i) => <WorkRow key={p.name} p={p} idx={i} />)}
        </div>
      </div>
    </section>
  )
}
