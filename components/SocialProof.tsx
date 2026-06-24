const testimonials = [
  {
    name: 'Andreea M.',
    text: 'Am slăbit 12 kg în 4 luni fără să fac dietă extremă. Rareș m-a ajutat să înțeleg cum funcționează cu adevărat corpul meu — nu cu restricții, ci cu sens.',
    stars: 5,
  },
  {
    name: 'Bogdan T.',
    text: 'După ani de încercări eșuate, am găsit în NeoBoost o metodă care funcționează pe termen lung. Rezultate vizibile în 6 săptămâni și, mai important, știu de ce funcționează.',
    stars: 5,
  },
  {
    name: 'Ioana C.',
    text: 'Nu mă așteptam să schimb și mentalitatea, nu doar corpul. Abordarea bazată pe știință, nu pe trend-uri, a fost exact ce aveam nevoie după ani de mituri fitness.',
    stars: 5,
  },
  {
    name: 'Alexandru P.',
    text: 'Profesionalism real, fără bullshit. Planul a fost adaptat la viața mea reală, nu la o versiune ideală din Instagram. Recomand oricui vrea rezultate durabile.',
    stars: 5,
  },
]

export function SocialProof() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-6 border-t border-white/5 bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-4">Ce spun oamenii</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-3">
            Rezultate reale de la clienții NeoBoost
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="w-4 h-4 text-gold" />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-1">5.0 · Google Reviews</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-white/8 p-6 sm:p-7 hover:border-gold/15 transition-colors">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <StarIcon key={j} className="w-3.5 h-3.5 text-gold" />
                ))}
              </div>
              <p className="text-gray-300 text-[15px] sm:text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-[11px] font-medium">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-gray-600 text-xs">Client NeoBoost</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/search/NeoBoost+Oradea"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-gold/70 transition-colors tracking-wide"
          >
            <GoogleIcon className="w-4 h-4" />
            Vezi toate recenziile pe Google
          </a>
        </div>
      </div>
    </section>
  )
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}
