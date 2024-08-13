import AboutUsInfo from "@/components/AboutUsInfo";
import Button from "@/components/buttons/Button";
import PhoneIcon from "@/components/Icons/PhoneIcon";
import Image from "next/image";
import React from "react";
import { LandingAboutUs } from "../constants";

const AboutUsSection = () => {
  const data = [
    { id: 1, title: "Nutritious Meals" },
    { id: 2, title: "Security & Care" },
    { id: 3, title: "Creativity" },
    { id: 4, title: "Play Based Learning" },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-around relative p-4 md:p-8">
      <Image
        src="/cartoons/bus.svg"
        width={100}
        height={100}
        alt="bus"
        className="absolute top-10 left-4 md:top-16 md:left-7"
      />
      <div className="left py-16 md:py-32 pl-9">
        <Image
          src="aboutus-image.svg"
          width={600}
          height={400}
          className="clip-custom-shape"
        />
      </div>
      <div className="right max-w-3xl py-16 md:py-32">
        <Image
          src="/cartoons/girl.svg"
          width={150}
          height={150}
          alt="girl"
          className="absolute top-56 right-4 md:top-80 md:right-7 flex-shrink-0"
        />
        <div className="font-sans font-semibold text-xl text-[#F39F5F] pb-3">
          {LandingAboutUs.AboutUsSection.title}
        </div>
        <div className="font-quicksand font-bold text-3xl md:text-5xl text-fiord pb-7">
          {LandingAboutUs.AboutUsSection.heading}
        </div>
        <div className="font-sans font-normal text-base text-fiord pb-10">
          {LandingAboutUs.AboutUsSection.description}
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.map((item) => (
              <AboutUsInfo key={item.id} title={item.title} />
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center pt-10">
          <div className="flex flex-row items-center gap-6">
            <Button>Explore More</Button>
            <PhoneIcon />
          </div>
          <div className="pt-5 md:pt-0 md:pl-5 font-quicksand font-semibold text-sm text-fiord text-center md:text-left">
            <p>{LandingAboutUs.AboutUsSection.contactInfo}</p>
            <p>{LandingAboutUs.AboutUsSection.contactNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
