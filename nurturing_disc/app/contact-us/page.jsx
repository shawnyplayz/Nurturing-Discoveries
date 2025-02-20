import React from "react";
import ContactInfoCard from "@/components/cards/ContactInfoCard";
import Footer from "@/components/Footer";
import ContactForm from "@/components/forms/ContactForm";
import SectionSeparator from "@/components/SectionSeparator";
import { contactUsPage } from "../constants";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: {
    absolute: "Contact Us",
  },
};

const ContactUs = () => {
  return (
    <div>
      <ToastContainer
        position="top-center"
        theme="light"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <SectionSeparator title="Contact Us" subHeading="Home > Contact us" />
      <div className="contact-us-info py-12 md:py-20 lg:py-28 flex flex-col lg:flex-row justify-center lg:justify-evenly gap-10 lg:gap-16 px-4 sm:px-8">
        <div className="w-full lg:w-auto" data-aos="fade-right">
          <ContactInfoCard />
        </div>
        <div
          className="w-full lg:max-w-lg px-4 sm:px-6 lg:px-0"
          data-aos="fade-left"
        >
          <h1 className="font-quicksand font-semibold text-3xl sm:text-4xl pb-4 text-fiord">
            {contactUsPage.title}
          </h1>
          <p className="pb-6 sm:pb-8 font-quicksand font-light text-fiord">
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
