import ContactInfoCard from "@/components/cards/ContactInfoCard";
import SectionSeparator from "@/components/SectionSeparator";
import React from "react";

const ContactUs = () => {
  return (
    <div>
      <SectionSeparator title="Contact Us" subHeading="Home > Contact us" />
      <div className="contact-us-info py-32">
        <ContactInfoCard />
      </div>
    </div>
  );
};

export default ContactUs;
