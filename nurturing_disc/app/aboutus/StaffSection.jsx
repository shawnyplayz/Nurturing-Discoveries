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

  const nonFeaturedStaff = staffs.filter((staff) => !staff.staff_featured);

  if (nonFeaturedStaff.length === 0) {
    return null;
  }
  
  const isSliderEnabled = staffs.length > 4;
  if (staffs.length === 0) {
    return null;
  }

  return (
    <div className="staff-section relative md:pb-40">
      <div className="absolute bottom-1 left-5 w-52">
        <Image
          src="/cartoons/love.svg"
          width={200}
          height={200}
          alt="love cartoon"
        />
      </div>
      <div
        className="w-48"
        style={{
          position: "absolute",
          top: "-3.5rem",
          right: "1.75rem",
        }}
      >
        <Image
          src="/cartoons/rainbow.svg"
          width={200}
          height={200}
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
          staffs.filter((staff) => !staff.staff_featured).length <= 4
            ? "flex justify-center"
            : ""
        }`}
      >
        {staffs.filter((staff) => !staff.staff_featured).length > 4 ? (
          // Use slider if there are more than 4 non-featured staff members
          <Slider {...settings}>
            {staffs
              .filter((staff) => !staff.staff_featured)
              .map((staff) => {
                const { staff_name, staff_position, pictures } = staff;
                const latestImage = pictures[pictures.length - 1]?.url;

                return (
                  <div key={staff.staff_id} className="px-4">
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
          // Center the items if there are 4 or fewer non-featured staff members
          <div
            className={`grid justify-center ${
              staffs.filter((staff) => !staff.staff_featured).length === 1
                ? "grid-cols-1"
                : ""
            } ${
              staffs.filter((staff) => !staff.staff_featured).length === 2
                ? "md:grid-cols-2"
                : ""
            } ${
              staffs.filter((staff) => !staff.staff_featured).length === 3
                ? "md:grid-cols-3"
                : ""
            } ${
              staffs.filter((staff) => !staff.staff_featured).length === 4
                ? "md:grid-cols-4"
                : ""
            } gap-8`}
          >
            {staffs
              .filter((staff) => !staff.staff_featured)
              .map((staff) => {
                const { staff_name, staff_position, pictures } = staff;
                const latestImage = pictures[pictures.length - 1]?.url;
                return (
                  <StaffCard
                    key={staff?.staff_id}
                    name={staff?.staff_name}
                    position={staff?.staff_position}
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
