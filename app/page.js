import BenefitsSection from "../components/benefits-section";
import BlogFAQSection from "../components/blog-faq-section";
import CaseStudy from "../components/case-study";
import CompanySection from "../components/companylogo";
import CTASection from "../components/cta-section";
import FAQSection from "../components/faq";
import Footer from "../components/footer";
import Hero from "../components/Hero";
import ProfilePage from "../components/hero1";
import { MarqueeDemo } from "../components/MarqueeComponet";
import Navbar from "../components/Navbar";
import PortfolioSection from "../components/portfolio-section";
import PricingSection from "../components/pricing-section";
import ServicesSection from "../components/services-section";
import TestimonialsSection from "../components/testimonials-section";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#000000] overflow-hidden">
      <Navbar />
      <ProfilePage />
      {/* <Hero /> */}
      <CompanySection />
      {/* <MarqueeDemo /> */}
      <ServicesSection />
      <TestimonialsSection />
      <PortfolioSection text={"Project"} text2={"ShowCase"} />

      <PricingSection />
      <BenefitsSection />

      <FAQSection />
      <BlogFAQSection />
      <CTASection />
      <Footer />
      {/* <CaseStudy /> */}
    </div>
  );
};

export default page;
