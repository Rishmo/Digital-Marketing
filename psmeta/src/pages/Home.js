import React from "react";
import HeroSection from "../components/HeroSection";
import Brands from "../components/Brands";
import AboutPreview from "../components/AboutPreview";
import ServicesPreview from "../components/ServicesPreview";
import PortfolioPreview from "../components/PortfolioPreview";
import Testimonials from "../components/Testimonials";
import BlogPreview from "../components/BlogPreview";
import CTASection from "../components/CTASection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Brands />
      <AboutPreview />
      <ServicesPreview />
      <PortfolioPreview />
      <Testimonials />
      <BlogPreview />
      <CTASection />
    </div>
  );
};

export default Home;
