export function EventDetails() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-4">Detalii practice</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white">Tot ce trebuie să știi</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="text-center p-8 border border-white/8">
            <div className="w-11 h-11 border border-gold/30 flex items-center justify-center mx-auto mb-5">
              <CalendarIcon className="w-5 h-5 text-gold" />
            </div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Data</p>
            <p className="font-serif text-xl text-white">29 iulie 2026</p>
            <p className="text-gray-600 text-sm mt-1">Marți seara</p>
          </div>

          <div className="text-center p-8 border border-white/8">
            <div className="w-11 h-11 border border-gold/30 flex items-center justify-center mx-auto mb-5">
              <LocationIcon className="w-5 h-5 text-gold" />
            </div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Locație</p>
            <p className="font-serif text-xl text-white">Merci Bistro</p>
            <p className="text-gray-600 text-sm mt-1">Oradea</p>
          </div>

          <div className="text-center p-8 border border-gold/20 bg-gold/5">
            <div className="w-11 h-11 border border-gold/30 flex items-center justify-center mx-auto mb-5">
              <TicketIcon className="w-5 h-5 text-gold" />
            </div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Preț bilet</p>
            <div className="flex items-center justify-center gap-2">
              <p className="font-serif text-xl text-white">99 lei</p>
              <span className="text-gray-600 line-through text-sm">150</span>
            </div>
            <p className="text-gold text-xs mt-1 tracking-wide">Locuri limitate</p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://buy.stripe.com/fZu9AV3WAaTgfd4bfYbII0h"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-black px-10 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-gold-light transition-colors"
          >
            Rezervă-ți locul acum
          </a>
        </div>
      </div>
    </section>
  )
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function TicketIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z" />
      <path d="M13 5v14" strokeDasharray="3 3" />
    </svg>
  )
}
