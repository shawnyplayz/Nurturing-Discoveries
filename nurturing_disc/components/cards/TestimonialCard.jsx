import Image from "next/image";

export default function TestimonialCard({
  text,
  author,
  imageSrc,
  backgroundColor,
  imageVariant, // Add this prop to decide which image to use
}) {
  const containerImages = [
    "testimonialsAssets/Container1.svg",
    "testimonialsAssets/Container2.svg",
    "testimonialsAssets/Container3.svg",
  ];

  return (
    <div className="relative p-6 sm:p-8 text-white" style={{ backgroundColor }}>
      {/* Container Image */}
      <div className="relative">
        <div className="absolute -top-6 right-4 w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={author}
            width={50}
            height={50}
            className="object-cover z-10"
          />
        </div>
        <Image
          src={containerImages[imageVariant]} // Select the image based on the imageVariant prop
          width={500}
          height={500}
          alt="Container"
          className="object-cover w-full h-full"
        />

        {/* Content Inside the Container */}
        <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-8 overflow-hidden">
          {/* Text */}
          <div className="flex flex-col justify-end">
            <p className="text-sm sm:text-lg leading-relaxed max-w-full min-h-3 overflow-hidden text-ellipsis">
              {text}
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
