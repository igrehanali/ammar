import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Servicespage from "../../components/services-page";

import DesignProcess from "../../components/design-process";
import TechnologyGrid from "../../components/technology-grid";
import ConnectedCards from "../../components/connected-cards";
import TestimonialsSection from "../../components/testimonials-section";
import PricingSection from "../../components/pricing-section";

import CTASection from "../../components/cta-section";
import DevelopmentTimeline from "../../components/developmenttimeline";
import PortfolioSectionTwo from "../../components/portfolio-section-two";
import BenefitsSection from "../../components/benefits-section";
import FAQSection from "../../components/faq";
const page = () => {
  return (
    <div className="bg-black overflow-hidden">
      <Navbar />
      <Servicespage />
      <DevelopmentTimeline />
      <DesignProcess />
      <PortfolioSectionTwo text={"Some of Our Cases"} />
      <TechnologyGrid />
      <TestimonialsSection />
      <PricingSection />
      <BenefitsSection />
      <FAQSection />
      {/* <BlogFAQSection /> */}
      <ConnectedCards />
      <CTASection />
      <Footer />
    </div>
  );
};

export default page;
