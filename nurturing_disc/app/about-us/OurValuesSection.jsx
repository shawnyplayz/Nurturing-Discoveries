import React from "react";
import { OurValueCardData } from "../constants";
import OurValuesCard from "@/components/cards/OurValuesCard";

const OurValuesSection = () => {
  return (
    <div className="values-section bg-[#EFF5F6]">
      <div className="container mx-auto">
        <div className="pt-32 pb-14 text-center">
          <div className="font-normal text-xl font-sans text-peach pb-1">
            Our Values
          </div>
          <div className="font-semibold font-quicksand text-3xl lg:text-5xl text-fiord">
            Our Approach
          </div>
        </div>
        <div className="pt-5 grid grid-cols-1 px-4 lg:px-6 sm:px-4 lg:grid-cols-4 gap-8 place-items-center pb-20 sm:grid-cols-2">
          {OurValueCardData.map((card) => (
            <OurValuesCard
              key={card.index}
              cardNumber={card.cardNumber}
              backgroundColor={card.backgroundColor}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValuesSection;
