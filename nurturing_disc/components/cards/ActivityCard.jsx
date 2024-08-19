import Image from "next/image";
import React from "react";

const ActivityCard = ({ title, description, backgroundColor, src }) => {
  return (
    <div className="max-w-80 flex flex-row pb-3">
      <div
        className="flex items-center justify-center p-5 rounded-lg"
        style={{ backgroundColor }}
      >
        <Image
          src={src}
          width={50}
          height={50}
          alt="Photo"
          className="flex items-center"
        />
      </div>
      <div className="flex flex-col pl-5">
        <div className="pb-1 font-quicksand font-bold text-lg">{title}</div>
        <div className="font-sans font-normal text-base text-fiord">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
