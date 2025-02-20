"use client";

import ActivityCard from "@/components/cards/ActivityCard";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { ActivitiesSectionData } from "../constants";
import EnrollFormModel from "@/components/modal/EnrollFormModel";
import EnrollForm from "@/components/EnrollForm";

const ActivitiesSection = () => {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  return (
    <>
      <div className="relative">
        <div
          className="absolute top-12 z-50 hidden md:flex"
          data-aos="zoom-out"
        >
          <Image
            src="/cartoons/pencil-activity.svg"
            height={300}
            width={300}
            alt="Pencil Activity"
            className="hidden md:flex"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center pt-16 lg:pt-32 overflow-hidden relative px-4 container mx-auto">
        <div className="order-2 lg:order-none lg:pr-8">
          <Image
            src="home/activitiesAssets/activities-image.svg"
            height={300}
            width={300}
            alt="Activities"
            className="clip-path-activities w-3/4"
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
            <button
              onClick={() => setIsEnrollModalOpen(true)}
              className="pt-6 lg:pt-10 items-center flex flex-row gap-3 pb-16 lg:pb-32 justify-center lg:justify-start"
            >
              <div className="font-sans text-sm lg:text-base font-bold text-peach">
                Enroll Now
              </div>
              <FaArrowRightLong color="#f39f5f" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative pb-20">
        <div className="hidden md:flex absolute bottom-0 right-0 lg:bottom-0 lg:right-0 xl:h-[250px]">
          <Image
            src="/cartoons/zebra.svg"
            height={200}
            width={200}
            alt="Zebra"
            className="xl:h-[250px]"
            data-aos="fade-left"
          />
        </div>
      </div>

      {/* Enroll Modal */}
      <EnrollFormModel
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
      >
        <EnrollForm />
      </EnrollFormModel>
    </>
  );
};

export default ActivitiesSection;
