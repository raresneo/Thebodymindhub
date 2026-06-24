import { LeadForm } from './LeadForm'

export function LeadFormSection() {
  return (
    <section id="inscriere" className="py-16 sm:py-24 px-5 sm:px-6 bg-[#080808] border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-4">Rezervare</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Rezervă-ți locul
          </h2>
          <p className="text-gray-400 max-w-md mx-auto text-sm leading-relaxed">
            Completează formularul. Locurile sunt limitate.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <LeadForm />

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/8" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#080808] px-4 text-[10px] uppercase tracking-widest text-gray-600">
                sau
              </span>
            </div>
          </div>

          {/* WhatsApp alternative */}
          <a
            href="https://wa.me/40742353586?text=Vreau%20s%C4%83%20particip%20la%20Fit%20f%C4%83r%C4%83%20filtre"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 border border-white/10 text-white px-6 py-4 text-sm font-medium hover:border-white/20 hover:bg-white/5 transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
            Detalii / info suplimentare pe WhatsApp
          </a>
        </div>
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
