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
      {/* Container Image */}
      <div className="relative min-w-12 min-h-12 rounded-full">
        <div className="absolute -top-6 right-4 w-14 h-14 rounded-full overflow-hidden">
          <Image
            src={imageSrc || defaultAvatar}
            alt={author}
            width={100}
            height={100}
            className="object-cover z-10"
          />
        </div>
        <Image
          src={containerImages[imageVariant]}
          width={500}
          height={500}
          alt="Container"
          className="object-cover"
        />

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
  );
}
