import BenefitsSection from "@/components/benefits-section";
import BlogFAQSection from "@/components/blog-faq-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import { MarqueeDemo } from "@/components/MarqueeComponet";
import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/portfolio-section";
import PricingSection from "@/components/pricing-section";
import ServicesSection from "@/components/services-section";
import TestimonialsSection from "@/components/testimonials-section";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#F0F1EA]">
      <Navbar />
      <Hero />
      <MarqueeDemo />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <PricingSection />
      <BenefitsSection />
      <BlogFAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default page;
