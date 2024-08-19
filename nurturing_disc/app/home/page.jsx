import React from "react";
import HomeCarousel from "./HomeCarousel";
import AboutUsSection from "./AboutUsSection";
import ProgramSection from "./ProgramSection";
import ActivitiesSection from "./ActivitiesSection";
import InstructionsSection from "./InstructionsSection";
import TestimonialsSection from "./TestimonialsSection";
import ChildrenGallery from "./ChildrenGallery";
import Footer from "@/components/Footer";
import ReversedWavedSeparator from "@/components/ReversedWaveSeparator";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <AboutUsSection />
      <ProgramSection />
      <ActivitiesSection />
      <InstructionsSection />
      <TestimonialsSection/>
      <ChildrenGallery />
      <Footer />
      <ReversedWavedSeparator/>
    </>
  );
};

export default Home;
