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
        <button
          className="absolute top-2 right-2 bg-white text-blue-600 rounded-full p-2  hover:bg-gray-100"
          aria-label="Share"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 8.25a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM6.75 15.75a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM12 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM6.75 8.25a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM17.25 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
            />
          </svg>
        </button>
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
