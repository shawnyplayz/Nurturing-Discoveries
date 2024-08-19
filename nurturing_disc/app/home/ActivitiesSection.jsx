import ActivityCard from "@/components/cards/ActivityCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { ActivitiesSectionData } from "../constants";

const ActivitiesSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center pt-16 lg:pt-32 overflow-hidden relative px-4 container mx-auto">
      <div className="absolute top-16 lg:top-32 left-6 hidden md:flex">
        <Image
          src="/cartoons/pencil-activity.svg"
          height={150}
          width={150}
          alt="Pencil Activity"
          className="w-24 h-24 lg:w-40 lg:h-40"
        />
      </div>
      <div className="order-2 lg:order-none lg:pr-8">
        <Image
          src="/activities-image.svg"
          height={300}
          width={300}
          alt="Activities"
          className="hidden md:flex clip-path-activities w-3/4"
        />
      </div>
      <div className="max-w-full lg:max-w-2xl mt-8 lg:mt-0 text-center lg:text-left">
        <div>
          <div className="font-sans font-semibold text-lg lg:text-xl text-peach">
            {ActivitiesSectionData.title}
          </div>
          <div className="font-quicksand font-bold text-3xl lg:text-5xl pt-3 text-fiord">
            {ActivitiesSectionData.subHeading}
          </div>
          <div className="pt-4 lg:pt-7 font-sans font-normal text-sm lg:text-base text-fiord">
            {ActivitiesSectionData.description}
          </div>
        </div>
        <div className="pt-6 lg:pt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ActivitiesSectionData.activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              title={activity.title}
              description={activity.description}
              backgroundColor={activity.backgroundColor}
              src={activity.src}
            />
          ))}
        </div>
        <div>
          <Link
            href="/home"
            className="pt-6 lg:pt-10 items-center flex flex-row gap-3 pb-16 lg:pb-32 justify-center lg:justify-start"
          >
            <div className="font-sans text-sm lg:text-base font-bold text-peach">
              Enroll Now
            </div>
            <FaArrowRightLong color="#f39f5f" />
          </Link>
        </div>
        <div className="hidden md:flex absolute bottom-4 right-4 lg:bottom-0 lg:right-0">
          <Image
            src="/cartoons/zebra.svg"
            height={120}
            width={120}
            alt="Zebra"
          />
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSection;
