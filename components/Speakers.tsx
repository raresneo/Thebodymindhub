'use client'

import Image from 'next/image'
import { useState } from 'react'

const speakers = [
  {
    name: 'Rareș Pantis',
    role: 'Fondator & Specialist Fitness',
    bio: 'Kinetoterapeut, antreprenor și fondatorul NeoBoost. Transformat sute de oameni prin metode bazate pe știință, nu pe trend-uri. Demontează miturile fitness și îți arată cum arată cu adevărat schimbarea corpului.',
    image: '/images/rares.jpg',
    initials: 'RP',
    pillar: 'Act',
  },
  {
    name: 'Claudia',
    role: 'Psiholog Clinician',
    bio: 'Specialist în psihologia corpului și relația dintre emoții și comportamente. Lucrează cu oameni care vor să înțeleagă de ce știu ce trebuie să facă, dar tot nu o fac — și cum se schimbă asta.',
    image: '/images/claudia.jpg',
    initials: 'C',
    pillar: 'Think',
  },
  {
    name: 'Cristina Cecan',
    role: 'Psiholog Sportiv',
    bio: 'Expert în psihologia performanței și motivației. Ajută oamenii să construiască sisteme reale de disciplină, să elimine auto-sabotajul și să comunice autentic cu propriul corp.',
    image: '/images/cristina.jpg',
    initials: 'CC',
    pillar: 'Speak',
  },
]

export function Speakers() {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-4">Cine ești pe scenă</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Specialiștii serii
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Nu influenceri. Nu motivatori de weekend. Oameni cu ani de practică reală în spatele fiecărui cuvânt.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {speakers.map((speaker) => (
            <div key={speaker.name} className="group border border-white/8 hover:border-gold/20 transition-colors">
              {/* Photo */}
              <div className="relative aspect-[4/5] bg-[#111] overflow-hidden">
                <SpeakerImage speaker={speaker} />
                {/* Pillar badge */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm border border-gold/30 px-3 py-1">
                  <span className="text-[10px] uppercase tracking-widest text-gold">{speaker.pillar}</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-serif text-xl text-white mb-1">{speaker.name}</h3>
                <p className="text-gold text-xs uppercase tracking-wide mb-4">{speaker.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{speaker.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
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
      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
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
