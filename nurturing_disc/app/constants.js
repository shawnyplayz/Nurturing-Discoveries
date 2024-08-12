import { MdLocationOn, MdOutlineMail } from "react-icons/md";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebook,
} from "react-icons/fa";

export const HEADER_DATA = {
  locations: [
    { icon: MdLocationOn, text: "I.C. Colony, Borivali west, Mumbai 400103" },
    { icon: MdOutlineMail, text: "nurturingdiscoveries@gmail.com" },
  ],
  socialMedia: {
    title: "Follow Us On:",
    icons: [
      { icon: FaInstagram, link: "https://www.instagram.com/nurturing_discoveries/" },
      { icon: FaYoutube, link: "https://youtube.com" },
      { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/dhruti-joshi-313b8826b/" },
      { icon: FaFacebook, link: "https://www.facebook.com/nurturingdiscoveries" },
    ],
  },
};
