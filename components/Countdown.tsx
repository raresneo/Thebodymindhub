'use client'

import { useEffect, useState } from 'react'

const EVENT_DATE = new Date('2026-07-29T18:00:00')

function getTimeLeft() {
  const diff = EVENT_DATE.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  }
}

export function Countdown() {
  const [time, setTime] = useState(getTimeLeft())

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { value: time.days, label: 'zile' },
    { value: time.hours, label: 'ore' },
    { value: time.minutes, label: 'min' },
    { value: time.seconds, label: 'sec' },
  ]

  return (
    <div className="flex items-center justify-center gap-2">
      {units.map(({ value, label }, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="text-center">
            <div className="w-14 h-14 bg-[#111] border border-gold/20 flex items-center justify-center">
              <span className="font-serif text-2xl text-gold tabular-nums leading-none">
                {String(value).padStart(2, '0')}
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-widest text-gray-600 mt-1.5 block">
              {label}
            </span>
          </div>
          {i < 3 && (
            <span className="text-gold/40 text-xl font-serif mb-4 select-none">:</span>
          )}
        </div>
      ))}
    </div>
  )
}
