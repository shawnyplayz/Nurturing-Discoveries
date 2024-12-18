import { useState } from "react";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import Button from "../buttons/Button";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";

export default function EventsCards({
  title,
  description,
  src,
  location,
  date,
  onClick,
  isLoading = false,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedTitle = title?.slice(0, 150);

  return (
    <div
      className={`flex flex-col mt-6 text-gray-700 border-2 bg-clip-border rounded-3xl md:w-96 w-full transition-transform transform hover:scale-105 cursor-pointer ${
        isLoading && "animate-pulse"
      }`}
      onClick={onClick}
    >
      <div className="relative h-56 mx-4 mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-3xl bg-blue-gray-500 shadow-blue-gray-500/40">
        {isLoading ? (
          <Skeleton variant="rectangular" width={500} height={300} />
        ) : (
          <Image
            alt="card-image"
            src={src}
            layout="full"
            width={500}
            height={300}
            className="w-full h-full object-cover"
          />
        )}
        <div className="flex gap-2 justify-center absolute top-8 left-6 bg-peach text-[#fff] text-xs px-3 py-3 rounded-md">
          <FaCalendar />
          {isLoading ? <Skeleton width={60} height={20} /> : date}
        </div>
      </div>
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <div className="flex items-start text-gray-300 mb-3 justify-start pb-2">
          <FaMapMarkerAlt className="mr-2 text-peach" />
          {isLoading ? (
            <Skeleton width={100} height={20} />
          ) : (
            <span className="text-xs">{location}</span>
          )}
        </div>
        <p className="text-lg font-quicksand leading-relaxed text-inherit text-left font-light !text-fiord mb-4">
          {isLoading ? (
            <Skeleton width="100%" height={60} />
          ) : isExpanded ? (
            title
          ) : (
            `${truncatedTitle}...`
          )}
        </p>
        <div className="flex-grow"></div>
        <div className="flex justify-center items-center">
          <span className="text-peach mb-2">
            - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          </span>
        </div>
        <div>
          {isLoading ? (
            <Skeleton width={100} height={36} />
          ) : (
            <Button>Read More</Button>
          )}
        </div>
      </div>
    </div>
  );
}
