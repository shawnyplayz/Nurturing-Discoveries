import { navLinks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./buttons/Button";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between container mx-auto py-5 px-5">
      <div className="">
        <Image src="/logo.svg" height={70} width={282} />
      </div>
      <div className="sm:flex items-center hidden">
        <ul className="flex flex-row gap-8 text-base">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="font-semibold text-fiord">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="ml-8">
          <Button>Enroll Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
