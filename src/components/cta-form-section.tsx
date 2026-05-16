'use client'

import { useState, type FormEvent } from 'react'
import FadeIn from './fade-in'

export default function CtaFormSection() {
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle')
  const [data, setData] = useState({
    name: '', email: '', brand: '', site: '', need: '', timeline: '', budget: '', notes: '',
  })

  function up(k: string, v: string) { setData(d => ({ ...d, [k]: v })) }

  async function submit(e: FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.brand,
          website: data.site,
          services: [data.need].filter(Boolean),
          budget: data.budget,
          goal: '',
          timeline: data.timeline,
          notes: data.notes,
        }),
      })
      if (res.ok) {
        setSubmitted(true)
        setStatus('idle')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const fieldClass = 'bg-transparent border-0 border-b border-line-2 rounded-none px-0 py-3 text-ink text-base w-full outline-none focus:border-ink transition-colors placeholder:text-ink-4'

  return (
    <section id="form" className="py-36 border-t border-line bg-paper-2">
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,64px)] grid lg:grid-cols-[1fr_1.1fr] gap-20 items-start">
        {/* Left — copy */}
        <div>
          <FadeIn>
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.10em] uppercase text-ink-3 mb-6">
              <span className="text-accent">07</span>
              <span className="w-6 h-px bg-ink-2" />
              <span>Next step</span>
            </div>
            <h2 className="display m-0 text-[clamp(48px,5.6vw,84px)]">
              Request a project<br /><span className="italic-accent">fit review.</span>
            </h2>
            <p className="mt-7 text-[18px] leading-[1.55] text-ink-2 max-w-[460px]">
              Send through what you need built. We&apos;ll review the project, confirm whether it fits, and reply with a rough scope, timeline, and next step.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="mt-10 flex flex-col gap-3.5">
              {[
                'Personal reply within one business day.',
                'No discovery calls before scope is clear.',
                "If it's not a fit, we'll tell you and point you elsewhere.",
              ].map((line, i) => (
                <div key={i} className="flex gap-3.5 items-baseline">
                  <span className="text-accent">&rarr;</span>
                  <span className="text-[15px] text-ink">{line}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="mt-12 pt-7 border-t border-line">
              <div className="mono mb-2">Prefer email</div>
              <a href="mailto:hello@signalstudio.work" className="font-serif text-[30px] text-ink tracking-tight">
                hello@signalstudio.work &rarr;
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right — form */}
        <FadeIn delay={120}>
          <div className="bg-paper border border-line rounded-xl p-10">
            {submitted ? (
              <div className="py-16 px-5 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-ink text-paper grid place-items-center text-[26px]">&#10003;</div>
                <h3 className="display mt-6 text-4xl">Got it.</h3>
                <p className="mt-3 text-ink-2 text-[15px] leading-relaxed max-w-[380px] mx-auto">
                  You&apos;ll hear back within one business day — a real reply, not an auto-responder.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setData({ name: '', email: '', brand: '', site: '', need: '', timeline: '', budget: '', notes: '' }) }}
                  className="mt-7 inline-flex items-center gap-2 text-ink border border-ink px-5 py-3 rounded-full text-sm font-medium hover:bg-ink hover:text-paper transition-all cursor-pointer bg-transparent"
                >
                  Submit another
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] tracking-[0.10em] uppercase text-ink-3">Your name</label>
                  <input className={fieldClass} value={data.name} onChange={e => up('name', e.target.value)} placeholder="Full name" required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] tracking-[0.10em] uppercase text-ink-3">Email</label>
                  <input type="email" className={fieldClass} value={data.email} onChange={e => up('email', e.target.value)} placeholder="you@email.com" required />
                </div>
                <div className="grid grid-cols-2 gap-[22px]">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[10px] tracking-[0.10em] uppercase text-ink-3">Business / brand</label>
                    <input className={fieldClass} value={data.brand} onChange={e => up('brand', e.target.value)} placeholder="Brand name" required />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[10px] tracking-[0.10em] uppercase text-ink-3">Website or Instagram</label>
                    <input className={fieldClass} value={data.site} onChange={e => up('site', e.target.value)} placeholder="link or @handle" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] tracking-[0.10em] uppercase text-ink-3">What do you need?</label>
                  <select
                    className={`${fieldClass} appearance-none cursor-pointer`}
                    value={data.need} onChange={e => up('need', e.target.value)} required
                    style={{
                      backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='%23444' d='M0 0h10L5 6z'/></svg>\")",
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 4px center',
                    }}
                  >
                    <option value="">Select one&hellip;</option>
                    <option>Ad Creative Sprint</option>
                    <option>Landing Page Build</option>
                    <option>Campaign Launch Pack</option>
                    <option>Custom scope</option>
                    <option>Not sure — help me figure it out</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-[22px]">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[10px] tracking-[0.10em] uppercase text-ink-3">Timeline</label>
                    <input className={fieldClass} value={data.timeline} onChange={e => up('timeline', e.target.value)} placeholder="e.g. 3 weeks, Q3" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[10px] tracking-[0.10em] uppercase text-ink-3">Budget range</label>
                    <select
                      className={`${fieldClass} appearance-none cursor-pointer`}
                      value={data.budget} onChange={e => up('budget', e.target.value)}
                      style={{
                        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='%23444' d='M0 0h10L5 6z'/></svg>\")",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 4px center',
                      }}
                    >
                      <option value="">Select&hellip;</option>
                      <option>$350 – $750</option>
                      <option>$750 – $1,000</option>
                      <option>$1,000 – $2,000</option>
                      <option>$2,000+</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] tracking-[0.10em] uppercase text-ink-3">Project notes</label>
                  <textarea className={`${fieldClass} resize-none`} rows={3} value={data.notes} onChange={e => up('notes', e.target.value)} placeholder="What are you trying to launch, fix, or improve?" />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-600">Something went wrong. Please try again or email directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-2 bg-ink text-paper font-medium py-4 rounded-full text-[15px] hover:bg-accent hover:-translate-y-px transition-all cursor-pointer border-0 disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send fit review request →'}
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
