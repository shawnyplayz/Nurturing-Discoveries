// components/PhoneIcon.js
import Image from "next/image";
import React from "react";

const PhoneIcon = () => {
  return (
    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#F39F5F] border-2 border-[#F39F5F]">
      <Image src="/icons/phone.svg" width={16} height={16} alt="Phone Icon" />
    </div>
  );
};

export default PhoneIcon;
