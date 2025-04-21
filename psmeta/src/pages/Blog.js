import React from "react";
import PageBanner from "../components/PageBanner";
import BlogGrid from "../components/BlogGrid";
import CTASection from "../components/CTASection";

const Blog = () => {
  return (
    <div>
      <PageBanner title="Our Blog" />
      <BlogGrid />
      <CTASection />
    </div>
  );
};

export default Blog;
