import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { EventConcept } from '@/components/EventConcept'
import { Speakers } from '@/components/Speakers'
import { SocialProof } from '@/components/SocialProof'
import { CABSection } from '@/components/CABSection'
import { EventDetails } from '@/components/EventDetails'
import { FAQSection } from '@/components/FAQSection'
import { LeadFormSection } from '@/components/LeadFormSection'
import { Footer } from '@/components/Footer'
import { StickyCTA } from '@/components/StickyCTA'
import { SurrealBackground } from '@/components/SurrealBackground'

export default function Home() {
  return (
    <>
      <SurrealBackground />
      <Navbar />
      <main>
        <Hero />
        <EventConcept />
        <Speakers />
        <SocialProof />
        <CABSection />
        <EventDetails />
        <FAQSection />
        <LeadFormSection />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
