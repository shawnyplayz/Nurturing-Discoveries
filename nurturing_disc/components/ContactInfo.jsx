import React from "react";
import Image from "next/image";

const ContactInfo = ({ iconSrc, text, subtext }) => {
  return (
    <div className="flex items-center">
      <div className="w-16 h-16 flex-shrink-0">
        <Image
          src={iconSrc}
          width={64}
          height={64}
          alt="Contact Icon"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="ml-4">
        <p className="text-gray-500 text-sm">{subtext}</p>
        <p className="text-gray-800 text-base font-medium">{text}</p>
      </div>
    </div>
  );
};

export default ContactInfo;
