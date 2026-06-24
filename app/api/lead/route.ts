import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  let body: Record<string, string>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Cerere invalidă.' }, { status: 400 })
  }

  const { nume, prenume, email, telefon } = body

  if (!nume?.trim() || !prenume?.trim() || !email?.trim() || !telefon?.trim()) {
    return NextResponse.json({ error: 'Câmpurile obligatorii lipsesc.' }, { status: 400 })
  }

  const apiToken = process.env.CLICKUP_API_TOKEN
  const listId = process.env.CLICKUP_LIST_ID

  if (!apiToken || !listId) {
    console.warn('ClickUp not configured — set CLICKUP_API_TOKEN and CLICKUP_LIST_ID in .env.local')
    return NextResponse.json({ success: true })
  }

  const description = [
    `Prenume: ${prenume}`,
    `Nume: ${nume}`,
    `Email: ${email}`,
    `Telefon: ${telefon}`,
    `Eveniment: Fit fără filtre — 29 iulie 2026`,
    `Sursă: formular website`,
  ].join('\n')

  const res = await fetch(`https://api.clickup.com/api/v2/list/${listId}/task`, {
    method: 'POST',
    headers: {
      Authorization: apiToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: `Lead: ${prenume} ${nume}`,
      description,
      status: 'Open',
      tags: ['fit-fara-filtre', 'lead'],
    }),
  })

  if (!res.ok) {
    const errorText = await res.text()
    console.error('ClickUp error:', res.status, errorText)
    return NextResponse.json(
      { error: 'Eroare la înregistrare. Încearcă din nou.' },
      { status: 500 }
    )
  }

  return NextResponse.json({ success: true })
}
