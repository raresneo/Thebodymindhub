const pillars = [
  {
    index: '01',
    label: 'Think',
    ro: 'Gândește',
    description:
      'Descoperă tiparele mentale care te țin pe loc. Psihologia din spatele motivației, disciplinei și schimbării reale — fără bullshit.',
  },
  {
    index: '02',
    label: 'Speak',
    ro: 'Vorbește',
    description:
      'Cum comunici cu tine însuți determină ce obții. Elimini auto-sabotajul și construiești o relație sănătoasă cu propriul corp.',
  },
  {
    index: '03',
    label: 'Act',
    ro: 'Acționează',
    description:
      'De la teorie la practică. Demontezi miturile fitness și pleci cu instrumente concrete pentru o transformare reală și durabilă.',
  },
]

export function EventConcept() {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-4">Conceptul evenimentului</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            O seară despre sănătatea reală
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Nu mai există scuze. Nici filtre. Seara asta vorbim deschis despre cum arată
            cu adevărat mișcarea, psihologia și transformarea — bazate pe știință, nu pe trend-uri.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-3 gap-px bg-white/5">
          {pillars.map((pillar) => (
            <div key={pillar.index} className="bg-[#0A0A0A] p-10 group hover:bg-[#0f0f0f] transition-colors">
              <span className="font-serif text-5xl text-gold/15 group-hover:text-gold/30 transition-colors block mb-6">
                {pillar.index}
              </span>
              <h3 className="font-serif text-3xl text-white mb-1">{pillar.label}</h3>
              <p className="text-gold text-sm mb-5 tracking-wide">{pillar.ro}</p>
              <p className="text-gray-400 leading-relaxed text-sm">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
