import React from "react";
import { programSectionCardData, programSectionData } from "../constants";
import SectionSeparator from "@/components/SectionSeparator";
import Footer from "@/components/Footer";
import ProgramCard from "@/components/cards/ProgramCard";

const ProgramsandEvents = () => {
  return (
    <section>
      <SectionSeparator
        title="Programs & Events"
        subHeading="Home > Programs & Events"
      />
      <div className="flex flex-col items-center container mx-auto px-4 md:px-6 lg:px-8 relative pt-20 md:pt-28">
        <div className="sm:grid pt-10 md:pt-16 pb-16 md:pb-24 lg:grid-cols-3 md:flex-row gap-8 md:gap-10 lg:gap-12 md:px-4">
          {programSectionCardData.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              description={program.description}
              backgroundColor={program.backgroundColor}
              src={program.src}
            />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ProgramsandEvents;
