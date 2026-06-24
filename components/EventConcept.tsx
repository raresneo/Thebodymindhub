const pillars = [
  {
    index: '01',
    label: 'Think',
    ro: 'Gândește',
    description:
      'Descoperă tiparele mentale care te țin pe loc. Psihologia din spatele motivației, disciplinei și schimbării reale — de ce știi ce trebuie să faci, dar tot nu o faci.',
    speaker: 'Claudia Cosma',
  },
  {
    index: '02',
    label: 'Speak',
    ro: 'Vorbește',
    description:
      'Relația cu mâncarea și cu propriul corp determină mai mult decât crezi. Identifici blocajele emoționale și cognițiile iraționale care sabotează orice proces de slăbire.',
    speaker: 'Cristina Cecan',
  },
  {
    index: '03',
    label: 'Act',
    ro: 'Acționează',
    description:
      'De la teorie la practică. Demontezi miturile fitness și pleci cu instrumente concrete pentru o transformare reală — bazată pe știință, nu pe trend-uri.',
    speaker: 'Rareș Pantis',
  },
]

export function EventConcept() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-4">Conceptul serii</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            Trei unghiuri. Un singur adevăr.
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
            Sănătatea nu e doar ce mănânci sau cât te miști. E cum gândești, cum îți vorbești
            și ce faci cu adevărat — în fiecare zi.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-3 gap-px bg-white/5">
          {pillars.map((pillar) => (
            <div key={pillar.index} className="bg-[#0A0A0A] p-7 sm:p-10 group hover:bg-[#0d0d0d] transition-colors flex flex-col">
              <span className="font-serif text-4xl sm:text-5xl text-gold/12 group-hover:text-gold/25 transition-colors block mb-5 sm:mb-6">
                {pillar.index}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white mb-1">{pillar.label}</h3>
              <p className="text-gold text-sm mb-4 sm:mb-5 tracking-wide">{pillar.ro}</p>
              <p className="text-gray-300 sm:text-gray-400 leading-relaxed text-[15px] sm:text-sm flex-1">{pillar.description}</p>
              <div className="mt-8 pt-5 border-t border-white/5 flex items-center gap-2.5">
                <span className="w-1 h-1 bg-gold/40 rounded-full" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600">{pillar.speaker}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
