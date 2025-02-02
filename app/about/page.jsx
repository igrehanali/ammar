import AboutUsSection from "../../components/about-hero-section";
import BenefitsSection from "../../components/benefits-section";
import CompanySection from "../../components/companylogo";
import Footer from "../../components/footer";
import LocationsSection from "../../components/locations-section";
import Navbar from "../../components/Navbar";
import TeamSection from "../../components/team";
import TestimonialsSection from "../../components/testimonials-section";

import React from "react";
const page = () => {
  return (
    <div className="bg-black overflow-hidden">
      <Navbar />
      <AboutUsSection />
      <CompanySection />
      <BenefitsSection />
      <TeamSection />
      <TestimonialsSection />
      <LocationsSection />
      <Footer />
    </div>
  );
};

export default page;
