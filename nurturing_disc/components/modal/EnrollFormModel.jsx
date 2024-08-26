import React from "react";

const EnrollFormModel = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-80">
        <div className="container mx-auto px-1 py-2">
          <p>Enroll Form</p>
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            &#10005;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default EnrollFormModel;
