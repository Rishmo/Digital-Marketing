import React from "react";
import PageBanner from "../components/PageBanner";
import AboutContent from "../components/AboutContent";
import Features from "../components/Features";
import TeamPreview from "../components/TeamPreview";
import CTASection from "../components/CTASection";

const About = () => {
  return (
    <div>
      <PageBanner title="About Us" />
      <AboutContent />
      <Features />
      <TeamPreview />
      <CTASection />
    </div>
  );
};

export default About;
