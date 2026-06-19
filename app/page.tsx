import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { EventConcept } from '@/components/EventConcept'
import { CABSection } from '@/components/CABSection'
import { EventDetails } from '@/components/EventDetails'
import { LeadFormSection } from '@/components/LeadFormSection'
import { Footer } from '@/components/Footer'
import { StickyCTA } from '@/components/StickyCTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EventConcept />
        <CABSection />
        <EventDetails />
        <LeadFormSection />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
