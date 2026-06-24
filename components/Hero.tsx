'use client'

import { useEffect, useRef, useState } from 'react'
import { LeafIcon } from './LeafIcon'
import { Countdown } from './Countdown'

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
    <div className={`inline-flex items-center gap-2 border px-4 py-2 ${urgent ? 'border-red-500/30 bg-red-500/5' : 'border-gold/20 bg-gold/8'}`}>
      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${urgent ? 'bg-red-400' : 'bg-gold'}`} />
      <span className={`text-[11px] uppercase tracking-[0.2em] ${urgent ? 'text-red-400' : 'text-gold/80'}`}>
        {seats <= 4 ? `Ultimele ${seats} locuri disponibile` : `${seats} locuri disponibile`}
      </span>
    </div>
  )
}

const FLOATING_LEAVES = [
  { x: '6%',  y: '12%', w: 'w-5  h-7',  opacity: 0.07, rY:  50, rX: -20, rZ:  15, dur: 9,  del: 0   },
  { x: '90%', y: '18%', w: 'w-4  h-5',  opacity: 0.05, rY: -35, rX:  18, rZ: -12, dur: 11, del: 1.5 },
  { x: '4%',  y: '68%', w: 'w-7  h-10', opacity: 0.06, rY:  65, rX:   8, rZ:   5, dur: 8,  del: 3   },
  { x: '93%', y: '62%', w: 'w-5  h-7',  opacity: 0.05, rY: -55, rX: -22, rZ:  22, dur: 12, del: 2.5 },
  { x: '48%', y: '4%',  w: 'w-3  h-4',  opacity: 0.04, rY:  20, rX:  45, rZ:  -8, dur: 14, del: 4   },
  { x: '78%', y: '82%', w: 'w-6  h-9',  opacity: 0.05, rY: -42, rX: -14, rZ:  28, dur: 10, del: 0.8 },
  { x: '18%', y: '88%', w: 'w-4  h-6',  opacity: 0.04, rY:  30, rX:  10, rZ: -18, dur: 13, del: 5   },
]

const GRID_X = [0, 160, 320, 480, 640, 800, 960, 1120, 1280, 1440]
const GRID_Y = [500, 600, 690, 770, 835, 885, 920]

export function Hero() {
  const deepRef    = useRef<HTMLDivElement>(null)
  const midRef     = useRef<HTMLDivElement>(null)
  const shallowRef = useRef<HTMLDivElement>(null)
  const rafRef     = useRef<number>(0)
  const mouse      = useRef({ x: 0, y: 0 })
  const cur        = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth  - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      }
    }
    window.addEventListener('mousemove', onMove)

    const tick = () => {
      const f = 0.055
      cur.current.x += (mouse.current.x - cur.current.x) * f
      cur.current.y += (mouse.current.y - cur.current.y) * f
      const { x, y } = cur.current

      if (deepRef.current)
        deepRef.current.style.transform = `translate(${x * -38}px, ${y * -26}px)`
      if (midRef.current)
        midRef.current.style.transform = `translate(${x * -18}px, ${y * -12}px)`
      if (shallowRef.current)
        shallowRef.current.style.transform = `translate(${x * -7}px, ${y * -5}px)`

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden px-6 py-20">

      {/* ── Layer 0: Surrealist perspective grid ── */}
      <div className="absolute inset-0 pointer-events-none select-none" style={{ animation: 'grid-fade-in 2s ease forwards' }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 960" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="lineFade" x1="720" y1="420" x2="720" y2="960" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(200,168,75,0)" />
              <stop offset="100%" stopColor="rgba(200,168,75,0.045)" />
            </linearGradient>
          </defs>
          {/* Radial lines converging to vanishing point */}
          <g stroke="url(#lineFade)" strokeWidth="0.6">
            {GRID_X.map(x => (
              <line key={x} x1={x} y1="960" x2="720" y2="420" />
            ))}
          </g>
          {/* Horizontal floor lines */}
          <g stroke="rgba(200,168,75,0.025)" strokeWidth="0.5">
            {GRID_Y.map(y => (
              <line key={y} x1="0" y1={y} x2="1440" y2={y} />
            ))}
          </g>
        </svg>
      </div>

      {/* ── Layer 1: Large leaf watermark (deepest, moves most) ── */}
      <div
        ref={deepRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ willChange: 'transform' }}
      >
        <div style={{ transform: 'perspective(900px) rotateY(12deg) rotateX(6deg)', opacity: 0.022, filter: 'blur(1px)' }}>
          <LeafIcon className="w-[540px] h-[760px] text-gold" />
        </div>
      </div>

      {/* ── Layer 2: Floating 3D leaves (mid depth, desktop only) ── */}
      <div
        ref={midRef}
        className="hidden md:block absolute inset-0 pointer-events-none select-none"
        style={{ willChange: 'transform' }}
      >
        {FLOATING_LEAVES.map((leaf, i) => (
          <div
            key={i}
            className={`absolute ${leaf.w} text-gold`}
            style={{
              left: leaf.x,
              top: leaf.y,
              opacity: leaf.opacity,
              transform: `perspective(500px) rotateY(${leaf.rY}deg) rotateX(${leaf.rX}deg) rotateZ(${leaf.rZ}deg)`,
              animation: `float-xy ${leaf.dur}s ease-in-out infinite`,
              animationDelay: `${leaf.del}s`,
            }}
          >
            <LeafIcon className="w-full h-full" />
          </div>
        ))}
      </div>

      {/* ── Layer 3: Corner brackets (shallowest depth) ── */}
      <div
        ref={shallowRef}
        className="absolute inset-0 pointer-events-none"
        style={{ willChange: 'transform' }}
      >
        <div className="absolute top-7 left-7 w-10 h-10 border-l border-t border-gold/12" />
        <div className="absolute top-7 right-7 w-10 h-10 border-r border-t border-gold/12" />
        <div className="absolute bottom-10 left-7 w-10 h-10 border-l border-b border-gold/12" />
        <div className="absolute bottom-10 right-7 w-10 h-10 border-r border-b border-gold/12" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Brand mark */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <LeafIcon className="w-3.5 h-5 text-gold/70" />
          <span className="text-xs uppercase tracking-[0.35em] text-gold/70 font-medium">Body Mind Hub</span>
          <LeafIcon className="w-3.5 h-5 text-gold/70 scale-x-[-1]" />
        </div>

        {/* Tagline */}
        <p className="text-sm italic text-gray-600 mb-8 tracking-wide">move, grow, connect</p>

        {/* Gold divider */}
        <div className="flex items-center gap-4 mb-10 max-w-[200px] mx-auto">
          <div className="flex-1 h-px bg-gold/30" />
          <div className="w-1 h-1 bg-gold/50 rotate-45" />
          <div className="flex-1 h-px bg-gold/30" />
        </div>

        {/* Event title */}
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] text-white mb-6 leading-[0.9] tracking-tight">
          Fit fără filtre
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg max-w-lg mx-auto mb-12 leading-relaxed">
          O seară fără filtre despre cum arată cu adevărat sănătatea —
          minte, corp și acțiune.
        </p>

        {/* Seats counter */}
        <div className="mb-8">
          <SeatsCounterBadge />
        </div>

        {/* Price */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-gray-600 line-through text-lg">150 lei</span>
          <div className="flex items-center gap-3">
            <span className="font-serif text-4xl text-gold">99 lei</span>
            <span className="bg-gold/10 text-gold text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 border border-gold/25">
              Preț redus
            </span>
          </div>
        </div>

        {/* Countdown */}
        <div className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gray-600 mb-4">Timp rămas până la eveniment</p>
          <Countdown />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <a
            href="https://buy.stripe.com/fZu9AV3WAaTgfd4bfYbII0h"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gold text-black px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-gold-light transition-colors"
          >
            Rezervă acum
          </a>
          <a
            href="/api/whatsapp"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white/10 text-white px-8 py-4 text-sm font-medium hover:border-white/20 hover:bg-white/5 transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            Înscrie-te pe WhatsApp
          </a>
        </div>

        {/* Event info */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 text-gold/50" />
            <span>29 iulie 2026</span>
          </div>
          <div className="w-px h-4 bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2">
            <LocationIcon className="w-4 h-4 text-gold/50" />
            <span>Merci Bistro, Oradea</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
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
