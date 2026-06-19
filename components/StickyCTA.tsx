'use client'

import { useEffect, useState } from 'react'

export function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const form = document.getElementById('inscriere')
      if (!form) {
        setVisible(window.scrollY > 400)
        return
      }
      const formTop = form.getBoundingClientRect().top
      setVisible(window.scrollY > 400 && formTop > 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-[#0D0D0D]/95 backdrop-blur-md border-t border-white/10 px-4 py-3 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-[10px] uppercase tracking-widest text-gray-500">Fit fără filtre · 29 iulie</p>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="font-serif text-gold text-lg leading-none">99 lei</span>
            <span className="text-gray-600 line-through text-xs">150</span>
          </div>
        </div>
        <a
          href="#inscriere"
          className="flex-shrink-0 bg-gold text-black px-5 py-3 text-xs font-semibold uppercase tracking-widest"
        >
          Rezervă acum
        </a>
      </div>
    </div>
  )
}
