import ArticleCards from "../../components/article-cards";
import BlogListing from "../../components/blog-listing";
import CTASection from "../../components/cta-section";

import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";

import React from "react";
const page = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <ArticleCards />
      <BlogListing />
      <CTASection />
      <Footer />
    </div>
  );
};

export default page;
