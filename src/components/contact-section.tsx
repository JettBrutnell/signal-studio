'use client'

import { useState, type FormEvent } from 'react'
import FadeIn from './fade-in'

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', website: '', message: '' })

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
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
        setForm({ name: '', email: '', website: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full px-4 py-3.5 rounded-xl border border-border bg-white text-sm transition-all duration-300 placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40'

  return (
    <section id="contact" className="relative py-24 lg:py-32 border-t border-border overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-[50%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Info */}
          <div>
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Get In Touch
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="text-3xl lg:text-[2.75rem] font-medium leading-tight tracking-tight">
                Book your strategy call.
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                30 minutes. No pitch decks. Just a clear, honest look at what&apos;s
                working, what&apos;s not, and what a better version of your site could
                look like.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-muted border border-border flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-muted-foreground">
                      <path d="M2 5l7 4.5L16 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <rect x="1" y="3.5" width="16" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">hello@signalstudio.co.uk</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Direct email</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-muted border border-border flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-muted-foreground">
                      <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M9 5v4l3.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Within 24 hours</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Typical response time</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Trust signals */}
            <FadeIn delay={400}>
              <div className="mt-10 pt-8 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-1">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="w-2 h-2 rounded-full bg-accent/60" />
                    <span className="w-2 h-2 rounded-full bg-accent/30" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Founder-led &middot; No gatekeepers &middot; You talk to the person doing the work
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right — Form */}
          <FadeIn delay={250} direction="right">
            <div className="bg-muted/50 border border-border rounded-2xl p-6 lg:p-8">
              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-5 shadow-[0_0_24px_rgba(200,255,0,0.25)]">
                    <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10l5 5 7-10" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Message sent</h3>
                  <p className="text-sm text-muted-foreground">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        className={inputClass}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        className={inputClass}
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium mb-1.5">
                      Current website{' '}
                      <span className="text-muted-foreground font-normal">(optional)</span>
                    </label>
                    <input
                      type="url"
                      id="website"
                      value={form.website}
                      onChange={(e) => update('website', e.target.value)}
                      className={inputClass}
                      placeholder="https://yoursite.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                      What do you need help with?
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell me a bit about your business and what you're looking for..."
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-600">
                      Something went wrong. Please try again or email directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-foreground text-background font-medium px-6 py-3.5 rounded-xl hover:bg-foreground/90 transition-all duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed group flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-20" />
                          <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
