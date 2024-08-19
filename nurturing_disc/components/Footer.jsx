import React from "react";
import ContactInfo from "./ContactInfo";
import { footerData } from "@/app/constants";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Button from "./buttons/Button";
import Input from "./Input";
import ReversedWavedSeparator from "./ReversedWaveSeparator";

const Footer = () => {
  return (
    <div className="flex flex-col mx-auto container">
      <div className="TopFooter px-16">
        <div className="flex flex-row justify-center gap-48 pb-20">
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
      <div className="BottomFooter px-10 flex flex-row">
        <div className="section1 max-w-xl">
          <div className="px-3 max-w-lg pt-8">
            <Image src="logo.svg" width={270} height={70} alt="Logo" />
            <div className="max-w-lg pt-5 pb-10">
              <p className="font-sans font-normal text-base text-fiord">
                Phasellus ultricies aliquam volutpat ullamcorper laoreet neque,
                a lacinia curabitur lacinia mollis
              </p>
            </div>
            <div className="flex flex-row gap-4 pb-12">
              <FaFacebookF size={30} />
              <FaYoutube size={30} />
              <FaLinkedin size={30} />
              <FaInstagram size={30} />
            </div>
          </div>
        </div>
        <div className="section2 min-w-80 pb-32">
          <div className="px-5 pt-8 pb-14">
            <h1 className="font-quicksand font-bold text-2xl pb-12">
              Quick Link
            </h1>
            <div>
              <ul className="font-sans font-normal text-base text-fiord">
                <li className="flex items-center pb-4">
                  <IoIosArrowForward className="mr-2" />
                  <Link href="/">Our Program</Link>
                </li>
                <li className="flex items-center pb-4">
                  <IoIosArrowForward className="mr-2" />
                  <Link href="/">Our Staff</Link>
                </li>
                <li className="flex items-center pb-4">
                  <IoIosArrowForward className="mr-2" />
                  <Link href="/">Our Gallery</Link>
                </li>
                <li className="flex items-center pb-4">
                  <IoIosArrowForward className="mr-2" />
                  <Link href="/">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="newsletter">
          <div className="pt-8 px-8">
            <div className="pb-12 font-quicksand font-bold text-2xl text-fiord pr-64">
              <h1>Newsletter</h1>
            </div>
            <div className="pb-6">
              <Input placeholder="Enter your name" />
            </div>
            <div>
              <Button>Submit</Button>
            </div>
          </div>
        </div>
      </div>
      <ReversedWavedSeparator/>
    </div>
  );
};

export default Footer;
