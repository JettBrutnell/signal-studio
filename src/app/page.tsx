import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import ProblemSection from '@/components/problem-section'
import ServicesSection from '@/components/services-section'
import ProcessSection from '@/components/process-section'
import CredibilitySection from '@/components/credibility-section'
import BestFitSection from '@/components/best-fit-section'
import CtaSection from '@/components/cta-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <ProcessSection />
        <CredibilitySection />
        <BestFitSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
