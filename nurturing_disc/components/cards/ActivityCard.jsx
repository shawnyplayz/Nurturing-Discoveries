import Image from "next/image";
import React from "react";

const ActivityCard = ({ title, description, backgroundColor, src }) => {
  return (
    <div className="flex flex-col sm:flex-row max-w-full sm:max-w-md pb-3">
      <div
        className="flex items-center justify-center p-4 sm:p-5 rounded-lg"
        style={{ backgroundColor }}
      >
        <div className="relative md:w-12 md:h-12 ">
          <Image src={src} layout="fill" objectFit="cover" alt="Photo" />
        </div>
      </div>
      <div className="flex flex-col justify-center pl-0 sm:pl-5 mt-2 sm:mt-0">
        <div className="pb-1 font-quicksand font-bold text-lg sm:text-xl">
          {title}
        </div>
        <div className="font-sans font-normal text-base text-fiord sm:text-lg px-5 md:px-0">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
