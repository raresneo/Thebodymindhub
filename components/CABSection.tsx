const sections = [
  {
    icon: '✦',
    subtitle: 'Ce include',
    title: 'Caracteristici',
    items: [
      'Prezentări interactive de la 3 specialiști cu experiență reală în teren',
      'Workbook „Fit fără filtre" — instrument practic de transformare, al tău pentru totdeauna',
      'Sesiune Q&A live — adresezi întrebările tale direct specialiștilor',
      'Tombolă cu premii — vouchere EMS NeoBoost + consultații individuale',
      'Networking cu oameni care investesc serios în sănătatea lor',
    ],
  },
  {
    icon: '◈',
    subtitle: 'De ce e diferit',
    title: 'Avantaje',
    items: [
      'Fără promisiuni false — doar informație validată și imediat aplicabilă',
      'Centrat pe realitatea ta, nu pe experiența speakerilor',
      'Eveniment interactiv — nu o conferință clasică cu prezentări pasive',
      'Trei perspective complementare: psihologie, corp și comportament alimentar',
      'Combinația unică: minte + corp + acțiune, în aceeași seară',
    ],
  },
  {
    icon: '◇',
    subtitle: 'Ce obții',
    title: 'Beneficii',
    items: [
      'Înțelegi exact ce te blochează cu adevărat — nu motivele pe care ți le spui tu',
      'Demontezi miturile care te țin pe loc de ani de zile',
      'Pleci cu un plan concret — nu cu motivație de scurtă durată',
      'Schimbi raportul cu mâncarea și cu propriul corp, nu doar cu cântarul',
      'Primul pas real spre transformarea pe care o amâni de mult timp',
    ],
  },
]

export function CABSection() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-6 bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-4">De ce să vii</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">
            Tot ce primești în această seară
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="border border-white/8 p-6 sm:p-8 hover:border-gold/20 transition-colors flex flex-col"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-gold text-base">{section.icon}</span>
                <span className="text-xs uppercase tracking-[0.25em] text-gray-500">{section.subtitle}</span>
              </div>
              <h3 className="font-serif text-2xl text-white mb-5 sm:mb-7">{section.title}</h3>
              <ul className="space-y-3 sm:space-y-4 flex-1">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-300 sm:text-gray-400 text-[15px] sm:text-sm leading-relaxed">
                    <span className="text-gold/60 mt-0.5 flex-shrink-0 text-xs">—</span>
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
