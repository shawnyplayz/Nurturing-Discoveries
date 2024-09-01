"use client";

import Link from "next/link";

import Button from "./buttons/Button";
import EnrollFormModel from "./modal/EnrollFormModel";
import EnrollForm from "./EnrollForm";
import { useEffect, useState } from "react";

function Sidebar({ open, setOpen }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [isModalOpen]);
  const handleOpenModal = () => {
    setIsModalOpen(true);
    setOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div
        className={`fixed top-0 right-0 w-64 bg-gray-50 h-full border-l border-gray-200 shadow-lg transform z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="p-4">
          <button
            onClick={() => setOpen(false)}
            className="inline-flex items-center p-2 text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={open}
          >
            <span className="sr-only">Close menu</span>
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="mt-4 space-y-4">
            <li>
              <Link
                href="/home"
                className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/programs_events"
                className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Programs & Events
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </Link>
            </li>

            <div className="">
              <Button onClick={handleOpenModal}>Enroll Now</Button>
            </div>
          </ul>
        </div>
      </div>
      <EnrollFormModel isOpen={isModalOpen} onClose={handleCloseModal}>
        <EnrollForm />
      </EnrollFormModel>
    </>
  );
}

export default Sidebar;
