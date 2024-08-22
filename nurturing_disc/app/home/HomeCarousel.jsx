"use client";

import Button from "@/components/buttons/Button";
import PlayButton from "@/components/buttons/PlayButton";
import Image from "next/image";
import React, { useState } from "react";
import { HomeSection } from "../constants";
import { TypeAnimation } from "react-type-animation";
import VideoModal from "@/components/modal/VideoModal";

const HomeCarousel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#ECF8FF] py-36 px-4 sm:px-6 lg:px-8">
      <section className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="text-center lg:text-left lg:w-1/2 lg:pl-8">
          <header className="flex flex-row items-center lg:items-center gap-2 mb-4">
            <h2 className="text-peach font-semibold text-xl sm:text-2xl lg:text-lg">
              {HomeSection.HomeCarousel.title}
            </h2>
            <Image src="/star.svg" width={20} height={20} alt="star icon" />
          </header>
          <div className="mb-5">
            <div className="font-quicksand font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-fiord">
              <TypeAnimation
                sequence={["Inspiring", 1000]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                className="inline-block"
              />
              <div>
                <span className="text-peach">Young </span>
                Minds Kids
              </div>
            </div>
          </div>
          <p className="mb-8 font-sans font-normal text-base sm:text-lg lg:text-lg xl:text-xl text-fiord">
            {HomeSection.HomeCarousel.subtitle}
          </p>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start">
            <Button>Apply Today</Button>
            <div className="flex flex-row items-center gap-4 font-sans font-bold text-base text-fiord">
              <PlayButton onClick={handlePlayButtonClick} />
              <p>Play Video</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:w-1/2 mt-8 lg:mt-0">
          <Image
            src="/home-image.svg"
            height={500}
            width={500}
            alt="Home Image"
            className="max-w-full h-auto"
          />
        </div>
      </section>

      <VideoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoUrl="https://www.youtube.com/embed/bnGyifk_33U"
      />
    </div>
  );
};

export default HomeCarousel;
