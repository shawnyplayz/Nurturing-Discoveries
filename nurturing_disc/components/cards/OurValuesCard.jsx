import React from "react";
import { MdDescription } from "react-icons/md";

const OurValuesCard = ({ backgroundColor, cardNumber, title, description }) => {
  return (
    <div className="bg-white flex-col flex gap-6 rounded-xl shadow-lg overflow-hidden h-full">
      <div className="number-box pt-5 pl-5">
        <div
          className="py-4 px-6 bg-[#F8B81F] w-16 h-16 flex items-center justify-center rounded-lg"
          style={{ backgroundColor }}
        >
          <h1 className="font-quicksand font-semibold text-3xl text-white">
            {cardNumber}
          </h1>
        </div>
      </div>
      <div className="px-5 pb-5 flex flex-col h-full">
        <div className="pb-2 font-quicksand font-semibold text-xl text-fiord">
          {title}
        </div>
        <div className="font-normal font-quicksandMedium text-base text-left">
          {description}
        </div>
      </div>
    </div>
  );
};

export default OurValuesCard;
