'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Se poate plăti la fața locului?',
    a: 'Nu. Locurile se rezervă și se achită exclusiv în avans prin link-ul de plată securizat Stripe. Rezervarea este confirmată la momentul efectuării plății. Fără plată prealabilă, locul nu este garantat.',
  },
  {
    q: 'Există parcare la Merci Bistro?',
    a: 'Da. În zona Merci Bistro & Coffee (Strada Aurel Lazăr nr. 1) există parcare disponibilă în apropiere. Recomandăm să ajungeți cu câteva minute înainte de ora 19:00.',
  },
  {
    q: 'Pot primi factură pentru bilet?',
    a: 'Da. Dacă ai nevoie de factură, ne contactezi pe WhatsApp sau email după rezervare cu datele de facturare și îți emitem documentul în cel mai scurt timp.',
  },
  {
    q: 'Cât durează evenimentul?',
    a: 'Evenimentul începe la ora 19:00 și are o durată estimată de aproximativ 2.5–3 ore, incluzând prezentările celor 3 speakeri, sesiunea Q&A live și tombolă.',
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-16 sm:py-24 px-5 sm:px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-4">Întrebări frecvente</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white">Ai întrebări?</h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/8 hover:border-white/12 transition-colors">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <span className="text-white text-[15px] sm:text-base font-medium pr-4 group-hover:text-gold/90 transition-colors">
                  {faq.q}
                </span>
                <span className={`text-gold/50 flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>
                  <PlusIcon className="w-4 h-4" />
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 text-sm">
            Altă întrebare?{' '}
            <a
              href="https://wa.me/40742353586"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/70 hover:text-gold transition-colors"
            >
              Scrie-ne pe WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="8" y1="1" x2="8" y2="15" />
      <line x1="1" y1="8" x2="15" y2="8" />
    </svg>
  )
}
