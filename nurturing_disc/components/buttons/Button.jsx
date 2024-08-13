import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({ children }) => {
  return (
    <button className="bg-[#F39F5F] flex flex-row items-center justify-center px-10 py-5 rounded-3xl gap-2 text-white font-bold">
      {children}
      <FaArrowRightLong />
    </button>
  );
};

export default Button;
