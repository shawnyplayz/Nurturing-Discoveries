import React from "react";
import WavedSeparator from "@/components/WavedSeparator";
import { HEADER_DATA } from "@/app/constants";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <WavedSeparator>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-6 md:px-8">
          {/* Locations Section */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1 md:gap-6">
            {HEADER_DATA.locations.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-row items-center gap-2 text-center md:text-left"
                >
                  {IconComponent && (
                    <IconComponent className="text-fiord" size={22} />
                  )}
                  <span className="text-fiord text-sm md:text-base font-sans">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Social Media Section */}
          <div className="flex flex-row items-center gap-3 mt-4 md:mt-0 md:flex">
            <span className="text-fiord font-sans hidden md:block">
              {HEADER_DATA.socialMedia.title}
            </span>
            <div className="flex gap-3 hidden md:flex">
              {HEADER_DATA.socialMedia.icons.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={index}
                    href={item.link}
                    className="text-fiord"
                    aria-label={item.name}
                  >
                    {IconComponent && <IconComponent size={24} />}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </WavedSeparator>
    </div>
  );
};

export default Header;
