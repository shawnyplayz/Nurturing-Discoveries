import Image from "next/image";
import React from "react";
import Iframe from "react-iframe";

const ContactInfoItem = ({ iconSrc, label, value }) => {
  return (
    <div className="flex items-center px-10 pt-5">
      <div className="p-2 border-2 border-white rounded-full">
        <Image src={iconSrc} width={25} height={25} alt={`${label} Icon`} />
      </div>
      <div className="flex flex-col p-4">
        <div className="font-sans font-normal text-base text-white">
          {label}
        </div>
        <div className="font-sans font-semibold text-2xl text-white">
          {value}
        </div>
      </div>
    </div>
  );
};

const ContactInfoCard = () => {
  return (
    <div className="max-w-2xl bg-peach rounded-3xl shadow-lg">
      <ContactInfoItem
        iconSrc="/contactus/emailIcon.svg"
        label="Email"
        value="nurturingdiscoveries@gmail.com"
      />
      <div className="border-b border-white my-4"></div>
      <ContactInfoItem
        iconSrc="/contactus/callIcon.svg"
        label="Call Us"
        value="+91 83695 96061"
      />
      <div className="border-b border-white my-4"></div>
      <ContactInfoItem
        iconSrc="/contactus/locationIcon.svg"
        label="Location"
        value="I.C. Colony, Borivali west, Mumbai 400103"
      />
      <div className="mt-6 flex items-center justify-center">
        <div className="w-full h-full overflow-hidden rounded-b-3xl">
          <Iframe
            url="https://www.youtube.com/embed/UzmvtVAuuyI"
            width="101%"
            height="350px"
            id=""
            className=""
            display="block"
            position="relative"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;
