'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { LeafIcon } from './LeafIcon'
import { Countdown } from './Countdown'
import dynamic from 'next/dynamic'

// Lazy load the 3D element so it doesn't block the main thread and degrade Lighthouse score
const Hero3DElement = dynamic(() => import('./Hero3DElement').then(mod => mod.Hero3DElement), {
  ssr: false,
})

function computeSeats(): number {
  const now = Date.now()
  if (now <= new Date('2026-06-30T23:59:59').getTime()) return 30
  if (now <= new Date('2026-07-07T23:59:59').getTime()) return 20
  if (now <= new Date('2026-07-14T23:59:59').getTime()) return 14
  if (now <= new Date('2026-07-21T23:59:59').getTime()) return 10
  if (now <= new Date('2026-07-26T23:59:59').getTime()) return 7
  const start = new Date('2026-07-27T00:00:00').getTime()
  const end = new Date('2026-07-29T19:00:00').getTime()
  const progress = Math.min((now - start) / (end - start), 1)
  return Math.max(4, Math.round(7 - 3 * progress))
}

function SeatsCounterBadge() {
  const [seats, setSeats] = useState(computeSeats)
  useEffect(() => {
    const id = setInterval(() => setSeats(computeSeats()), 3_600_000)
    return () => clearInterval(id)
  }, [])
  const urgent = seats <= 7
  return (
    <div className={`inline-flex items-center gap-2 border px-4 py-2 glass-panel ${urgent ? 'border-red-500/30' : 'border-gold/20'}`}>
      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${urgent ? 'bg-red-400' : 'bg-gold'}`} />
      <span className={`text-[11px] uppercase tracking-[0.2em] ${urgent ? 'text-red-400' : 'text-gold/90'}`}>
        {seats <= 4 ? `Ultimele ${seats} locuri disponibile` : `${seats} locuri disponibile`}
      </span>
    </div>
  )
}

const GRID_X = [0, 160, 320, 480, 640, 800, 960, 1120, 1280, 1440]
const GRID_Y = [500, 600, 690, 770, 835, 885, 920]

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden px-6 py-20">

      {/* ── Layer 0: Surrealist perspective grid ── */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-40 mix-blend-screen" style={{ animation: 'grid-fade-in 3s ease forwards' }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 960" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="lineFade" x1="720" y1="420" x2="720" y2="960" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(212, 175, 55, 0)" />
              <stop offset="100%" stopColor="rgba(212, 175, 55, 0.08)" />
            </linearGradient>
          </defs>
          <g stroke="url(#lineFade)" strokeWidth="0.8">
            {GRID_X.map(x => (
              <line key={x} x1={x} y1="960" x2="720" y2="420" />
            ))}
          </g>
          <g stroke="rgba(212, 175, 55, 0.04)" strokeWidth="0.8">
            {GRID_Y.map(y => (
              <line key={y} x1="0" y1={y} x2="1440" y2={y} />
            ))}
          </g>
        </svg>
      </div>

      {/* ── Layer 1: 3D Abstract Object ── */}
      <div className="absolute inset-0 z-0">
        <Hero3DElement />
      </div>

      {/* ── Layer 1.5: Legibility Overlay ── */}
      <div className="absolute inset-0 z-[5] bg-black/40 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.3)_0%,_rgba(0,0,0,0.8)_100%)] pointer-events-none" />

      {/* ── Layer 3: Corner brackets ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-7 left-7 w-10 h-10 border-l border-t border-gold/20" />
        <div className="absolute top-7 right-7 w-10 h-10 border-r border-t border-gold/20" />
        <div className="absolute bottom-10 left-7 w-10 h-10 border-l border-b border-gold/20" />
        <div className="absolute bottom-10 right-7 w-10 h-10 border-r border-b border-gold/20" />
      </div>

      {/* ── Content ── */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center max-w-4xl mx-auto glass-panel p-10 sm:p-14 rounded-3xl border-white/10 bg-black/60 shadow-[0_0_120px_rgba(0,0,0,0.9)] backdrop-blur-md"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <LeafIcon className="w-3.5 h-5 text-gold/70 drop-shadow-md" />
          <span className="text-xs uppercase tracking-[0.35em] text-gold/90 font-medium drop-shadow-md">Body Mind Hub</span>
          <LeafIcon className="w-3.5 h-5 text-gold/70 scale-x-[-1] drop-shadow-md" />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm italic text-gray-300 mb-8 tracking-wide drop-shadow-lg font-medium"
        >
          move, grow, connect
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '100%' }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex items-center gap-4 mb-10 max-w-[200px] mx-auto overflow-hidden"
        >
          <div className="flex-1 h-px bg-gold/40" />
          <div className="w-1 h-1 bg-gold shadow-gold-glow rotate-45" />
          <div className="flex-1 h-px bg-gold/40" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.1] tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,1)] font-medium"
        >
          Fit fără filtre
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-white text-lg sm:text-xl max-w-lg mx-auto mb-12 leading-relaxed font-medium drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
        >
          O seară fără filtre despre cum arată cu adevărat sănătatea —
          minte, corp și acțiune.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-8"
        >
          <SeatsCounterBadge />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="text-gray-500 line-through text-lg">150 lei</span>
          <div className="flex items-center gap-3 glass-panel-gold px-5 py-2 rounded-xl">
            <span className="font-serif text-4xl text-gold drop-shadow-lg">99 lei</span>
            <span className="bg-gold/15 text-gold text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-sm border border-gold/30">
              Preț redus
            </span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mb-10"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 mb-4">Timp rămas până la eveniment</p>
          <Countdown />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a
            href="https://buy.stripe.com/fZu9AV3WAaTgfd4bfYbII0h"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto relative group overflow-hidden bg-gold text-dark-900 px-10 py-4 text-sm font-semibold uppercase tracking-widest transition-all hover:scale-105 hover:shadow-gold-glow-strong rounded-sm"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative">Rezervă acum</span>
          </a>
          <a
            href="/api/whatsapp"
            className="w-full sm:w-auto flex items-center justify-center gap-3 glass-panel text-white px-8 py-4 text-sm font-medium hover:bg-white/10 transition-all hover:scale-105 rounded-sm"
          >
            <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
            Înscrie-te pe WhatsApp
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 font-light"
        >
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 text-gold/60" />
            <span>29 iulie 2026</span>
          </div>
          <div className="w-px h-4 bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2">
            <LocationIcon className="w-4 h-4 text-gold/60" />
            <span>Merci Bistro, Oradea</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent pointer-events-none z-20" />
    </section>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
