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
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(4, staffs.length),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, staffs.length),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(1, staffs.length),
          slidesToScroll: 1,
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
      <div className="flex items-center justify-center flex-col pt-16 pb-10">
        <div className="pb-3 font-normal text-xl font-sans text-peach text-center">
          Our Experts
        </div>
        <div className="font-quicksand font-bold text-5xl overflow-hidden pb-7 text-center text-fiord">
          Our Staff
        </div>
      </div>
      <div className="flex items-center justify-center pb-5">
        <div className="w-full px-4">
          {" "}
          <Slider {...settings}>
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
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default StaffSection;
