import { LeafIcon } from './LeafIcon'

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <LeafIcon className="w-3.5 h-5 text-gold/50" />
            <span className="font-serif text-white/70 text-sm">Body Mind Hub</span>
          </div>

          <p className="text-[10px] uppercase tracking-[0.35em] text-gray-700 italic">
            move · grow · connect
          </p>

          <a
            href="mailto:contact@bodymindhub.com"
            className="text-sm text-gray-600 hover:text-gold transition-colors"
          >
            contact@bodymindhub.com
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-gray-800">
            © 2026 Body Mind Hub. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  )
}
