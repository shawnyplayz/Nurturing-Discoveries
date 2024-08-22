import Image from "next/image";

export default function TestimonialCard({
  text,
  author,
  imageSrc,
  backgroundColor,
  borderTopColor,
}) {
  return (
    <div
      className="relative max-w-md p-8 text-white rounded-2xl transform -skew-x-6 flex flex-col justify-between"
      style={{ backgroundColor }}
    >
      <div className="absolute -top-6 right-4 w-12 h-12 rounded-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={author}
          width={48}
          height={48}
          className="object-cover"
        />
      </div>

      <div className="skew-x-6">
        <p className="text-lg leading-relaxed">{text}</p>
      </div>

      <div className="mt-4 flex items-center justify-center">
        <div className="mr-2 w-6 border-t-2 border-white"></div>
        <span className="font-bold">{author}</span>
      </div>

      <div className="absolute bottom-[-15px] left-10 transform -skew-x-12">
        <div
          className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[16px] "
          style={{ borderTopColor }}
        ></div>
      </div>
    </div>
  );
}
