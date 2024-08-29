"use client";

import Button from "@/components/buttons/Button";
import PlayButton from "@/components/buttons/PlayButton";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HomeSection } from "../constants";
import { TypeAnimation } from "react-type-animation";
import VideoModal from "@/components/modal/VideoModal";
import { useTransition, animated } from "@react-spring/web";
import {imageData} from "@/public/data/imageData";

const images = ["/home/home1.jpg", "/home/image3.jpg", "/home/image2.jpg"];

const HomeCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // React Spring transition for smooth image fading
  const transitions = useTransition(currentImageIndex, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500 }, // Set the duration to 500ms
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
          <div className="flex flex-col gap-2 mb-4 mt-4">
            <div className="flex gap-3">
              <h2 className="text-peach font-semibold text-xl sm:text-2xl lg:text-lg">
                {HomeSection.HomeCarousel.title}
              </h2>

              <Image src="/star.svg" width={20} height={20} alt="star icon" />
            </div>
          </div>

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
          <div className="relative">
            <Image
              src="/home/heroSectionAssets/heroShape.svg"
              width={500}
              height={500}
              priority
              alt="Blob"
            />
            {transitions((style, index) => (
              <animated.div
                style={{
                  ...style,
                  position: "absolute",
                  top: "0", // Stick to the top of the parent
                  left: "0", // Stick to the left of the parent
                  width: "100%", // Ensure it covers the parent
                  height: "100%", // Ensure it covers the parent
                  WebkitMaskImage: `url(${imageData})`, // Use the imported SVG
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "cover", // Adjust this to fit the mask image
                  WebkitMaskPosition: "center", // Center the mask image
                }}
                key={index}
              >
                <Image
                  src={images[index]}
                  alt="Home"
                  layout="fill"
                  priority
                  objectFit="cover"
                />
              </animated.div>
            ))}
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl="/home/video1.mp4"
      />
    </div>
  );
};

export default HomeCarousel;
