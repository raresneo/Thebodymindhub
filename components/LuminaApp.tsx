'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const pillars = [
  {
    id: 'today',
    label: 'Today',
    title: 'Daily Roadmap',
    desc: 'Un plan zilnic personalizat care unește antrenamentul, nutriția, meditația și jurnalul într-o singură axă a timpului. Bifezi fiecare bloc pe măsură ce avansezi prin zi.',
    image: '/images/lumina-today.jpg',
    color: '#D4AF37',
    icon: '⚡',
  },
  {
    id: 'body',
    label: 'Body',
    title: 'Antrenament & Tracking',
    desc: 'Loghează seturi, repetări și greutăți. Creează rutine, urmărește recordurile personale, monitorizează măsurătorile corporale și vizualizează progresul pe calendar.',
    image: '/images/lumina-body.jpg',
    color: '#4a9eff',
    icon: '💪',
  },
  {
    id: 'meditation',
    label: 'Mind',
    title: 'ZenFocus · Meditație',
    desc: 'Sesiuni ghidate cu tehnici multiple — Box Breathing, 4-7-8, Wim Hof — și audio ambiental. Timer vizual, progres și statistici de constanță.',
    image: '/images/lumina-meditation.jpg',
    color: '#7c5cbf',
    icon: '🧘',
  },
  {
    id: 'luca',
    label: 'Luca',
    title: 'AI Companion',
    desc: 'Luca citește jurnalul tău, înțelege contextul emoțional și îți oferă perspective personalizate. Cu input vocal și răspunsuri empatice, e ca un prieten care chiar te ascultă.',
    image: '/images/lumina-luca.jpg',
    color: '#a855f7',
    icon: '🤖',
  },
  {
    id: 'fuel',
    label: 'Fuel',
    title: 'Nutriție & Mese',
    desc: 'Tracking complet de calorii și macronutrienți. Planificarea meselor pe sloturi (mic dejun, prânz, cină), bază de date cu alimente și vizualizare zilnică a aportului.',
    image: '/images/lumina-fuel.jpg',
    color: '#34d399',
    icon: '🍽️',
  },
  {
    id: 'trends',
    label: 'Trends',
    title: 'Insights & Analiză',
    desc: 'Grafice de evoluție pe 30 de zile: greutate corporală, volum de antrenament, minute de meditație și aderență nutrițională. Toate datele tale, vizualizate inteligent.',
    image: '/images/lumina-trends.jpg',
    color: '#e0b34a',
    icon: '📊',
  },
]

export function LuminaApp() {
  const [active, setActive] = useState(0)

  return (
    <section id="lumina" className="py-24 sm:py-36 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Background ambiance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-gold/50" />
            <p className="text-xs uppercase tracking-[0.3em] text-gold/80 font-medium">Produsul nostru flagship</p>
            <div className="h-[1px] w-8 bg-gold/50" />
          </div>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-white mb-6 tracking-tight">
            Lumina
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-light mb-4">
            Aplicația de transformare personală construită pe cei 3 piloni: <span className="text-white font-medium">Body</span>, <span className="text-white font-medium">Mind</span>, <span className="text-white font-medium">Fuel</span>. Totul într-un singur loc — privat, criptat, al tău.
          </p>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-16 sm:mb-24"
        >
          {[
            { icon: '🔒', text: 'End-to-End Encrypted' },
            { icon: '📱', text: 'Local-First' },
            { icon: '☁️', text: 'Sync Opțional' },
          ].map((badge) => (
            <div key={badge.text} className="flex items-center gap-2 glass-panel px-4 py-2 rounded-full border border-white/5">
              <span className="text-sm">{badge.icon}</span>
              <span className="text-[11px] uppercase tracking-widest text-gray-400 font-medium">{badge.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Main showcase: tabs + phone mockup */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Feature tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-3">
              {pillars.map((pillar, idx) => (
                <button
                  key={pillar.id}
                  onClick={() => setActive(idx)}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl transition-all duration-500 group border ${
                    active === idx
                      ? 'glass-panel border-gold/30 shadow-gold-glow bg-gold/[0.03]'
                      : 'border-transparent hover:border-white/10 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-2xl transition-all duration-300 ${active === idx ? 'scale-110' : 'grayscale opacity-60 group-hover:opacity-80'}`}>
                      {pillar.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className={`font-serif text-lg sm:text-xl transition-colors duration-300 ${active === idx ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                          {pillar.title}
                        </h3>
                        <span
                          className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full font-semibold"
                          style={{
                            color: pillar.color,
                            backgroundColor: `${pillar.color}15`,
                            border: `1px solid ${pillar.color}30`,
                          }}
                        >
                          {pillar.label}
                        </span>
                      </div>
                      <AnimatePresence mode="wait">
                        {active === idx && (
                          <motion.p
                            key={pillar.id}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-gray-500 text-sm leading-relaxed font-light"
                          >
                            {pillar.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: Phone mockup with screen */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow behind phone */}
              <div
                className="absolute inset-0 blur-[80px] opacity-20 transition-colors duration-700 rounded-full scale-75"
                style={{ backgroundColor: pillars[active].color }}
              />

              {/* Phone frame */}
              <div className="relative w-[280px] sm:w-[320px] rounded-[3rem] border-[6px] border-[#1a1a1a] bg-black shadow-2xl shadow-black/50 overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-2xl z-30" />

                {/* Screen */}
                <div className="relative aspect-[9/19.5] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={pillars[active].id}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={pillars[active].image}
                        alt={`Lumina — ${pillars[active].title}`}
                        fill
                        className="object-cover object-top"
                        sizes="320px"
                        quality={90}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-white/20 rounded-full z-30" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16 sm:mt-24"
        >
          <p className="text-gray-500 text-sm mb-6 font-light">
            Lansată prin ecosistemul The Body Mind Hub. Datele tale rămân pe device-ul tău.
          </p>
          <a
            href="https://lumina.thebodymindhub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold text-dark-900 px-10 py-4 text-sm font-bold uppercase tracking-widest hover:scale-105 hover:shadow-gold-glow-strong transition-all rounded-sm"
          >
            Descoperă Lumina
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
