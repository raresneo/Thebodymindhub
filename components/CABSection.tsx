const sections = [
  {
    icon: '✦',
    subtitle: 'Ce include',
    title: 'Caracteristici',
    items: [
      'Prezentări interactive de la specialiști în fitness, psihologie și nutriție',
      'Workbook „Fit fără filtre" — instrument practic de transformare, al tău pentru totdeauna',
      'Sesiune Q&A live — adresezi întrebările tale direct specialiștilor',
      'Tombola cu premii — vouchere EMS NeoBoost + consultații',
      'Networking cu oameni care investesc în sănătatea lor',
    ],
  },
  {
    icon: '◈',
    subtitle: 'De ce e diferit',
    title: 'Avantaje',
    items: [
      'Fără promisiuni false — doar informație validată și aplicabilă',
      'Centrat pe rezultatele tale, nu pe speakeri',
      'Eveniment interactiv — nu o conferință clasică cu prezentări pasive',
      'Specialiști cu experiență reală dovedită în teren',
      'Combinația unică: minte + corp + acțiune, simultan',
    ],
  },
  {
    icon: '◇',
    subtitle: 'Ce obții',
    title: 'Beneficii',
    items: [
      'Înțelegi exact cum gândești, vorbești și acționezi în legătură cu sănătatea ta',
      'Demontezi miturile care te țin pe loc de ani de zile',
      'Pleci cu un plan concret — nu cu motivație de scurtă durată',
      'Faci parte dintr-o comunitate care se mișcă în aceeași direcție',
      'Primul pas real spre transformarea pe care o amâni de mult',
    ],
  },
]

export function CABSection() {
  return (
    <section className="py-24 px-6 bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-4">De ce să vii</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">
            Tot ce primești seara asta
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="border border-white/8 p-8 hover:border-gold/20 transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-gold text-base">{section.icon}</span>
                <span className="text-xs uppercase tracking-[0.25em] text-gray-500">{section.subtitle}</span>
              </div>
              <h3 className="font-serif text-2xl text-white mb-7">{section.title}</h3>
              <ul className="space-y-4">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                    <span className="text-gold mt-0.5 flex-shrink-0 text-xs">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
