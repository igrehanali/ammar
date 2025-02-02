import CaseStudy from "../../components/case-study";

import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";

import React from "react";
const page = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <CaseStudy />
      <Footer />
    </div>
  );
};

export default page;
