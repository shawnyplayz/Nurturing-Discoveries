import Image from "next/image";
import React from "react";

const ContactInfo = ({ iconSrc, text, subtext }) => {
  return (
    <div className="flex flex-row items-center gap-5">
      <Image src={iconSrc} width={65} height={65} alt="icon" />
      <div>
        <p className="font-sans font-normal text-base text-fiord pb-1">{subtext}</p>
        <p className="font-sans font-bold text-base text-fiord">{text}</p>
      </div>
    </div>
  );
};

export default ContactInfo;
