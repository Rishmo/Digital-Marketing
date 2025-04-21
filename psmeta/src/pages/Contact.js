import React from "react";
import PageBanner from "../components/PageBanner";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import CTASection from "../components/CTASection";

const Contact = () => {
  return (
    <div>
      <PageBanner title="Contact Us" />
      <ContactForm />
      <ContactInfo />
      <CTASection />
    </div>
  );
};

export default Contact;
