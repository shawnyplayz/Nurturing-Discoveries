"use client";

import React, { useEffect, useState } from "react";
import TestimonialCard from "@/components/cards/TestimonialCard";
import Image from "next/image";
import endpoints from "@/config/endpoints";
import { showToastError } from "@/config/toast";

const TestimonialsSection = () => {
  const [testimonials, setTestimonial] = useState([]);

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
      showToastError("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const predefinedBackgroundColors = ["#385469", "#70A6B1", "#F39F5F"];
  const predefinedBorderTopColors = ["#385469", "#70A6B1", "#F39F5F"];

  return (
    <div className="overflow-hidden flex items-center justify-center text-center relative">
      <div className="absolute top-36 right-1">
        <Image src="/cartoons/bee.svg" width={100} height={100} alt="Bee" />
      </div>
      <div>
        <div className="flex items-center justify-center flex-col">
          <div className="font-sans font-semibold text-xl text-peach pt-32">
            Testimonials
          </div>
          <div className="font-quicksand font-bold text-5xl text-fiord max-w-2xl pt-3 pb-8">
            Parents Words Are The Key To Happy Kids
          </div>
        </div>
        <div className="grid md:grid-cols-3 pt-8 pb-48 gap-8">
          {testimonials.map((testimonial, index) => {
            const { reviewer_name, review, pictures } = testimonial;

            // Extract the first image URL from the pictures array
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
      </div>
    </div>
  );
};

export default TestimonialsSection;
