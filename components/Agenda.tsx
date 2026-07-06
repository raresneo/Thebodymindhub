'use client'

import { motion } from 'framer-motion'

const schedule = [
  { time: '18:30', title: 'Welcome & Networking', description: 'Primirea participanților, socializare și băuturi din partea casei.' },
  { time: '19:00', title: 'Sesiunea 1 — Mintea', description: 'Claudia Cosma: De ce știi ce ai de făcut, dar nu o faci? Psihologia din spatele obiceiurilor.' },
  { time: '19:45', title: 'Sesiunea 2 — Hrana', description: 'Cristina Cecan: Relația cu mâncarea, foamea emoțională și deciziile subconștiente.' },
  { time: '20:30', title: 'Pauză', description: 'Snacks, cafea, socializare și un scurt respiro.' },
  { time: '20:45', title: 'Sesiunea 3 — Corpul', description: 'Rareș Pantiș: Mișcarea corectă, demontarea miturilor de fitness și biomecanica transformării.' },
  { time: '21:30', title: 'Q&A Fără Filtre', description: 'Sesiune deschisă de întrebări și răspunsuri directe cu toți cei trei specialiști.' },
]

export function Agenda() {
  return (
    <section className="py-20 sm:py-32 px-6 border-t border-white/5 relative bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold/80 mb-4 font-medium">Cum se va desfășura seara</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-white mb-6">Programul Evenimentului</h2>
        </motion.div>

        <div className="relative border-l border-gold/20 ml-4 sm:ml-0">
          {schedule.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="mb-10 sm:mb-14 pl-8 sm:pl-12 relative group"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-dark-900 border-2 border-gold group-hover:bg-gold group-hover:shadow-gold-glow transition-all duration-300" />
              
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-2">
                <span className="text-gold font-serif text-2xl sm:text-3xl w-20 flex-shrink-0">{item.time}</span>
                <h3 className="text-white text-lg sm:text-xl font-medium">{item.title}</h3>
              </div>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed pl-0 sm:pl-26 font-light max-w-2xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
