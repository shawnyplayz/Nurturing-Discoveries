import React from "react";
import WavedSeparator from "@/components/WavedSeparator";
import { HEADER_DATA } from "@/app/constants";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <WavedSeparator>
        <div className="container mx-auto flex flex-row gap-5 items-center justify-between py-5 px-5">
          <div className="flex justify-around gap-3">
            {HEADER_DATA.locations.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="flex flex-row items-center gap-2">
                  {IconComponent && (
                    <IconComponent className="text-fiord" size={24} />
                  )}
                  <div className="text-fiord text-base font-sans">
                    {item.text}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-row items-center gap-4 text-base">
            <div className="text-fiord font-sans">
              {HEADER_DATA.socialMedia.title}
            </div>
            {HEADER_DATA.socialMedia.icons.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link key={index} href={item.link} className="text-fiord">
                  {IconComponent && <IconComponent size={24} />}
                </Link>
              );
            })}
          </div>
        </div>
      </WavedSeparator>
    </div>
  );
};

export default Header;
