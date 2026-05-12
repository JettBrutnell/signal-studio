import { NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/resend/send-contact'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, website, services, budget, goal, timeline, phone, notes } = body

    /* ---------- Validation ---------- */
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'A valid work email is required' }, { status: 400 })
    }
    if (!company || typeof company !== 'string' || company.trim().length < 1) {
      return NextResponse.json({ error: 'Company name is required' }, { status: 400 })
    }
    if (!services || !Array.isArray(services) || services.length === 0) {
      return NextResponse.json({ error: 'Please select at least one service' }, { status: 400 })
    }
    if (!budget || typeof budget !== 'string') {
      return NextResponse.json({ error: 'Please select a budget range' }, { status: 400 })
    }

    /* ---------- Send email ---------- */
    await sendContactEmail({
      name, email, company, website, services, budget,
      goal, timeline, phone, notes,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send submission' }, { status: 500 })
  }
}
