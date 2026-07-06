'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const speakers = [
  {
    name: 'Rareș Pantiș',
    role: 'Fondator NeoBoost · Specialist mișcare & recuperare',
    bio: 'Masterand în balneofizio-kinetoterapie, cu peste 13 ani de practică sportivă și 10 ani de antreprenoriat. A construit NeoBoost și a transformat sute de oameni prin metode bazate pe știință, nu pe trenduri. Pe scenă demontează miturile fitness și îți arată cum arată schimbarea reală a corpului.',
    image: '/images/rares.jpg',
    initials: 'RP',
    pillar: 'Act',
  },
  {
    name: 'Claudia Cosma',
    role: 'Psiholog Clinician',
    bio: 'Specialist în psihologia corpului și relația dintre gânduri și comportamente. Lucrează cu oameni care vor să înțeleagă de ce știu ce trebuie să facă, dar tot nu o fac — și cum se schimbă asta.',
    image: '/images/claudia.jpg',
    initials: 'CC',
    pillar: 'Think',
  },
  {
    name: 'Cristina Cecan',
    role: 'Psiholog Clinician',
    bio: 'Specializată în relația cu mâncarea și imaginea corporală. Identifică blocajele ascunse care fac procesul de slăbire imposibil — și emoțiile care conduc alegerile alimentare. Ajută oamenii să schimbe raportul cu propriul corp, nu doar cu cântarul.',
    image: '/images/cristina.jpg',
    initials: 'CC',
    pillar: 'Speak',
  },
]

export function Speakers() {
  return (
    <section className="py-20 sm:py-32 px-6 border-t border-white/5 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-gold/50" />
            <p className="text-xs uppercase tracking-[0.3em] text-gold/80 font-medium">Cine ești pe scenă</p>
            <div className="h-[1px] w-8 bg-gold/50" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-6 tracking-tight drop-shadow-md">
            Specialiștii serii
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg leading-relaxed font-light">
            Nu influenceri. Nu motivatori de weekend. Oameni cu ani de practică reală în spatele fiecărui cuvânt.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 sm:gap-10">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <SpeakerCard speaker={speaker} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SpeakerCard({ speaker }: { speaker: typeof speakers[0] }) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    
    const width = rect.width
    const height = rect.height
    
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-full flex flex-col glass-panel rounded-2xl overflow-hidden hover:shadow-gold-glow-strong transition-shadow duration-500 border border-white/10 hover:border-gold/30 bg-[#0a0a0a]"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ transform: "translateZ(1px)" }}
      />
      
      {/* Photo */}
      <div 
        className="relative aspect-[4/5] bg-dark-900 overflow-hidden rounded-t-2xl"
        style={{ transform: "translateZ(20px)" }}
      >
        <SpeakerImage speaker={speaker} />
        {/* Pillar badge */}
        <div className="absolute top-5 left-5 glass-panel-gold px-4 py-1.5 rounded-full z-10 border border-gold/40">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium">{speaker.pillar}</span>
        </div>
        {/* Bottom fade — blends photo into card */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      </div>

      {/* Info */}
      <div 
        className="p-6 sm:p-8 flex-1 flex flex-col justify-start relative z-20 bg-[#0a0a0a]"
        style={{ transform: "translateZ(30px)" }}
      >
        <h3 className="font-serif text-2xl sm:text-3xl text-white mb-2 group-hover:text-gold transition-colors duration-300">{speaker.name}</h3>
        <p className="text-gold/80 text-[11px] sm:text-xs uppercase tracking-[0.15em] mb-4 font-semibold">{speaker.role}</p>
        <p className="text-gray-400 text-sm leading-relaxed font-light flex-1">{speaker.bio}</p>
      </div>
    </motion.div>
  )
}

function SpeakerImage({ speaker }: { speaker: typeof speakers[0] }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <SpeakerAvatar initials={speaker.initials} />
  return (
    <Image
      src={speaker.image}
      alt={`${speaker.name} — ${speaker.role}`}
      fill
      className="object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
      sizes="(max-width: 768px) 100vw, 33vw"
      onError={() => setFailed(true)}
    />
  )
}

function SpeakerAvatar({ initials }: { initials: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-dark-800">
      <div className="w-28 h-28 rounded-full border border-gold/20 flex items-center justify-center shadow-inner">
        <span className="font-serif text-4xl text-gold/30">{initials}</span>
      </div>
    </div>
  )
}
