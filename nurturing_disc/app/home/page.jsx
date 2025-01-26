import React from "react";
import HomeCarousel from "./HomeCarousel";
import AboutUsSection from "./AboutUsSection";
import ProgramSection from "./ProgramSection";
import ActivitiesSection from "./ActivitiesSection";
import InstructionsSection from "./InstructionsSection";
import TestimonialsSection from "./TestimonialsSection";
import ChildrenGallery from "./ChildrenGallery";
import Footer from "@/components/Footer";
import RoadMapSection from "./RoadMapSection";
import Testimonials2 from "./Testimonials2";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <ChildrenGallery />
      <AboutUsSection />
      {/* <TestimonialsSection /> */}
      <ProgramSection />
      <RoadMapSection />
      <Testimonials2 />
      <ActivitiesSection />

      {/*activies and about us issue */}

      <InstructionsSection />
      <Footer />
    </>
  );
};

export default Home;
