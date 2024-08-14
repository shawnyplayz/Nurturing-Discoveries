import Button from "@/components/buttons/Button";
import ProgramCard from "@/components/cards/ProgramCard";
import React from "react";
import { programSectionCardData, programSectionData } from "../constants";
import Image from "next/image";

const ProgramSection = () => {
  return (
    <div className="flex flex-col items-center container mx-auto px-4 md:px-6 lg:px-8 relative">
      <div className="hidden md:flex">
        <Image
          src="/cartoons/mask.svg"
          width={100}
          height={72}
          className="absolute top-20 left-5"
        />
        <Image
          src="/cartoons/pencil-5.svg"
          width={90}
          height={90}
          className="absolute bottom-12 left-24"
        />
        <Image
          src="/cartoons/compass.svg"
          width={100}
          height={100}
          className="absolute bottom-12 right-28"
        />
        <Image
          src="/cartoons/mask-2.svg"
          width={150}
          height={150}
          className="absolute top-10 right-12"
        />
      </div>
      <div className="pt-20 md:pt-28 font-sans font-semibold text-xl text-peach text-center">
        {programSectionData.title}
      </div>
      <div className="font-quicksand text-fiord font-bold text-4xl md:text-5xl max-w-2xl text-center pt-6 md:pt-10">
        {programSectionData.subHeading}
      </div>
      {/* //Card Section */}
      <div className="pt-10 md:pt-16 pb-16 md:pb-24 flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-12 md:px-4">
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
      <div className="py-8 md:py-12">
        <Button>View All Programs</Button>
      </div>
    </div>
  );
};

export default ProgramSection;
