import { NextResponse } from 'next/server'

const WHATSAPP_URL =
  'https://wa.me/40742353586?text=Bun%C4%83%20ziua!%20A%C8%99%20dori%20mai%20multe%20detalii%20despre%20evenimentul%20Fit%20f%C4%83r%C4%83%20filtre.'

async function logToClickUp(name: string, telefon: string, source: string) {
  const apiToken = process.env.CLICKUP_API_TOKEN
  const listId = process.env.CLICKUP_LIST_ID
  if (!apiToken || !listId) return

  const now = new Date().toLocaleString('ro-RO', { timeZone: 'Europe/Bucharest' })
  const taskName = name ? `Interes WhatsApp — ${name}` : `Interes WhatsApp — ${now}`

  await fetch(`https://api.clickup.com/api/v2/list/${listId}/task`, {
    method: 'POST',
    headers: { Authorization: apiToken, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: taskName,
      description: [
        name ? `Nume: ${name}` : null,
        telefon ? `Telefon: ${telefon}` : null,
        `Sursă: ${source}`,
        `Eveniment: Fit fără filtre — 29 iulie 2026`,
        `Data: ${now}`,
      ]
        .filter(Boolean)
        .join('\n'),
      status: 'Open',
      tags: ['fit-fara-filtre', 'whatsapp'],
    }),
  }).catch((err) => console.error('ClickUp WhatsApp log error:', err))
}

// POST — called from the WhatsAppContact form (has name + phone)
export async function POST(request: Request) {
  let body: { nume?: string; telefon?: string } = {}
  try {
    body = await request.json()
  } catch {
    // ignore parse errors
  }

  await logToClickUp(body.nume ?? '', body.telefon ?? '', 'formular WhatsApp')
  return NextResponse.json({ ok: true })
}

// GET — fallback for direct button clicks (no form data)
export async function GET() {
  await logToClickUp('', '', 'click direct WhatsApp')
  return NextResponse.redirect(WHATSAPP_URL, 302)
}
