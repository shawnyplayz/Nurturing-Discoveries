"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import endpoints from "@/config/endpoints";
import PlayButton from "@/components/buttons/PlayButton";
import VideoPlayButton from "@/components/buttons/VideoPlayButton";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [thumbnails, setThumbnails] = useState({});

  const fetchTestimonials = async () => {
    try {
      const url = endpoints.fetchTestimonials;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch testimonials");

      const data = await response.json();
      setTestimonials(data);

      data.forEach((testimonial) => {
        const media = testimonial.pictures?.[0];
        if (media?.resource_type === "video") {
          generateThumbnail(media.secure_url, testimonial.testimonial_id);
        }
      });
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  const generateThumbnail = (videoUrl, id) => {
    const video = document.createElement("video");
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    video.src = videoUrl;
    video.preload = "metadata";

    video.onloadeddata = () => {
      canvas.width = video.videoWidth / 2; // Adjust size for mobile
      canvas.height = video.videoHeight / 2;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      setThumbnails((prev) => ({
        ...prev,
        [id]: canvas.toDataURL("image/jpeg"),
      }));
    };
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const settings = {
    centerMode: true,
    centerPadding: "80px", // Adjusted for better mobile view
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    beforeChange: (_, next) => setCurrentSlide(next),
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px", // Reduce padding for mobile
        },
      },
    ],
  };

  function CustomNextArrow({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="absolute bottom-[-4rem] right-[50%] translate-x-[60px] p-5 bg-white rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-[#5866EB] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5866EB]"
      >
        <FaChevronRight className="text-[#5866EB] transition-colors duration-300 ease-in-out hover:text-white" />
      </button>
    );
  }

  function CustomPrevArrow({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="absolute bottom-[-4rem] left-[50%] translate-x-[-60px] p-5 bg-white rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-[#5866EB] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5866EB]"
      >
        <FaChevronLeft className="text-[#5866EB] transition-colors duration-300 ease-in-out hover:text-white" />
      </button>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="relative py-10 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 py-12 text-center">
        <h3 className="font-sans font-semibold text-lg text-peach">
          Testimonials
        </h3>
        <h2 className="text-2xl sm:text-4xl font-semibold font-quicksand text-fiord md:text-4xl max-w-2xl mx-auto mb-8">
          Parents' words are the key to happy kids
        </h2>

        {loading ? (
          <p>Loading testimonials...</p>
        ) : (
          <Slider {...settings} className="py-6">
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentSlide;
              const isNearActive =
                index ===
                  (currentSlide - 1 + testimonials.length) %
                    testimonials.length ||
                index === (currentSlide + 1) % testimonials.length;

              const media = testimonial.pictures?.[0];
              const isVideo = media?.resource_type === "video";

              return (
                <div
                  key={testimonial.testimonial_id}
                  className={`px-2 transform transition-all duration-500 ${
                    isActive
                      ? "scale-110 opacity-100 z-20"
                      : isNearActive
                      ? "scale-95 opacity-70 z-10"
                      : "scale-85 opacity-50 z-0"
                  }`}
                >
                  <div
                    className={`w-72 sm:w-96 rounded-lg shadow-lg p-4 mx-auto overflow-hidden ${
                      isActive ? "bg-[#5866EB]" : "bg-[#FFE39F]"
                    }`}
                  >
                    <div className="w-full h-[250px] sm:h-[350px] bg-gray-200 flex items-center justify-center relative cursor-pointer overflow-hidden">
                      {isVideo ? (
                        playingVideoId === testimonial.testimonial_id ? (
                          <video
                            controls
                            className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                            src={media.secure_url}
                            preload="metadata"
                            onPlay={() =>
                              setPlayingVideoId(testimonial.testimonial_id)
                            }
                            onPause={() => setPlayingVideoId(null)}
                          />
                        ) : (
                          <img
                            src={thumbnails[testimonial.testimonial_id]}
                            alt="Video Thumbnail"
                            className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                          />
                        )
                      ) : (
                        <img
                          src={media?.secure_url}
                          alt="Testimonial Media"
                          className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                        />
                      )}
                      <VideoPlayButton
                        className="absolute z-10 p-3 text-white rounded-full"
                        onClick={() =>
                          setPlayingVideoId(
                            playingVideoId === testimonial.testimonial_id
                              ? null
                              : testimonial.testimonial_id
                          )
                        }
                      />
                    </div>
                    <p
                      className={`mt-4 font-semibold text-base ${
                        isActive ? "text-white" : "text-gray-900"
                      }`}
                    >
                      - {testimonial.reviewer_name}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        )}
      </div>
    </section>
  );
}
