import Image from "next/image";
import React from "react";
import { aboutUsPage } from "../constants";

const WhoWeAreSection = () => {
  return (
    <div className="who-are-we-section lg:flex lg:flex-row lg:justify-center lg:items-center lg:py-28 pb-24">
      <div className="flex items-center justify-center pt-16 pb-8 px-16 lg:px-6 lg:w-fit">
        <Image
          src="/about/aboutImage.webp"
          width={500}
          height={500}
          alt="About Us Image"
        />
      </div>
      <div>
        <div className="lg:flex lg:flex-col lg:py-36 lg:max-w-2xl px-8">
          <div className="font-sans font-normal text-base sm:text-sm text-center lg:text-start text-peach lg:text-xl">
            {aboutUsPage.title}
          </div>
          <div className="font-quicksand font-bold text-4xl sm:text-3xl text-center lg:text-start text-fiord py-3 lg:text-5xl">
            {aboutUsPage.subHeading}
          </div>
          <div className="font-sans font-normal text-sm sm:text-base lg:text-start text-start lg:text-base text-[#5C707E] sm:text-center">
            {aboutUsPage.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
