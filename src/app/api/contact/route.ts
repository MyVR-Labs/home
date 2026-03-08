import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send to Google Apps Script
    const googleScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL
    if (!googleScriptUrl) {
      return NextResponse.json(
        { error: 'Server configuration missing' },
        { status: 500 }
      )
    }

    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        phone,
        company,
        message,
        timestamp: new Date().toISOString(),
      }),
    })

    const responseText = await response.text()
    console.log('Google Apps Script Response:', response.status, responseText)

    if (!response.ok) {
      throw new Error(`Google Apps Script error: ${response.status} - ${responseText}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
