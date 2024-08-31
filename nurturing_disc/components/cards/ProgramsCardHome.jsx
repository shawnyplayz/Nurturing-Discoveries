import Image from "next/image";

function ProgramsCardHome({ title, description, backgroundColor, src }) {
  return (
    <div
      className="flex flex-col mt-6 mb-6 mx-auto text-gray-700 shadow-md bg-clip-border rounded-3xl w-full max-w-md"
      style={{ backgroundColor }}
    >
      <div className="h-[9.5rem] xl:h-56  mx-4 mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-3xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <Image
          alt="card-image"
          src={src}
          layout="responsive"
          width={500}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h5 className="text-xl antialiased font-bold font-quicksand leading-snug tracking-normal text-blue-gray-900 text-center text-white mb-4">
          {title}
        </h5>
        <p className="text-base antialiased leading-relaxed text-inherit text-center font-light text-white mb-8">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProgramsCardHome;
