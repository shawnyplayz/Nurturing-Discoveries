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
          <img
            src={imageSrc}
            alt="Modal Image"
            className="w-full h-64 object-cover"
          />
          <button
            className="absolute top-4 right-4 text-white bg-black bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 transition"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-800 font-semibold text-lg">{location}</p>
            <p className="text-gray-600 text-sm">{date}</p>
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
