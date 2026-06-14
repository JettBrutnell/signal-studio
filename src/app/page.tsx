import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import WorkSection from '@/components/work-section'
import WhySection from '@/components/why-section'
import ProcessSection from '@/components/process-section'
import OfferSection from '@/components/offer-section'
import FaqSection from '@/components/faq-section'
import CtaFormSection from '@/components/cta-form-section'
import Footer from '@/components/footer'
import LoadingScreen from '@/components/loading-screen'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WorkSection />
        <WhySection />
        <ProcessSection />
        <OfferSection />
        <FaqSection />
        <CtaFormSection />
      </main>
      <Footer />
    </>
  )
}
