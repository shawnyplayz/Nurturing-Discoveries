import Image from "next/image";
import React from "react";

const ActivityCard = ({ title, description, backgroundColor, src }) => {
  return (
    <div className="flex flex-col sm:flex-row max-w-full sm:max-w-md pb-3">
      <div
        className="flex items-center justify-center p-4 sm:p-5 rounded-lg"
        style={{ backgroundColor }}
      >
        <div className="relative w-16 h-16 sm:w-12 sm:h-12">
          <Image src={src} layout="fill" objectFit="cover" alt="Photo" />
        </div>
      </div>
      <div className="flex flex-col justify-center pl-0 sm:pl-5 mt-2 sm:mt-0">
        <div className="pb-1 font-quicksand font-bold text-base sm:text-xl">
          {title}
        </div>
        <div className="font-sans font-normal text-sm sm:text-lg text-fiord px-3 sm:px-0">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
