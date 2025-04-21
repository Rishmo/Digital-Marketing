import React from "react";
import PageBanner from "../components/PageBanner";
import PortfolioGallery from "../components/PortfolioGallery";
import CTASection from "../components/CTASection";

const Portfolio = () => {
  return (
    <div>
      <PageBanner title="Our Portfolio" />
      <PortfolioGallery />
      <CTASection />
    </div>
  );
};

export default Portfolio;
