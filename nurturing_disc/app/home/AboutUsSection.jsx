"use client";

import AboutUsInfo from "@/components/AboutUsInfo";
import Button from "@/components/buttons/Button";
import PhoneIcon from "@/components/Icons/PhoneIcon";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { LandingAboutUs } from "../constants";
import endpoints from "@/config/endpoints";
import { fetchDataGet } from "@/utils/fetchData";
import { showToastError, showToastSuccess } from "@/config/toast";
import Link from "next/link";
import { homeAboutUsImageData } from "@/public/data/imageData";

const AboutUsSection = () => {
  const data = [
    { id: 1, title: "Nutritious Meals" },
    { id: 2, title: "Security & Care" },
    { id: 3, title: "Creativity" },
    { id: 4, title: "Play Based Learning" },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-around relative p-4 md:p-8 bg-[#EFF5F6]">
      <div className="container mx-auto md:flex md:flex-row">
        <Image
          src="/cartoons/bus.svg"
          width={100}
          height={100}
          alt="bus"
          className="hidden md:block absolute top-10 left-4 md:top-16 md:left-7"
          data-aos="zoom-in"
        />
        <div className="left py-16 md:py-32 pl-9" data-aos="zoom-in-right">
          <Image
            style={{
              WebkitMaskImage: `url(${homeAboutUsImageData})`,
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "cover",
              WebkitMaskPosition: "center",
            }}
            src="/home/aboutUsAssets/aboutus-image.svg"
            width={600}
            height={400}
            alt="About Us Image"
          />
        </div>
        <div className="right max-w-3xl py-16 md:py-32">
          <Image
            src="/cartoons/girl.svg"
            width={150}
            height={150}
            alt="girl"
            className="hidden md:block absolute top-56 right-4 md:top-80 md:right-7 flex-shrink-0"
            data-aos="fade-left"
          />
          <div className="font-sans font-semibold text-xl text-[#F39F5F] pb-3 text-center md:text-start">
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
              <Link href={"/aboutus"}>
                <Button>Explore More</Button>
              </Link>
            </div>
            <div className="pt-5 md:pt-0 md:pl-7 flex flex-row items-center gap-6 font-quicksand font-semibold text-sm text-fiord text-center md:text-left">
              <PhoneIcon />
              <div>
                <p>{LandingAboutUs.AboutUsSection.contactInfo}</p>
                <p>{LandingAboutUs.AboutUsSection.contactNumber}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
