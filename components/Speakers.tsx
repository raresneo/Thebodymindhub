'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'

const speakers = [
  {
    name: 'Rareș Pantis',
    role: 'Fondator & Specialist Fitness',
    bio: 'Kinetoterapeut, antreprenor și fondatorul NeoBoost. A transformat sute de oameni prin metode bazate pe știință, nu pe trend-uri. Demontează miturile fitness și îți arată cum arată cu adevărat schimbarea corpului.',
    image: '/images/rares.jpg',
    initials: 'RP',
    pillar: 'Act',
  },
  {
    name: 'Claudia Cosma',
    role: 'Psiholog Clinician',
    bio: 'Specialist în psihologia corpului și relația dintre emoții și comportamente. Lucrează cu oameni care vor să înțeleagă de ce știu ce trebuie să facă, dar tot nu o fac — și cum se schimbă asta.',
    image: '/images/claudia.jpg',
    initials: 'CC',
    pillar: 'Think',
  },
  {
    name: 'Cristina Cecan',
    role: 'Psiholog Clinician',
    bio: 'Specializată în relația cu mâncarea și imaginea corporală. Identifică blocajele ascunse care fac procesul de slăbire imposibil — de la cogniții iraționale despre propriul corp la emoțiile care conduc alegerile alimentare. Ajută oamenii să schimbe raportul cu propriul corp, nu doar cu cântarul.',
    image: '/images/cristina.jpg',
    initials: 'CC',
    pillar: 'Speak',
  },
]

export function Speakers() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-4">Cine ești pe scenă</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Specialiștii serii
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Nu influenceri. Nu motivatori de weekend. Oameni cu ani de practică reală în spatele fiecărui cuvânt.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.name} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SpeakerCard({ speaker }: { speaker: typeof speakers[0] }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 2
    const y = ((e.clientY - r.top)  / r.height - 0.5) * 2
    el.style.transition = 'transform 0.08s linear, border-color 0.3s ease'
    el.style.transform  = `perspective(900px) rotateY(${x * 9}deg) rotateX(${-y * 9}deg) translateZ(14px)`
  }

  const onLeave = () => {
    const el = cardRef.current
    if (!el) return
    el.style.transition = 'transform 0.55s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.3s ease'
    el.style.transform  = 'perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0px)'
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group border border-white/8 hover:border-gold/25 overflow-hidden"
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
    >
      {/* Photo */}
      <div className="relative aspect-[4/5] bg-[#111] overflow-hidden">
        <SpeakerImage speaker={speaker} />
        {/* Pillar badge */}
        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm border border-gold/30 px-3 py-1 z-10">
          <span className="text-[10px] uppercase tracking-widest text-gold">{speaker.pillar}</span>
        </div>
        {/* Bottom fade — blends photo into card */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0f0f0f] to-transparent z-10 pointer-events-none" />
      </div>

      {/* Info */}
      <div className="p-5 sm:p-6 bg-[#0f0f0f]">
        <h3 className="font-serif text-2xl sm:text-xl text-white mb-1">{speaker.name}</h3>
        <p className="text-gold text-xs uppercase tracking-wide mb-3">{speaker.role}</p>
        <p className="text-gray-300 sm:text-gray-400 text-[15px] sm:text-sm leading-relaxed">{speaker.bio}</p>
      </div>
    </div>
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
      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
      sizes="(max-width: 768px) 100vw, 33vw"
      onError={() => setFailed(true)}
    />
  )
}

function SpeakerAvatar({ initials }: { initials: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#0f0f0f]">
      <div className="w-24 h-24 rounded-full border border-gold/20 flex items-center justify-center">
        <span className="font-serif text-3xl text-gold/40">{initials}</span>
      </div>
    </div>
  )
}
