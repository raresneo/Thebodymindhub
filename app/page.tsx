import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { EventConcept } from '@/components/EventConcept'
import { Speakers } from '@/components/Speakers'
import { WhyAttend } from '@/components/WhyAttend'
import { Agenda } from '@/components/Agenda'
import { LocationMap } from '@/components/LocationMap'
import { SocialProof } from '@/components/SocialProof'
import { CABSection } from '@/components/CABSection'
import { EventDetails } from '@/components/EventDetails'
import { FAQSection } from '@/components/FAQSection'
import { WhatsAppContact } from '@/components/WhatsAppContact'
import { Footer } from '@/components/Footer'
import { StickyCTA } from '@/components/StickyCTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EventConcept />
        <WhyAttend />
        <Speakers />
        <Agenda />
        <LocationMap />
        <SocialProof />
        <CABSection />
        <EventDetails />
        <FAQSection />
        <WhatsAppContact />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
