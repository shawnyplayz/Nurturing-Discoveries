import Image from "next/image";

export default function TestimonialCard({
  text,
  author,
  imageSrc,
  backgroundColor,
  borderTopColor,
  imageVariant, // Add this prop to decide which image to use
}) {
  const containerImages = [
    "testimonialsAssets/Container1.svg",
    "testimonialsAssets/Container2.svg",
    "testimonialsAssets/Container3.svg",
  ];

  return (
    <div className="relative p-8 text-white" style={{ backgroundColor }}>
      {/* Container Image */}
      <div className="relative">
        <Image
          src={containerImages[imageVariant]} // Select the image based on the imageVariant prop
          width={500}
          height={500}
          alt="Container"
          className="object-cover w-full h-full"
        />

        {/* Content Inside the Container */}
        <div className="absolute inset-0 flex flex-col justify-center p-8 overflow-hidden">
          {/* Author Image */}
          <div className="absolute -top-6 right-4 w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={imageSrc}
              alt={author}
              width={50}
              height={50}
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex-1 flex flex-col justify-end">
            <p className="text-lg leading-relaxed max-w-full overflow-hidden text-ellipsis">
              {text}
            </p>
          </div>

          {/* Author */}
          <div className="mt-4 flex items-center justify-center">
            <div className="mr-2 w-6 border-t-2 border-white"></div>
            <span className="font-bold">{author}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
