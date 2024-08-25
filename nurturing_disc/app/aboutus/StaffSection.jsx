"use client";

import React, { useEffect, useState } from "react";
import StaffCard from "@/components/cards/StaffCard";
import { showToastError } from "@/config/toast";
import endpoints from "@/config/endpoints";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StaffSection = () => {
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
        showToastError("Network response was not ok");
        return;
      }
      const data = await response.json();
      if (data.length > 0) {
        setStaff(data);
      }
    } catch (error) {
      showToastError("Error fetching staff:", error);
    }
  };

  useEffect(() => {
    fetchStaffs();
  }, []);

  const isSliderEnabled = staffs.length > 4;
  if (staffs.length === 0) {
    return null;
  }
  return (
    <div className="staff-section relative">
      <div className="absolute bottom-4 left-5">
        <Image
          src="/cartoons/love.svg"
          width={250}
          height={250}
          alt="love cartoon"
        />
      </div>
      <div className="absolute top-5 right-7">
        <Image
          src="/cartoons/rainbow.svg"
          width={250}
          height={250}
          alt="rainbow cartoon"
        />
      </div>
      <div className="flex items-center justify-center flex-col mt-16 mb-10">
        <div className="pb-3 font-normal text-xl font-sans text-peach text-center">
          Our Experts
        </div>
        <div className="font-quicksand font-bold text-5xl overflow-hidden pb-7 text-center text-fiord">
          Our Staff
        </div>
      </div>
      <div
        className={`w-full my-5 ${
          staffs.length < 5 ? "flex justify-center items-center" : ""
        }`}
      >
        {isSliderEnabled ? (
          <Slider {...settings}>
            {staffs.map((staff, index) => {
              const { staff_name, staff_position, pictures } = staff;
              const latestImage = pictures[pictures.length - 1]?.url;

              return (
                <div
                  key={staff.staff_id}
                  className={`${staffs.length === 4 ? "px-6" : "px-4"}`}
                >
                  <StaffCard
                    name={staff_name}
                    position={staff_position}
                    imageUrl={latestImage}
                  />
                </div>
              );
            })}
          </Slider>
        ) : (
          <div
            className={`grid ${(() => {
              switch (staffs.length) {
                case 1:
                  return "justify-center";
                case 2:
                  return "md:grid-cols-2 w-fit";
                case 3:
                  return "md:grid-cols-3";
                default:
                  return "md:grid-cols-4";
              }
            })()} gap-8`}
          >
            {staffs.map((staff) => {
              const { staff_name, staff_position, pictures } = staff;
              const latestImage = pictures[pictures.length - 1]?.url;
              return (
                <StaffCard
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
  );
};

export default StaffSection;
