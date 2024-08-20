const SectionSeparator = ({ title, subHeading }) => {
  return (
    <div className="section-curved bg-peach">
      <div className="flex items-center justify-center flex-col gap-5 py-8 text-white">
        <div className="font-quicksand font-bold text-6xl pt-24">{title}</div>
        <div className="pb-20">{subHeading}</div>
      </div>
    </div>
  );
};

export default SectionSeparator;
