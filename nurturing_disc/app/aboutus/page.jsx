import React from "react";
import WhoWeAreSection from "./WhoWeAreSection";
import OurValuesSection from "./OurValuesSection";
import StaffSection from "./StaffSection";
import SectionSeparator from "@/components/SectionSeparator";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <section>
      <SectionSeparator title="About" subHeading="Home > About" />
      <WhoWeAreSection />
      <OurValuesSection />
      <StaffSection />
      <Footer/>
    </section>
  );
};

export default AboutUs;
