import React from "react";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { testimonialsData } from "../constants";
import Image from "next/image";

const TestimonialsSection = () => {
  return (
    <div className="overflow-hidden flex items-center justify-center text-center relative">
      <div className="absolute top-36 right-1">
        <Image src="/cartoons/bee.svg" width={100} height={100} />
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
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              text={testimonial.text}
              author={testimonial.author}
              imageSrc={testimonial.imageSrc}
              backgroundColor={testimonial.backgroundColor}
              borderTopColor={testimonial.borderTopColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
