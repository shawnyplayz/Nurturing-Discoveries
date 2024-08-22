import Image from "next/image";

const TeamCard = ({ name, position, imageUrl }) => {
  return (
    <div className="relative flex flex-col text-gray-700 bg-ivory bg-clip-border rounded-xl min-w-80 min-h-fit pt-7">
      <div className="relative overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
        <Image
          src={imageUrl}
          alt={`${name}'s profile picture`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="p-6 text-center">
        <h4 className="block mb-2 font-sans text-2xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
          {name}
        </h4>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed">
          {position}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
