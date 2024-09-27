import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactInfo = ({ iconSrc, text, subtext, href }) => {
  return (
    <Link href={href} passHref>
      <div className="flex items-center">
        <div className="w-16 h-16 flex-shrink-0">
          <Image
            src={iconSrc}
            width={64}
            height={64}
            alt="Contact Icon"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="ml-4">
          <p className="text-fiord text-sm">{subtext}</p>
          <p className="text-fiord text-base font-medium">{text}</p>
        </div>
      </div>
    </Link>
  );
};

export default ContactInfo;
