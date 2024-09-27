"use client";
import Gallery from "@/components/Gallery";
import React, { useEffect, useState } from "react";
import { ChildrenGalleryData } from "../constants";
import endpoints from "@/config/endpoints";
import { showToastError } from "@/config/toast";
import Marquee from "react-fast-marquee";

const ChildrenGallery = () => {
  const [gallery, setGallery] = useState([]);

  const fetchGallery = async () => {
    try {
      const url = endpoints.fetchGallery;
      const response = await fetch(url); // Use standard fetch here
      if (!response.ok) {
        showToastError("Network response was not ok");
        return;
      }
      const data = await response.json(); // Convert the response to JSON
      if (data.length > 0) {
        setGallery(data); // Set all blogs
      }
    } catch (error) {
      showToastError("Error fetching blogs:", error);
    }
  };
  useEffect(() => {
    fetchGallery();
  }, []);
  if (gallery.length === 0) {
    return null;
  }
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="pt-28">
        <h1 className="text-center font-quicksand font-bold md:text-5xl text-3xl text-fiord pb-8">
          {ChildrenGalleryData.title}
        </h1>
      </div>
      <Marquee direction="left" autoFill>
        <div className="pt-16 pb-32 flex gap-5 px-2">
          {gallery.map((galleries) => (
            <Gallery
              key={galleries.public_id}
              imageUrl={galleries.secure_url}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default ChildrenGallery;
