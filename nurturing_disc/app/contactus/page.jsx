import ContactInfoCard from "@/components/cards/ContactInfoCard";
import Footer from "@/components/Footer";
import ContactForm from "@/components/forms/ContactForm";
import SectionSeparator from "@/components/SectionSeparator";
import React from "react";
import { contactUsPage } from "../constants";

const ContactUs = () => {
  return (
    <div>
      <SectionSeparator title="Contact Us" subHeading="Home > Contact us" />
      <div className="contact-us-info py-16 md:py-24 lg:py-32 flex flex-col lg:flex-row justify-center lg:justify-evenly gap-6">
        <ContactInfoCard />
        <div className="w-full lg:max-w-lg px-4 sm:px-6 lg:px-0">
          <h1 className="font-quicksand font-semibold text-3xl sm:text-4xl pb-4 text-fiord">
            {contactUsPage.title}
          </h1>
          <p className="pb-10 sm:pb-16 font-quicksand font-light">
            {contactUsPage.description}
          </p>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
