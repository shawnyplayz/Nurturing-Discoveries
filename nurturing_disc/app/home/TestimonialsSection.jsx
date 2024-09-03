"use client";

import React, { useEffect, useState } from "react";
import TestimonialCard from "@/components/cards/TestimonialCard";
import Image from "next/image";
import endpoints from "@/config/endpoints";
import { showToastError } from "@/config/toast";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from "@mui/material/Skeleton"; // Import Skeleton

const TestimonialsSection = () => {
  const [testimonials, setTestimonial] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const fetchTestimonials = async () => {
    try {
      const url = endpoints.fetchTestimonials;
      const response = await fetch(url);
      if (!response.ok) {
        showToastError("Network response was not ok");
        return;
      }
      const data = await response.json();
      if (data.length > 0) {
        setTestimonial(data);
      }
    } catch (error) {
      showToastError("Error fetching testimonials:", error);
    } finally {
      setLoading(false); // Set loading to false after data is fetched
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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

  const renderSkeletons = () => (
    <div className="grid md:grid-cols-3 gap-8">
      {Array.from({ length: 3 }).map((_, index) => (
        <TestimonialCard
          key={index}
          loading={true} // Pass loading prop
          backgroundColor="#f0f0f0"
          imageVariant={index % 3}
        />
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden flex items-center justify-center text-center relative">
      <div className="hidden md:block absolute top-36 right-1">
        <Image src="/cartoons/bee.svg" width={100} height={100} alt="Bee" />
      </div>
      <div className="w-full px-4">
        <div className="flex items-center justify-center flex-col">
          <div className="font-sans font-semibold md:text-xl text-peach pt-32">
            Testimonials
          </div>
          <div className="font-quicksand font-bold md:text-5xl text-fiord max-w-2xl pt-3 pb-8">
            Parents Words Are The Key To Happy Kids
          </div>
        </div>
        <div
          className={`pt-8 mb-38 ${
            testimonials.length === 2 ? "flex justify-center" : ""
          }`}
        >
          {loading ? (
            renderSkeletons() // Render skeletons while loading
          ) : testimonials.length > 3 ? (
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => {
                const { reviewer_name, review, pictures } = testimonial;
                const imageSrc = pictures[0]?.url;
                return (
                  <div key={testimonial.testimonial_id}>
                    <TestimonialCard
                      text={review}
                      author={reviewer_name}
                      imageSrc={imageSrc}
                      imageVariant={index % 3}
                    />
                  </div>
                );
              })}
            </Slider>
          ) : (
            <div
              className={`grid ${(() => {
                switch (testimonials.length) {
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
              {testimonials.map((testimonial, index) => {
                const { reviewer_name, review, pictures } = testimonial;
                const imageSrc = pictures[0]?.url;
                return (
                  <TestimonialCard
                    key={testimonial.testimonial_id}
                    text={review}
                    author={reviewer_name}
                    imageSrc={imageSrc}
                    imageVariant={index % 3}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
