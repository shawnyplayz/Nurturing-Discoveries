import React from "react";
import ContactInfo from "./ContactInfo";
import { footerData, footerQuickLinks } from "@/app/constants";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Button from "./buttons/Button";
import { Input } from "./Input";
import FloatingButton from "@/components/buttons/FloatingButton";

const Footer = () => {
  const links = footerQuickLinks();

  return (
    <footer className="relative bg-gray-100 overflow-hidden">
      {/* Decorative Images */}
      <div
        className="hidden xl:block absolute left-2 bottom-24"
        data-aos="fade-right"
      >
        <Image
          src="/cartoons/rainbow.svg"
          width={150}
          height={150}
          alt="Rainbow Decoration"
          className="w-40 h-auto"
        />
      </div>
      <div
        className="hidden xl:block absolute -right-[-0.5rem] bottom-[95px]"
        data-aos="fade-left"
      >
        <Image
          src="/cartoons/zebra.svg"
          width={200}
          height={200}
          alt="Zebra Decoration"
          className="w-40 h-auto"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-10 border-b border-gray-300">
          {footerData.ContactInfoData.map((contactData, index) => (
            <ContactInfo
              key={index}
              iconSrc={contactData.iconSrc}
              text={contactData.text}
              subtext={contactData.subtext}
            />
          ))}
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12">
          {/* Logo and Social Media */}
          <div>
            <Image
              src="/logo.svg"
              width={200}
              height={60}
              alt="Logo"
              className="w-40 h-auto"
            />
            <p className="mt-4 text-gray-700">
              Discover and Nurture the ability
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-gray-500 hover:text-blue-600 transition"
              >
                <FaFacebookF size={20} />
              </Link>
              <Link
                href="https://youtube.com"
                aria-label="YouTube"
                className="text-gray-500 hover:text-red-600 transition"
              >
                <FaYoutube size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-blue-700 transition"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-gray-500 hover:text-pink-600 transition"
              >
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-quicksand font-bold text-2xl text-fiord mb-6">
              Quick Links
            </h2>
            <ul className="space-y-4">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="flex items-center text-gray-600 hover:text-gray-800 transition"
                  >
                    <IoIosArrowForward className="mr-2" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="newsletter max-w-full lg:max-w-md">
            <div className="px-5 lg:px-8">
              <h1 className="pb-8 lg:pb-12 font-quicksand font-bold text-2xl text-fiord">
                Newsletter
              </h1>
              <div className="pb-6">
                <Input placeholder="Enter your name" />
              </div>
              <div>
                <Button>Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reverse-curved flex flex-col md:flex-row md:flex items-center pl-4 gap-1 text-fiord text-xs">
        <div className="flex md:justify-start md:mt-10 mt-10 font-quicksand">
          © 2024 Nurturing Discoveries. All rights reserved.
        </div>
        <div className="font-quicksand flex items-center gap-2 md:mt-10 md:ml-auto pr-4">
          Designed and Developed by
          <span>
            <Image
              src="/footerAssets/innocursor.svg"
              width={25}
              height={25}
              alt="Innovative Cursor Logo"
            />
          </span>
          <Link href="https://www.innovativecursor.com/">
            <span>Innovative Cursor</span>
          </Link>
        </div>
      </div>

      {/* Floating Button */}
      <FloatingButton />
    </footer>
  );
};

export default Footer;
