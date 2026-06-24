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
        </div>
      </div>
    </section>
  )
}
