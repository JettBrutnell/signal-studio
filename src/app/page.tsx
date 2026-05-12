import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import ProofStrip from '@/components/proof-strip'
import FeaturedOutcomes from '@/components/featured-outcomes'
import PortfolioGrid from '@/components/portfolio-grid'
import CaseStudies from '@/components/case-studies'
import ServicesSection from '@/components/services-section'
import PaidMediaSection from '@/components/paid-media-section'
import ProcessSection from '@/components/process-section'
import TrustSection from '@/components/trust-section'
import FaqSection from '@/components/faq-section'
import CtaFormSection from '@/components/cta-form-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProofStrip />
        <FeaturedOutcomes />
        <PortfolioGrid />
        <CaseStudies />
        <ServicesSection />
        <PaidMediaSection />
        <ProcessSection />
        <TrustSection />
        <FaqSection />
        <CtaFormSection />
      </main>
      <Footer />
    </>
  )
}
