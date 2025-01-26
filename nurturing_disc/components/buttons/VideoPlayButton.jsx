import React from "react";
import Image from "next/image";
function VideoPlayButton({ onClick, className }) {
  return (
    <button className={className} aria-label="Play" onClick={onClick}>
      <Image src="/icons/play-button.svg" width={24} height={24} alt="Play" />
    </button>
  );
}

export default VideoPlayButton;
