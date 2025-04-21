import React from "react";
import PageBanner from "../components/PageBanner";
import ServicesGrid from "../components/ServicesGrid";
import WorkProcess from "../components/WorkProcess";
import Features from "../components/Features";
import CTASection from "../components/CTASection";

const Services = () => {
  return (
    <div>
      <PageBanner title="Our Services" />
      <ServicesGrid />
      <WorkProcess />
      <Features />
      <CTASection />
    </div>
  );
};

export default Services;
