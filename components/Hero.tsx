import { LeafIcon } from './LeafIcon'
import { Countdown } from './Countdown'

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Background decorative leaf watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <LeafIcon className="w-[500px] h-[700px] text-gold opacity-[0.025]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Brand mark */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <LeafIcon className="w-3.5 h-5 text-gold/70" />
          <span className="text-xs uppercase tracking-[0.35em] text-gold/70 font-medium">Body Mind Hub</span>
          <LeafIcon className="w-3.5 h-5 text-gold/70 scale-x-[-1]" />
        </div>

        {/* Tagline */}
        <p className="text-sm italic text-gray-600 mb-8 tracking-wide">move, grow, connect</p>

        {/* Gold divider */}
        <div className="flex items-center gap-4 mb-10 max-w-[200px] mx-auto">
          <div className="flex-1 h-px bg-gold/30" />
          <div className="w-1 h-1 bg-gold/50 rotate-45" />
          <div className="flex-1 h-px bg-gold/30" />
        </div>

        {/* Event title */}
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] text-white mb-6 leading-[0.9] tracking-tight">
          Fit fără filtre
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg max-w-lg mx-auto mb-12 leading-relaxed">
          O seară fără filtre despre cum arată cu adevărat sănătatea —
          minte, corp și acțiune.
        </p>

        {/* Urgency badge */}
        <div className="inline-flex items-center gap-2 bg-gold/8 border border-gold/20 px-4 py-2 mb-8">
          <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-gold/80">
            Locuri limitate · Rezervă înainte să se închidă
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-gray-600 line-through text-lg">150 lei</span>
          <div className="flex items-center gap-3">
            <span className="font-serif text-4xl text-gold">99 lei</span>
            <span className="bg-gold/10 text-gold text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 border border-gold/25">
              Preț redus
            </span>
          </div>
        </div>

        {/* Countdown */}
        <div className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gray-600 mb-4">Timp rămas până la eveniment</p>
          <Countdown />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <a
            href="#inscriere"
            className="w-full sm:w-auto bg-gold text-black px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-gold-light transition-colors"
          >
            Rezervă-ți locul
          </a>
          <a
            href="https://wa.me/40742353586?text=Vreau%20s%C4%83%20particip%20la%20Fit%20f%C4%83r%C4%83%20filtre"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white/10 text-white px-8 py-4 text-sm font-medium hover:border-white/20 hover:bg-white/5 transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            Înscrie-te pe WhatsApp
          </a>
        </div>

        {/* Event info */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 text-gold/50" />
            <span>29 iulie 2026</span>
          </div>
          <div className="w-px h-4 bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2">
            <LocationIcon className="w-4 h-4 text-gold/50" />
            <span>Merci Bistro, Oradea</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
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
