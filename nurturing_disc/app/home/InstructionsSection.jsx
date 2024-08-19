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
        className="absolute bottom-2 left-6"
      />
      <Image
        src="/cartoons/rainbow.svg"
        width={240}
        height={240}
        className="absolute bottom-52 right-6"
      />
      <div className="flex flex-col items-center justify-center container mx-auto">
        <div className="pt-28 flex flex-col items-center justify-center">
          <div className="font-sans font-normal text-xl text-peach pb-3">
            {InstructionsSectionData.title}
          </div>
          <div className="font-quicksand font-bold text-5xl overflow-hidden pb-7 text-fiord">
            {InstructionsSectionData.subHeading}
          </div>
        </div>
        <div>
          <div className="justify-center gap-7 py-7 pb-28 grid grid-cols-2">
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
