export default function ProgramCard({
  title,
  description,
  backgroundColor,
  src,
}) {
  return (
    <div
      className="flex flex-col mt-6 text-gray-700  shadow-md bg-clip-border rounded-3xl md:w-96"
      style={{ backgroundColor }}
    >
      <div className="md:h-56 mx-4 mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-3xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img alt="card-image" src={src} />
      </div>
      <div className="p-6">
        <h5 className="block mb-2 text-xl antialiased font-bold font-quicksand leading-snug tracking-normal text-blue-gray-900 text-center text-white pb-5">
          {title}
        </h5>
        <p className="block font-sans text-base antialiased leading-relaxed text-inherit text-center font-light text-white pb-14">
          {description}
        </p>
      </div>
    </div>
  );
}
