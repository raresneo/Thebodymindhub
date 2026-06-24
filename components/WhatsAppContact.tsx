'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'sent' | 'error'

export function WhatsAppContact() {
  const [form, setForm] = useState({ nume: '', telefon: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      await fetch('/api/whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nume: form.nume, telefon: form.telefon }),
      })
    } catch {
      // log failure is silent — still open WhatsApp
    }

    const msg = encodeURIComponent(
      `Bună ziua! Mă numesc ${form.nume || 'un vizitator'} și aș dori mai multe detalii despre evenimentul Fit fără filtre.`
    )
    window.open(`https://wa.me/40742353586?text=${msg}`, '_blank')
    setStatus('sent')
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-8">
        <div className="w-12 h-12 rounded-full border border-[#25D366]/40 flex items-center justify-center mx-auto mb-4">
          <svg className="w-5 h-5 text-[#25D366]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-white text-base font-medium mb-1">WhatsApp deschis!</p>
        <p className="text-gray-500 text-sm">Te așteptăm acolo cu răspunsuri.</p>
      </div>
    )
  }

  return (
    <section id="contact" className="py-16 sm:py-24 px-5 sm:px-6 border-t border-white/5">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-4">Întrebări?</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
          Discută cu noi
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-sm mx-auto">
          Nu ești sigur dacă evenimentul e pentru tine? Lasă-ți numele și numărul
          și deschidem o conversație directă pe WhatsApp.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3 text-left">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">
                Nume <span className="text-gold">*</span>
              </label>
              <input
                type="text"
                name="nume"
                value={form.nume}
                onChange={handleChange}
                required
                placeholder="Prenume Nume"
                className="w-full bg-[#111] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-gold/40 placeholder:text-gray-700 transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">
                Telefon <span className="text-gold">*</span>
              </label>
              <input
                type="tel"
                name="telefon"
                value={form.telefon}
                onChange={handleChange}
                required
                placeholder="07XX XXX XXX"
                className="w-full bg-[#111] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-gold/40 placeholder:text-gray-700 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full flex items-center justify-center gap-3 border border-[#25D366]/30 text-white bg-[#25D366]/5 px-6 py-4 text-sm font-medium uppercase tracking-widest hover:bg-[#25D366]/10 hover:border-[#25D366]/50 transition-colors disabled:opacity-50"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            {status === 'loading' ? 'Se deschide...' : 'Discută pe WhatsApp'}
          </button>

          <p className="text-center text-xs text-gray-600 pt-1">
            Datele sunt folosite exclusiv pentru a te identifica în conversație.
          </p>
        </form>
      </div>
    </section>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
