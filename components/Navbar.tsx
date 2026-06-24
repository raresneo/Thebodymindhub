import { LeafIcon } from './LeafIcon'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0A0A0A]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LeafIcon className="w-4 h-6 text-gold" />
          <span className="font-serif text-white text-base tracking-wide">Body Mind Hub</span>
        </div>
        <a
          href="#inscriere"
          className="text-xs uppercase tracking-widest text-gold border border-gold/40 px-5 py-2.5 hover:bg-gold/10 transition-colors"
        >
          Rezervă acum
        </a>
      </div>
    </header>
  )
}
