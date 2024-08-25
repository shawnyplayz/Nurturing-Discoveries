import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#F39F5F] flex flex-row items-center justify-center px-10 py-5 rounded-3xl gap-2 text-white font-bold hover:bg-white hover:text-peach hover:border-2 transition-all ease-in-out hover:border-[#F39F5F] border-[#F39F5F] border-2 "
    >
      {children}
      <FaArrowRightLong />
    </button>
  );
};

export default Button;
