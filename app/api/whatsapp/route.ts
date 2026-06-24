import { NextResponse } from 'next/server'

const WHATSAPP_URL =
  'https://wa.me/40742353586?text=Bun%C4%83%20ziua!%20A%C8%99%20dori%20mai%20multe%20detalii%20despre%20evenimentul%20Fit%20f%C4%83r%C4%83%20filtre.'

export async function GET() {
  const apiToken = process.env.CLICKUP_API_TOKEN
  const listId = process.env.CLICKUP_LIST_ID

  if (apiToken && listId) {
    const now = new Date().toLocaleString('ro-RO', { timeZone: 'Europe/Bucharest' })
    await fetch(`https://api.clickup.com/api/v2/list/${listId}/task`, {
      method: 'POST',
      headers: {
        Authorization: apiToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `Interes WhatsApp — ${now}`,
        description: [
          `Sursă: buton WhatsApp (website)`,
          `Eveniment: Fit fără filtre — 29 iulie 2026`,
          `Data: ${now}`,
        ].join('\n'),
        status: 'Open',
        tags: ['fit-fara-filtre', 'whatsapp'],
      }),
    }).catch((err) => console.error('ClickUp WhatsApp log error:', err))
  }

  return NextResponse.redirect(WHATSAPP_URL, 302)
}
