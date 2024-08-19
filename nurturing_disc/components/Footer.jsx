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
import Input from "./Input";

const Footer = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex justify-between items-center mx-auto container relative">
        {/* Left Zebra */}
        <div className="zebra-left">
          <Image
            src="/cartoons/rainbow.svg"
            width={200}
            height={200}
            alt="Zebra Left"
          />
        </div>

        {/* Footer Content */}
        <div className="flex flex-col mx-auto w-full">
          <div className="top-footer px-8 lg:px-16">
            <div className="flex flex-col md:flex-row justify-center gap-12 lg:gap-48 pb-12 lg:pb-20">
              {footerData.ContactInfoData.map((contactData, index) => (
                <ContactInfo
                  key={index}
                  iconSrc={contactData.iconSrc}
                  text={contactData.text}
                  subtext={contactData.subtext}
                />
              ))}
            </div>
          </div>

          <div className="bottom-footer px-6 lg:px-10 flex flex-col lg:flex-row">
            <div className="section-1 max-w-xl">
              <div className="px-3 max-w-lg pt-8">
                <Image src="/logo.svg" width={270} height={70} alt="Logo" />
                <div className="max-w-lg pt-5 pb-10">
                  <p className="font-sans font-normal text-base text-fiord">
                    Phasellus ultricies aliquam volutpat ullamcorper laoreet
                    neque, a lacinia curabitur lacinia mollis
                  </p>
                </div>
                <div className="flex flex-row gap-4 pb-12">
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

            <div className="section-2 min-w-80 pb-12 lg:pb-32">
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

            <div className="newsletter">
              <div className="pt-8 px-8">
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
        <div className="zebra-right">
          <Image
            src="/cartoons/zebra.svg"
            width={100}
            height={100}
            alt="Zebra Right"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
