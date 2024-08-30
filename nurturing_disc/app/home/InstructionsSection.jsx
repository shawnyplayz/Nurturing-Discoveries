"use client";

import TeamCard from "@/components/cards/TeamCard";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { InstructionsSectionData } from "../constants";
import endpoints from "@/config/endpoints";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InstructionsSection = () => {
  const [staffs, setStaff] = useState([]);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const fetchStaffs = async () => {
    try {
      const url = endpoints.fetchStaffs;
      const response = await fetch(url);
      if (!response.ok) {
        console.error("Network response was not ok");
        return;
      }
      const data = await response.json();
      if (data.length > 0) {
        setStaff(data);
      }
    } catch (error) {
      console.error("Error fetching staff:", error);
    }
  };

  useEffect(() => {
    fetchStaffs();
  }, []);

  if (staffs.length === 0) {
    return null;
  }

  return (
    <div className="bg-ivory relative md:py-32">
      <Image
        src="/cartoons/love.svg"
        width={240}
        height={240}
        className="hidden md:block absolute md:bottom-2 md:left-6 left-2 top-4 w-48"
        alt="Heart Cartoon"
        data-aos="fade-right"
      />
      <div className="flex flex-col items-center justify-center container mx-auto">
        <div
          className="pt-28 flex flex-col items-center justify-center"
        >
          <div className="font-sans font-normal text-xl text-peach pb-3 text-center">
            {InstructionsSectionData.title}
          </div>
          <div className="font-quicksand font-bold text-5xl pb-7 text-fiord text-center">
            {InstructionsSectionData.subHeading}
          </div>
        </div>
        <div
          className={`w-full my-5 ${
            staffs.filter((staff) => staff.staff_featured).length <= 4
              ? "flex justify-center"
              : ""
          }`}
        >
          {staffs.filter((staff) => staff.staff_featured).length > 4 ? (
            // Use slider if there are more than 4 featured staff members
            <Slider {...settings}>
              {staffs
                .filter((staff) => staff.staff_featured)
                .map((staff) => {
                  const { staff_name, staff_position, pictures } = staff;
                  const latestImage = pictures[pictures.length - 1]?.url;

                  return (
                    <div key={staff.staff_id} className="px-4">
                      <TeamCard
                        name={staff_name}
                        position={staff_position}
                        imageUrl={latestImage}
                      />
                    </div>
                  );
                })}
            </Slider>
          ) : (
            // Center the items if there are 4 or fewer featured staff members
            <div
              className={`grid gap-8 py-7 pb-28 ${
                staffs.filter((staff) => staff.staff_featured).length === 1
                  ? "grid-cols-1"
                  : ""
              } ${
                staffs.filter((staff) => staff.staff_featured).length === 2
                  ? "md:grid-cols-2"
                  : ""
              } ${
                staffs.filter((staff) => staff.staff_featured).length === 3
                  ? "md:grid-cols-3"
                  : ""
              } ${
                staffs.filter((staff) => staff.staff_featured).length === 4
                  ? "md:grid-cols-4"
                  : ""
              } justify-center`}
            >
              {staffs
                .filter((staff) => staff.staff_featured)
                .map((staff) => {
                  const { staff_name, staff_position, pictures } = staff;
                  const latestImage = pictures[pictures.length - 1]?.url;
                  return (
                    <TeamCard
                      key={staff.staff_id}
                      name={staff_name}
                      position={staff_position}
                      imageUrl={latestImage}
                    />
                  );
                })}
            </div>
          )}
        </div>
      </div>
      <Image
        src="/cartoons/rainbow.svg"
        width={200}
        height={200}
        className="hidden md:block absolute md:bottom-4 md:right-6 bottom-3 right-4 z-10"
        alt="Rainbow Cartoon"
        data-aos="fade-left"
      />
    </div>
  );
};

export default InstructionsSection;
