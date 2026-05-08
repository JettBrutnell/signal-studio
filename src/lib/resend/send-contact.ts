import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  website?: string
  message?: string
}

export async function sendContactEmail(data: ContactFormData) {
  const { name, email, website, message } = data

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? 'Signal Studio <onboarding@resend.dev>',
    to: process.env.RESEND_TO_EMAIL ?? 'jettbrutnell@gmail.com',
    replyTo: email,
    subject: `New enquiry from ${name.trim()}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 0;">
        <div style="border-bottom: 2px solid #0a0a0a; padding-bottom: 16px; margin-bottom: 24px;">
          <h1 style="font-size: 18px; font-weight: 600; margin: 0; color: #0a0a0a;">New Strategy Call Request</h1>
          <p style="font-size: 13px; color: #737373; margin: 4px 0 0;">via signalstudio.co.uk contact form</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 10px 0; color: #737373; vertical-align: top; width: 100px;">Name</td>
            <td style="padding: 10px 0; color: #0a0a0a; font-weight: 500;">${escapeHtml(name.trim())}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #737373; vertical-align: top;">Email</td>
            <td style="padding: 10px 0;"><a href="mailto:${escapeHtml(email.trim())}" style="color: #0a0a0a;">${escapeHtml(email.trim())}</a></td>
          </tr>
          ${website ? `
          <tr>
            <td style="padding: 10px 0; color: #737373; vertical-align: top;">Website</td>
            <td style="padding: 10px 0;"><a href="${escapeHtml(website.trim())}" style="color: #0a0a0a;">${escapeHtml(website.trim())}</a></td>
          </tr>
          ` : ''}
          ${message ? `
          <tr>
            <td style="padding: 10px 0; color: #737373; vertical-align: top;">Message</td>
            <td style="padding: 10px 0; color: #0a0a0a; line-height: 1.6;">${escapeHtml(message.trim()).replace(/\n/g, '<br/>')}</td>
          </tr>
          ` : ''}
        </table>

        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e5e5;">
          <p style="font-size: 12px; color: #737373; margin: 0;">
            Sent at ${new Date().toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'short', timeZone: 'Europe/London' })}
          </p>
          <p style="font-size: 12px; color: #737373; margin: 4px 0 0;">
            Reply directly to this email to respond to ${escapeHtml(name.trim())}.
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

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
