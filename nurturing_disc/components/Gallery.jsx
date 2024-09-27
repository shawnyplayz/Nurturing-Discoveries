import Image from "next/image";
import React from "react";

const Gallery = ({ imageUrl }) => {
  return (
    <div className="relative w-[250px] h-[250px]">
      <Image
        src={imageUrl}
        alt="Gallery Image"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default Gallery;
