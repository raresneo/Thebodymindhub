'use client'

import { useState } from 'react'

interface FormData {
  nume: string
  prenume: string
  email: string
  telefon: string
  gdpr: boolean
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export function LeadForm() {
  const [form, setForm] = useState<FormData>({
    nume: '',
    prenume: '',
    email: '',
    telefon: '',
    gdpr: false,
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.gdpr) {
      setErrorMsg('Te rugăm să accepti Politica de confidențialitate pentru a continua.')
      return
    }
    setStatus('loading')
    setErrorMsg('')

    try {
      const { gdpr: _, ...payload } = form
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setErrorMsg((data as { error?: string }).error || 'Ceva nu a mers bine. Încearcă din nou.')
        setStatus('error')
        return
      }

      setStatus('success')
    } catch {
      setErrorMsg('Eroare de conexiune. Verifică internetul și încearcă din nou.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 rounded-full border border-gold/50 flex items-center justify-center mx-auto mb-6">
          <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-white mb-3">Locul tău e rezervat!</h3>
        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
          Mulțumim! Am primit rezervarea ta, revenim cu detaliile de plată.
          <br />
          Ne vedem pe 29 iulie la Merci Bistro!
        </p>
        <a
          href="https://wa.me/40742353586?text=Vreau%20s%C4%83%20particip%20la%20Fit%20f%C4%83r%C4%83%20filtre"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-white/10 text-white px-6 py-3 text-sm hover:border-white/20 hover:bg-white/5 transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
          Confirmă și pe WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
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
            placeholder="Popescu"
            className="w-full bg-[#111] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-gold/40 placeholder:text-gray-700 transition-colors"
          />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">
            Prenume <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            name="prenume"
            value={form.prenume}
            onChange={handleChange}
            required
            placeholder="Maria"
            className="w-full bg-[#111] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-gold/40 placeholder:text-gray-700 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">
          Email <span className="text-gold">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="maria@exemplu.com"
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

      {/* GDPR consent */}
      <div className="flex items-start gap-3 pt-1">
        <div className="relative flex-shrink-0 mt-0.5">
          <input
            type="checkbox"
            name="gdpr"
            id="gdpr"
            checked={form.gdpr}
            onChange={handleChange}
            className="sr-only"
          />
          <label
            htmlFor="gdpr"
            className={`w-4 h-4 border flex items-center justify-center cursor-pointer transition-colors ${form.gdpr ? 'bg-gold border-gold' : 'bg-transparent border-white/20 hover:border-gold/40'}`}
          >
            {form.gdpr && (
              <svg className="w-2.5 h-2.5 text-black" viewBox="0 0 10 10" fill="none">
                <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </label>
        </div>
        <label htmlFor="gdpr" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
          Am citit și sunt de acord cu{' '}
          <a
            href="/politica-de-confidentialitate"
            target="_blank"
            className="text-gold/80 hover:text-gold underline underline-offset-2 transition-colors"
          >
            Politica de confidențialitate
          </a>
          . Înțeleg că datele mele vor fi folosite exclusiv pentru organizarea evenimentului.{' '}
          <span className="text-gold">*</span>
        </label>
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm">{errorMsg}</p>
      )}
      {!form.gdpr && errorMsg && status !== 'error' && (
        <p className="text-red-400 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-gold text-black py-4 text-sm font-semibold uppercase tracking-widest hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
      >
        {status === 'loading' ? 'Se trimite...' : 'Rezervă acum'}
      </button>

      <p className="text-center text-xs text-gray-600 pt-1">
        Locuri limitate.
      </p>
    </form>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
