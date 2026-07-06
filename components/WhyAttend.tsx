'use client'

import { motion } from 'framer-motion'

const reasons = [
  {
    title: 'Vrei claritate, nu teorii vagi',
    desc: 'Te-ai săturat de diete care nu funcționează pe termen lung și de sfaturi generale care nu se aplică programului tău.',
    icon: '💡'
  },
  {
    title: 'Mănânci pe fond emoțional',
    desc: 'Simți că mâncarea a devenit un refugiu și vrei să înțelegi care sunt de fapt declanșatorii psihologici.',
    icon: '🧠'
  },
  {
    title: 'Te accidentezi des sau ai dureri',
    desc: 'Vrei să înveți să te antrenezi corect biomecanic pentru a evita durerile de spate, genunchi sau postură incorectă.',
    icon: '⚡'
  },
  {
    title: 'Lipsa de constanță',
    desc: 'Începi în forță luni și renunți joi. Vei învăța cum să spargi acest ciclu și să construiești obiceiuri automate.',
    icon: '🔄'
  }
]

export function WhyAttend() {
  return (
    <section className="py-20 sm:py-32 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold/80 mb-4 font-medium">Pentru cine este</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-white mb-6">De ce să fii în sală</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-panel p-8 sm:p-10 rounded-2xl hover:border-gold/30 hover:shadow-gold-glow transition-all duration-500 group"
            >
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100 group-hover:scale-110 origin-left">
                {reason.icon}
              </div>
              <h3 className="text-white text-xl sm:text-2xl font-serif mb-3">{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
