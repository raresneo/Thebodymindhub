'use client'

import { motion } from 'framer-motion'

export function LocationMap() {
  return (
    <section className="py-20 sm:py-32 px-6 border-t border-white/5 relative bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold/80 mb-4 font-medium">Unde ne vedem</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-white mb-6">Merci Bistro & Coffee</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center glass-panel p-2 sm:p-4 rounded-3xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 border border-white/10"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.1643445831513!2d21.931758!3d47.0565863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474647e33527b137%3A0x6b4c3e7b1a20df94!2sMerci%20Bistro%20%26%20Coffee!5e0!3m2!1sen!2sro!4v1715000000000!5m2!1sen!2sro" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 sm:p-12 flex flex-col justify-center"
          >
            <h3 className="text-3xl font-serif text-white mb-4">În inima Oradiei</h3>
            <p className="text-gray-400 text-base leading-relaxed mb-8 font-light">
              Evenimentul are loc la Merci Bistro & Coffee, un spațiu elegant și intim, perfect pentru o seară de discuții libere și networking de calitate.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0 bg-gold/5">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Adresa</p>
                  <p className="text-white">Strada Aurel Lazăr nr. 1, Oradea</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0 bg-gold/5">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Ora de sosire</p>
                  <p className="text-white">Te așteptăm începând cu ora 18:30</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <a 
                href="https://maps.google.com/?q=Merci+Bistro+Coffee+Strada+Aurel+Lazăr+1+Oradea"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:border-gold hover:text-gold transition-colors duration-300 rounded-sm"
              >
                Deschide în Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
