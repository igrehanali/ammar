import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";
import TestimonialsSection from "../../components/testimonials-section";
import CTASection from "../../components/cta-section";
import DevelopmentTimeline from "../../components/developmenttimeline";
import Servicespagetwo from "../../components/Servicespagetwo";
import ServicesSectionTwo from "../../components/services-section-two";
import DesignSolution from "../../components/designe-solution";
import CompanySection from "../..//components/companylogo";
import DesignSolutionTwo from "../../components/design-solution-two";
import PortfolioSectionTwo from "../../components/portfolio-section-two";

const page = () => {
  return (
    <div className="bg-black overflow-hidden">
      <Navbar />
      <Servicespagetwo />
      <PortfolioSectionTwo
        text={"Our design solutions that deliver measurable outcomes"}
      />
      <ServicesSectionTwo />
      <DesignSolution />
      <DevelopmentTimeline text workshop />
      <DesignSolutionTwo />
      <CompanySection />
      {/* <ExpertiseSection /> */}
      {/* <TechnologyGrid />
      <ConnectedCards /> */}
      <TestimonialsSection />

      <CTASection />
      <Footer />
    </div>
  );
};

export default page;
