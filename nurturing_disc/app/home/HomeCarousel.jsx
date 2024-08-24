"use client";

import Button from "@/components/buttons/Button";
import PlayButton from "@/components/buttons/PlayButton";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HomeSection } from "../constants";
import { TypeAnimation } from "react-type-animation";
import VideoModal from "@/components/modal/VideoModal";
import { useSpring, animated } from "@react-spring/web";

const images = ["/home/Hero1.svg", "/home/Hero2.svg", "/home/Hero3.svg"];

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
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#ECF8FF] sm:px-6 lg:px-8">
      <section className="container mx-auto flex flex-col lg:flex-row items-center">
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
              <div></div>
              <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl flex flex-row gap-4">
                <TypeAnimation
                  style={{
                    color: "#f39f5f",
                  }}
                  sequence={["Young", 2000]}
                  wrapper="span"
                  cursor={false}
                  repeat={Infinity}
                  className="inline-block"
                  preRenderFirstString={true} // Ensure pre-rendering
                  render={(text) => getStyledText(text)} // Custom rendering logic
                />
                <TypeAnimation
                  sequence={[
                    "Kids",
                    2000,
                    "Dreamers",
                    2000,
                    "Explorers",
                    2000,
                    "",
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  className="inline-block"
                  preRenderFirstString={true} // Ensure pre-rendering
                  render={(text) => getStyledText(text)} // Custom rendering logic
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
        <div className="flex justify-center lg:w-1/2 pt-4">
          {/* <animated.div style={props} className="max-w-full h-auto py-8"> */}
          <Image
            className="max-w-full"
            // src={images[currentImageIndex]}
            src="/home/Hero2.svg"
            style={{
              objectFit: "cover",
            }}
            height={600}
            width={600}
            alt="Home Image"
          />
          {/* </animated.div> */}
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
