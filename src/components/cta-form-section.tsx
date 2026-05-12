'use client'

import { useState, type FormEvent } from 'react'
import FadeIn from './fade-in'

const serviceOptions = [
  'Paid social ad creative',
  'Landing page',
  'Campaign assets',
  'Creative testing system',
  'Ongoing creative support',
  'Full funnel creative',
  'Creative audit',
  'Not sure yet',
]

const budgetOptions = [
  'Under £2k',
  '£2k–£5k',
  '£5k–£10k',
  '£10k–£20k',
  '£20k+',
  'Ongoing retainer',
  'Not sure yet',
]

interface FormData {
  name: string
  email: string
  company: string
  website: string
  services: string[]
  budget: string
  goal: string
  timeline: string
  phone: string
  notes: string
}

export default function CtaFormSection() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [form, setForm] = useState<FormData>({
    name: '', email: '', company: '', website: '',
    services: [], budget: '', goal: '', timeline: '',
    phone: '', notes: '',
  })

  function update(field: keyof FormData, value: string | string[]) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function toggleService(service: string) {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-border bg-white text-sm transition-all duration-200 placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40'

  return (
    <section id="contact" className="relative py-24 lg:py-28 bg-foreground text-background overflow-hidden grain">
      <div className="absolute inset-0 bg-dot-grid-dark pointer-events-none" />
      <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-accent/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-background/35 mb-4">Get Started</p>
        </FadeIn>
        <FadeIn delay={80}>
          <h2 className="text-3xl lg:text-4xl font-medium leading-tight tracking-tight">
            Request a project fit review.
          </h2>
        </FadeIn>
        <FadeIn delay={140}>
          <p className="mt-3 text-background/50 text-[15px] max-w-xl leading-relaxed">
            Tell us the goal, budget range, and timeline. We&apos;ll reply within 24 hours with fit,
            rough scope, and next steps. If we&apos;re not the right fit, we&apos;ll say so.
          </p>
          <p className="mt-2 text-background/30 text-xs">Takes about 2 minutes.</p>
        </FadeIn>

        <FadeIn delay={200}>
          {status === 'success' ? (
            <div className="mt-10 bg-background/5 border border-background/10 rounded-2xl p-8 text-center">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-5">
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10l5 5 7-10" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Submission received.</h3>
              <p className="text-sm text-background/50">
                We&apos;ll review your details and get back to you within 24 hours with fit, scope, and next steps.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              {/* Row 1: Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-background/60 mb-1.5">Name *</label>
                  <input type="text" id="name" required value={form.name} onChange={(e) => update('name', e.target.value)} className={inputClass} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-background/60 mb-1.5">Work email *</label>
                  <input type="email" id="email" required value={form.email} onChange={(e) => update('email', e.target.value)} className={inputClass} placeholder="you@company.com" />
                </div>
              </div>

              {/* Row 2: Company + Website */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-xs font-medium text-background/60 mb-1.5">Company / brand *</label>
                  <input type="text" id="company" required value={form.company} onChange={(e) => update('company', e.target.value)} className={inputClass} placeholder="Company name" />
                </div>
                <div>
                  <label htmlFor="website" className="block text-xs font-medium text-background/60 mb-1.5">Website or landing page URL <span className="text-background/30">(optional)</span></label>
                  <input type="url" id="website" value={form.website} onChange={(e) => update('website', e.target.value)} className={inputClass} placeholder="https://" />
                </div>
              </div>

              {/* Services — checkboxes */}
              <div>
                <label className="block text-xs font-medium text-background/60 mb-2">What do you need? *</label>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`text-xs px-3.5 py-2 rounded-full border transition-all duration-200 ${
                        form.services.includes(service)
                          ? 'bg-accent text-accent-foreground border-accent font-medium'
                          : 'bg-transparent text-background/50 border-background/15 hover:border-background/30'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-xs font-medium text-background/60 mb-1.5">
                  Budget range *
                  <span className="font-normal text-background/30 ml-1">Helps us recommend the right level of support.</span>
                </label>
                <select
                  id="budget"
                  required
                  value={form.budget}
                  onChange={(e) => update('budget', e.target.value)}
                  className={`${inputClass} ${!form.budget ? 'text-muted-foreground/40' : 'text-foreground'}`}
                >
                  <option value="" disabled>Select a range</option>
                  {budgetOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Row: Goal + Timeline */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="goal" className="block text-xs font-medium text-background/60 mb-1.5">Primary goal or KPI <span className="text-background/30">(optional)</span></label>
                  <input type="text" id="goal" value={form.goal} onChange={(e) => update('goal', e.target.value)} className={inputClass} placeholder="e.g. reduce CPL, increase ROAS" />
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-xs font-medium text-background/60 mb-1.5">Timeline / launch date <span className="text-background/30">(optional)</span></label>
                  <input type="text" id="timeline" value={form.timeline} onChange={(e) => update('timeline', e.target.value)} className={inputClass} placeholder="e.g. need assets by June 1" />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs font-medium text-background/60 mb-1.5">Phone <span className="text-background/30">(optional)</span></label>
                <input type="tel" id="phone" value={form.phone} onChange={(e) => update('phone', e.target.value)} className={inputClass} placeholder="Phone number" />
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes" className="block text-xs font-medium text-background/60 mb-1.5">Project notes <span className="text-background/30">(optional)</span></label>
                <textarea id="notes" rows={3} value={form.notes} onChange={(e) => update('notes', e.target.value)} className={`${inputClass} resize-none`} placeholder="Any context that would help us understand the project..." />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-400">Something went wrong. Please try again or email us directly.</p>
              )}

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="bg-accent text-accent-foreground font-medium px-7 py-3.5 rounded-full text-sm hover:shadow-[0_0_30px_rgba(200,255,0,0.2)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-20" /><path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
                      Sending...
                    </>
                  ) : (
                    'Submit Fit Review Request'
                  )}
                </button>
                <p className="text-xs text-background/30">No pressure. If it&apos;s not a fit, we&apos;ll say so.</p>
              </div>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  )
}
