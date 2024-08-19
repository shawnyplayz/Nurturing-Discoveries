import Image from "next/image";
import React from "react";

const Gallery = ({ imageUrl }) => {
  return (
    <div>
      <Image src={imageUrl} width={250} height={250} />
    </div>
  );
};

export default Gallery;
