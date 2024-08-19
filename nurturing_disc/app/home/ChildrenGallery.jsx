import Gallery from "@/components/Gallery";
import React from "react";
import { ChildrenGalleryData } from "../constants";

const ChildrenGallery = () => {
  return (
    <div className="flex items-center justify-center container mx-auto flex-col">
      <div className="pt-28">
        <h1 className="font-quicksand font-bold text-5xl text-fiord pb-8">
          {ChildrenGalleryData.title}
        </h1>
      </div>
      <div className="pt-16 pb-32 grid md:grid-cols-6 gap-5 px-8">
        {ChildrenGalleryData.gallery.map((galleries) => (
          <Gallery key={galleries.id} imageUrl={galleries.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default ChildrenGallery;
