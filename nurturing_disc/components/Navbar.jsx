"use client";

import { navLinks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./buttons/Button";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar"; // Corrected import
import EnrollFormModel from "./modal/EnrollFormModel";
import EnrollForm from "./EnrollForm";

const Navbar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex flex-row justify-between container mx-auto py-5 px-5 relative">
      <div>
        <Link href="/">
          <Image src="/logo.svg" height={70} width={282} alt="Logo" />
        </Link>
      </div>
      {/* Desktop Navigation */}
      <div className="sm:flex items-center hidden">
        <ul className="flex flex-row gap-8 text-base">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-semibold text-fiord link ${
                  pathName === link.href ? "active" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="ml-8">
          <Button onClick={handleOpenModal}>Enroll Now</Button>
        </div>
        <EnrollFormModel isOpen={isModalOpen} onClose={handleCloseModal}>
          <EnrollForm />
        </EnrollFormModel>
      </div>
      {/* Mobile Hamburger Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="sidebar"
          aria-expanded={open}
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;
