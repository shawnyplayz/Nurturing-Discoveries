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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg max-w-lg w-full mx-4 md:mx-0 overflow-hidden">
        <div className="relative">
          <img
            src={imageSrc}
            alt="Modal Image"
            className="w-full h-48 object-cover"
          />
          <button
            className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-700 font-semibold">{location}</p>
            <p className="text-gray-500">{date}</p>
          </div>
          <div className="max-h-32 overflow-y-auto">
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveModal;
