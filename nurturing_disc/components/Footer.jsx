import React from "react";
import ContactInfo from "./ContactInfo";
import { footerData } from "@/app/constants";
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

const Footer = () => {
  return (
    <div className="relative overflow-hidden bg-gray-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 flex flex-col lg:flex-row justify-between items-center">
        {/* Left Zebra */}
        <div className="absolute left-0 bottom-0 z-10 hidden md:block">
          <Image
            src="/cartoons/rainbow.svg"
            width={200}
            height={200}
            alt="Zebra Left"
            className="w-auto h-auto"
          />
        </div>

        {/* Footer Content */}
        <div className="flex flex-col w-full z-20 relative">
          <div className="flex flex-col md:flex-row justify-center gap-8 lg:gap-24 pb-12 lg:pb-16">
            {footerData.ContactInfoData.map((contactData, index) => (
              <ContactInfo
                key={index}
                iconSrc={contactData.iconSrc}
                text={contactData.text}
                subtext={contactData.subtext}
              />
            ))}
          </div>

          <div className="flex flex-col lg:flex-row justify-between px-6 lg:px-10">
            <div className="section-1 max-w-full lg:max-w-xl pb-12 lg:pb-0">
              <div className="px-3 max-w-full lg:max-w-lg">
                <Image src="/logo.svg" width={270} height={70} alt="Logo" />
                <div className="pt-5 pb-10">
                  <p className="font-sans font-normal text-base text-fiord">
                    Phasellus ultricies aliquam volutpat ullamcorper laoreet
                    neque, a lacinia curabitur lacinia mollis.
                  </p>
                </div>
                <div className="flex gap-4 pb-12">
                  <a href="https://facebook.com" aria-label="Facebook">
                    <FaFacebookF size={30} />
                  </a>
                  <a href="https://youtube.com" aria-label="YouTube">
                    <FaYoutube size={30} />
                  </a>
                  <a href="https://linkedin.com" aria-label="LinkedIn">
                    <FaLinkedin size={30} />
                  </a>
                  <a href="https://instagram.com" aria-label="Instagram">
                    <FaInstagram size={30} />
                  </a>
                </div>
              </div>
            </div>

            <div className="section-2 w-full lg:w-auto pb-12 lg:pb-0">
              <div className="px-5 pt-8 pb-14">
                <h1 className="font-quicksand font-bold text-2xl pb-8 lg:pb-12">
                  Quick Links
                </h1>
                <ul className="font-sans font-normal text-base text-fiord space-y-4">
                  {[
                    "Our Program",
                    "Our Staff",
                    "Our Gallery",
                    "Contact Us",
                  ].map((linkText, index) => (
                    <li key={index} className="flex items-center">
                      <IoIosArrowForward className="mr-2" />
                      <Link
                        href={`/${linkText.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {linkText}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="newsletter max-w-full lg:max-w-md">
              <div className="pt-8 px-5 lg:px-8">
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

        {/* Right Zebra */}
        <div className="absolute right-0 bottom-0 z-10 hidden md:block">
          <Image
            src="/cartoons/zebra.svg"
            width={100}
            height={100}
            alt="Zebra Right"
            className="w-40 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
