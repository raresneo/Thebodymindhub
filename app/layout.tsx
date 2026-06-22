import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fit fără filtre — Body Mind Hub',
  description:
    'O seară fără filtre despre cum arată cu adevărat sănătatea — minte, corp, acțiune. 29 iulie 2026, Merci Bistro, Oradea. Bilet 99 lei.',
  openGraph: {
    title: 'Fit fără filtre — Body Mind Hub',
    description: 'O seară fără filtre despre cum arată cu adevărat sănătatea.',
    type: 'website',
    locale: 'ro_RO',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 800 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#0A0A0A] text-white font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
