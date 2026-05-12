'use client'

import { useState } from 'react'
import FadeIn from './fade-in'

const faqs = [
  {
    q: 'What does this usually cost?',
    a: 'Projects typically range from £1,500–£8,000 depending on scope. A landing page with ad creative starts around £3,000. We will give you a clear quote after the project fit review — no surprises, no hidden fees.',
  },
  {
    q: 'How long does a project take?',
    a: 'Most projects are delivered within 10–14 working days from brief sign-off. Rush delivery (5–7 days) is available for an additional fee. We will confirm the timeline before any work begins.',
  },
  {
    q: 'Do you work with media buyers and agencies?',
    a: 'Yes. A significant portion of our work is commissioned by media buyers and agencies who need reliable, performance-focused creative production. We understand campaign workflows, testing frameworks, and platform specs.',
  },
  {
    q: 'Can you work from an existing brief or brand guidelines?',
    a: 'Absolutely. If you have a brief, brand guidelines, or creative direction, we will work from that. If you do not, we will help you build one during the strategic direction phase.',
  },
  {
    q: 'Do you offer ongoing creative support?',
    a: 'Yes. We offer monthly creative support packages for teams that need consistent output. This includes priority access, strategy calls, and iterative campaign support.',
  },
  {
    q: 'How many revisions are included?',
    a: 'Two rounds of revisions are included in every project. Most projects ship after one round. Additional rounds are billed at a pre-agreed hourly rate.',
  },
  {
    q: 'Can you provide performance data from previous work?',
    a: 'We share anonymised performance data where clients have given permission. The case studies on this page include real results. We can also help interpret your own data to inform creative decisions.',
  },
  {
    q: 'What happens after I submit the form?',
    a: 'We review your submission and reply within 24 hours with one of three things: a fit confirmation with rough scope and timeline, follow-up questions to clarify the brief, or an honest assessment that we are not the right fit — with a referral if we can.',
  },
  {
    q: 'What if we are not a good fit?',
    a: 'We will tell you. No sales pressure, no follow-up sequences. If your project is not in our wheelhouse — wrong budget, wrong timeline, wrong type of work — we will say so and point you toward someone who can help.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-border rounded-xl overflow-hidden card-hover">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-5 py-4 flex items-center justify-between text-left gap-4"
      >
        <span className="text-sm font-medium">{q}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={`shrink-0 text-muted-foreground transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
        >
          <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '300px' : '0', opacity: open ? 1 : 0 }}
      >
        <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export default function FaqSection() {
  return (
    <section id="faq" className="py-24 lg:py-28 border-t border-border">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">FAQ</p>
        </FadeIn>
        <FadeIn delay={80}>
          <h2 className="text-3xl lg:text-4xl font-medium leading-tight tracking-tight">
            Common questions before reaching out.
          </h2>
        </FadeIn>

        <div className="mt-10 space-y-2">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={140 + i * 40}>
              <FaqItem q={faq.q} a={faq.a} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
