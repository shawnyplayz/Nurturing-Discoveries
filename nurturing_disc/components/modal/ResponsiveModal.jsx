import { CloseOutlined } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

const ResponsiveModal = ({
  isOpen,
  onClose,
  imageSrc,
  location,
  date,
  description,
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    // Close the modal when clicking on the backdrop
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white rounded-lg max-w-3xl w-full mx-4 md:mx-6 overflow-hidden shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <Image
            width={450}
            height={450}
            src={imageSrc}
            alt="Modal Image"
            className="w-full max-h-[600px] object-cover"
          />
          <button
            className="absolute top-4 right-4 text-white bg-black bg-opacity-75 p-2 hover:bg-opacity-100 transition rounded-full"
            onClick={onClose}
          >
            <CloseOutlined />
          </button>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-400 text-sm font-semibold">{location}</p>
            <p className="text-gray-400 text-sm">{date}</p>
          </div>
          <div className="max-h-48 overflow-y-scroll scrollbar-hidden">
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveModal;
