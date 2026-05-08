import { NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/resend/send-contact'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, website, message } = body

    /* ---------- Validation ---------- */
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Name is required (min 2 characters)' }, { status: 400 })
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'A valid email address is required' }, { status: 400 })
    }

    if (website && typeof website === 'string' && website.length > 0) {
      try {
        new URL(website)
      } catch {
        return NextResponse.json({ error: 'Website must be a valid URL' }, { status: 400 })
      }
    }

    /* ---------- Send email via Resend ---------- */
    await sendContactEmail({ name, email, website, message })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
