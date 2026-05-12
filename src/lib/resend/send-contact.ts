import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface FitReviewData {
  name: string
  email: string
  company: string
  website?: string
  services: string[]
  budget: string
  goal?: string
  timeline?: string
  phone?: string
  notes?: string
}

export async function sendContactEmail(data: FitReviewData) {
  const { name, email, company, website, services, budget, goal, timeline, phone, notes } = data

  const row = (label: string, value: string | undefined) =>
    value
      ? `<tr><td style="padding:8px 0;color:#737373;vertical-align:top;width:140px;font-size:13px;">${label}</td><td style="padding:8px 0;color:#0a0a0a;font-size:13px;">${esc(value)}</td></tr>`
      : ''

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? 'Signal Studio <onboarding@resend.dev>',
    to: process.env.RESEND_TO_EMAIL ?? 'jettbrutnell@gmail.com',
    replyTo: email,
    subject: `Fit review request — ${esc(company.trim())}`,
    html: `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:580px;margin:0 auto;padding:32px 0;">
        <div style="border-bottom:2px solid #0a0a0a;padding-bottom:14px;margin-bottom:20px;">
          <h1 style="font-size:17px;font-weight:600;margin:0;color:#0a0a0a;">New Project Fit Review Request</h1>
          <p style="font-size:12px;color:#737373;margin:4px 0 0;">via signalstudio.co.uk</p>
        </div>

        <table style="width:100%;border-collapse:collapse;">
          ${row('Name', name.trim())}
          ${row('Email', `<a href="mailto:${esc(email.trim())}" style="color:#0a0a0a;">${esc(email.trim())}</a>`)}
          ${row('Company', company.trim())}
          ${row('Website', website ? `<a href="${esc(website.trim())}" style="color:#0a0a0a;">${esc(website.trim())}</a>` : undefined)}
          ${row('Services', services.join(', '))}
          ${row('Budget', budget)}
          ${row('Goal / KPI', goal?.trim())}
          ${row('Timeline', timeline?.trim())}
          ${row('Phone', phone?.trim())}
        </table>

        ${notes?.trim() ? `
        <div style="margin-top:16px;padding:12px 16px;background:#f5f5f5;border-radius:8px;">
          <p style="font-size:12px;color:#737373;margin:0 0 6px;font-weight:600;">Project Notes</p>
          <p style="font-size:13px;color:#0a0a0a;margin:0;line-height:1.6;">${esc(notes.trim()).replace(/\n/g, '<br/>')}</p>
        </div>
        ` : ''}

        <div style="margin-top:20px;padding-top:14px;border-top:1px solid #e5e5e5;">
          <p style="font-size:11px;color:#737373;margin:0;">
            ${new Date().toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'short', timeZone: 'Europe/London' })}
          </p>
          <p style="font-size:11px;color:#737373;margin:4px 0 0;">
            Reply directly to respond to ${esc(name.trim())}.
          </p>
        </div>
      </div>
    `,
  })

  if (error) {
    console.error('Resend error:', error)
    throw new Error(error.message)
  }
}

function esc(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;')
}
