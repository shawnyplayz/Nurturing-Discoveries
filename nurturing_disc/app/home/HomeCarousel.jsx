"use client";

import Button from "@/components/buttons/Button";
import PlayButton from "@/components/buttons/PlayButton";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HomeSection } from "../constants";
import { TypeAnimation } from "react-type-animation";
import VideoModal from "@/components/modal/VideoModal";
import { useSpring, animated } from "@react-spring/web";

const images = ["/home/image2.jpg", "/home/image3.jpg", "/home/image1.jpg"];

const HomeCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // React Spring animation
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    config: { duration: 1000 }, // Duration for fade in and out
  });

  // Function to change image
  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeImage();
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

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
              <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-fiord mb-2">
                Inspiring
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                <TypeAnimation
                  sequence={[
                    "Young",
                    1000,
                    "Young Minds Kids",
                    1000,
                    "Young Dreamers",
                    1000,
                    "Young Explorers",
                    1000,
                    "",
                    1000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  className="inline-block"
                />
              </div>
            </div>
          </div>
          <p className="mb-8 font-sans font-normal text-base sm:text-lg lg:text-lg xl:text-xl text-fiord">
            {HomeSection.HomeCarousel.subtitle}
          </p>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start">
            <Button>Apply Today</Button>
            <div className="flex flex-row items-center gap-4 font-sans font-bold text-base text-fiord">
              <PlayButton onClick={() => setIsModalOpen(true)} />
              <p>Play Video</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:w-1/2 mt-8 lg:mt-0">
          <animated.div style={props} className="max-w-full h-auto">
            {/* Image */}
            <div className=" w-1/3 h-1/3 bg-blue-500 rounded-full translate-x-1/2 translate-y-1/2"></div>
            {/* <div className="w-1/3 h-1/3 bg-pink-500 rounded-lg -translate-x-1/2"></div> */}
            <Image
            className="-z-[1]"
              src={images[currentImageIndex]}
              style={{
                borderRadius: "38% 62% 35% 65% / 54% 30% 70% 46%",
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
              height={380}
              width={380}
              alt="Home Image"
            />
          </animated.div>
        </div>
      </section>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl="https://www.youtube.com/embed/bnGyifk_33U"
      />
    </div>
  );
};

export default HomeCarousel;
