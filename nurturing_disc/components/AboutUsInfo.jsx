import Image from "next/image";
import React from "react";

const AboutUsInfo = ({ title }) => {
  return (
    <div className="flex items-center gap-2 max-w-72 pr-7 pb-8">
      <Image height={25} width={25} src="/icons/check-mark.svg" alt="Check Mark" />
      <h1 className="font-quicksand font-semibold text-xl text-fiord">
        {title}
      </h1>
    </div>
  );
};

export default AboutUsInfo;
