import React from "react";
import Image from "next/image";

const PlayButton = () => {
  return (
    <button
      className="bg-[#F39F5F] hover:bg-[#d88a50] active:bg-[#d88a50] focus:outline-none focus:ring-2 focus:ring-[#F39F5F] focus:ring-offset-2 flex items-center justify-center rounded-full p-4 md:p-5"
      aria-label="Play"
    >
      <Image src="/play-button.svg" width={24} height={24} alt="Play" />
    </button>
  );
};

export default PlayButton;
