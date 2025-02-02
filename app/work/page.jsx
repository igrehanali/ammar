import CTASection from "../../components/cta-section";
import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";
import PortfolioGrid from "../../components/portfolio-grid";
import React from "react";

const page = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <PortfolioGrid />
      <CTASection />
      <Footer />
    </div>
  );
};

export default page;
