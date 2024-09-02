import { Avatar } from "@mui/material";
import Image from "next/image";

export default function TestimonialCard({
  text,
  author,
  imageSrc,
  backgroundColor,
  imageVariant,
}) {
  const containerImages = [
    "testimonialsAssets/Container1.svg",
    "testimonialsAssets/Container2.svg",
    "testimonialsAssets/Container3.svg",
  ];

  // Default avatar in case imageSrc is not provided
  const defaultAvatar = "/icons/defaultProfilePicture.png";

  return (
    <div className="relative p-6 sm:p-8 text-white" style={{ backgroundColor }}>
      {/* Testimonial Card Wrapper */}
      <div className="relative">
        {/* Container Image */}
        <div className="relative">
          <Image
            src={containerImages[imageVariant]}
            width={500}
            height={500}
            alt="Container"
            layout="responsive"
            objectFit="cover"
          />

          {/* Avatar positioned absolutely */}
          <div className="absolute -top-6 right-4 w-16 h-16">
            <Avatar
              alt={author}
              src={imageSrc || defaultAvatar}
              sx={{ width: "100%", height: "100%" }}
            />
          </div>

          {/* Content Inside the Container */}
          <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-8 overflow-hidden">
            {/* Text */}
            <div className="relative flex flex-col justify-end min-h-24 sm:max-h-28 overflow-hidden">
              <p className="text-xs sm:text-sm leading-relaxed overflow-y-auto scrollbar-hidden min-h-24 text-center">
                {`"${text}"`}
              </p>
            </div>

            {/* Author */}
            <div className="mt-2 sm:mt-4 flex items-center justify-center">
              <div className="mr-1 sm:mr-2 w-4 sm:w-6 border-t-2 border-white"></div>
              <span className="text-xs sm:text-base font-bold">{author}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
