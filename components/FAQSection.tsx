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
    <section className="py-16 sm:py-24 px-5 sm:px-6 border-t border-white/5 bg-[#080808]">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-4">Întrebări frecvente</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white">Tot ce vrei să știi</h2>
        </div>

        <div className="space-y-0 divide-y divide-white/5">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between py-6 sm:py-7 text-left group"
                >
                  {/* Number */}
                  <span className="font-serif text-2xl text-gold/15 leading-none mr-5 flex-shrink-0 pt-0.5 select-none group-hover:text-gold/30 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {/* Question */}
                  <span className={`flex-1 text-[15px] sm:text-base leading-snug transition-colors pr-6 ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                    {faq.q}
                  </span>
                  {/* Icon */}
                  <span className={`flex-shrink-0 mt-0.5 transition-transform duration-300 ${isOpen ? 'rotate-45 text-gold/60' : 'text-gray-600 group-hover:text-gray-400'}`}>
                    <PlusIcon className="w-4 h-4" />
                  </span>
                </button>

                {/* Answer — smooth CSS grid animation */}
                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="pb-6 sm:pb-8 pl-12 sm:pl-14">
                      <div className="w-6 h-px bg-gold/30 mb-4" />
                      <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            Altă întrebare?{' '}
            <a
              href="/api/whatsapp"
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
