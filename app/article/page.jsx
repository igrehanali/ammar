import { Article } from "../../components/article";
import BlogPostHeader from "../../components/blog-post-header";
import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";

import React from "react";
const page = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <BlogPostHeader />
      <Article />
      <Footer />
    </div>
  );
};

export default page;
