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
  metadataBase: new URL('https://thebodymindhub.com'),
  title: 'Fit fără filtre — Body Mind Hub | Eveniment Oradea',
  description:
    'O seară fără filtre despre cum arată cu adevărat sănătatea — minte, corp, acțiune. 29 iulie 2026, Merci Bistro, Oradea. Dezvoltare personală, psihologie și fitness bazat pe știință. Bilet 99 lei.',
  keywords: 'eveniment oradea, dezvoltare personala oradea, fitness oradea, psihologie oradea, rares pantis, the body mind hub',
  openGraph: {
    title: 'Fit fără filtre — Eveniment The Body Mind Hub Oradea',
    description: 'Vino la o seară fără filtre despre cum arată cu adevărat sănătatea. Minte, corp și acțiune.',
    type: 'website',
    url: 'https://thebodymindhub.com',
    locale: 'ro_RO',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Fit fără filtre' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fit fără filtre — Body Mind Hub',
    description: 'O seară fără filtre despre cum arată cu adevărat sănătatea — minte, corp, acțiune.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-dark-900 text-white font-sans antialiased overflow-x-hidden selection:bg-gold selection:text-black">
        {children}
      </body>
    </html>
  )
}
