import Image from "next/image";

export default function StaffCard({ name, position, imageUrl }) {
  return (
    <div className="py-12">
      <div className="max-w-xs rounded-xl overflow-hidden shadow-lg">
        <div className="relative w-full h-96">
          <Image
            src={imageUrl}
            alt="Staff Image"
            width={500}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="px-4 py-2 text-center pt-5">
          <div className="font-bold text-xl mb-2 font-quicksand">{name}</div>
          <p className="text-gray-700 text-base font-normal font-sans pb-4">
            {position}
          </p>
        </div>
      </div>
    </div>
  );
}
