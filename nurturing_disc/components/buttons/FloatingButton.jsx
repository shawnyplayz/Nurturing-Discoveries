"use client";

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Example icon, you can use any icon you like

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // Adjust the scroll position at which the button should appear
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-[68px] right-[19px] md:right-[172px] top-10px p-5 bg-peach text-white rounded-full shadow-lg transition-opacity duration-300 z-50 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Scroll to top"
    >
      <FaArrowUp size={15} />
    </button>
  );
};

export default FloatingButton;
