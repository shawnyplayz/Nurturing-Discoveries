import TeamCard from "@/components/cards/TeamCard";
import Image from "next/image";
import React from "react";
import { InstructionsSectionData } from "../constants";

const InstructionsSection = () => {
  return (
    <div className="bg-ivory relative">
      <Image
        src="/cartoons/love.svg"
        width={270}
        height={270}
        className="absolute md:bottom-2 md:left-6 left-2 top-4 w-32 md:w-fit"
        alt="Heart Cartoon"
      />
      <Image
        src="/cartoons/rainbow.svg"
        width={240}
        height={240}
        className="absolute md:bottom-52 md:right-6 bottom-3 right-4 z-10 w-32 md:w-fit"
        alt="Rainbow Cartoon"
      />
      <div className="flex flex-col items-center justify-center container mx-auto">
        <div className="pt-28 flex flex-col items-center justify-center">
          <div className="font-sans font-normal text-xl text-peach pb-3 text-center">
            {InstructionsSectionData.title}
          </div>
          <div className="font-quicksand font-bold text-5xl overflow-hidden pb-7 text-fiord text-center">
            {InstructionsSectionData.subHeading}
          </div>
        </div>
        <div>
          <div className="justify-center gap-7 py-7 pb-28 grid lg:grid-cols-2">
            {InstructionsSectionData.teamMembers.map((team) => (
              <TeamCard
                key={team.id}
                name={team.name}
                position={team.position}
                imageUrl={team.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionsSection;
