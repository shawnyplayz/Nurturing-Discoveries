import Image from "next/image";

const SectionSeparator = ({ title, subHeading }) => {
  return (
    <div className="section-curved bg-peach grid-background">
      <div className="flex items-center justify-center flex-col gap-5 py-8 text-white relative">
        <div>
          <Image
            src="bannerAssets/parachute.svg"
            width={68}
            height={94}
            alt="Parachute"
            className="absolute top-0 right-40"
          />
          <Image
            src="bannerAssets/cloud.svg"
            width={76}
            height={55}
            alt="Cloud"
            className="absolute top-16 right-96"
          />
          <Image
            src="bannerAssets/honeybee.svg"
            width={100}
            height={100}
            alt="Cloud"
            className="absolute bottom-10 right-64"
          />
          <Image
            src="bannerAssets/rocket-cloud.svg"
            width={111}
            height={63}
            alt="Rocket Cloud"
            className="absolute top-10 left-64"
          />
          <Image
            src="bannerAssets/girl.svg"
            width={65}
            height={52}
            alt="Girl"
            className="absolute bottom-8 left-64"
          />
        </div>
        <div className="font-quicksand font-bold text-4xl lg:text-6xl pt-24">{title}</div>
        <div className="pb-20">{subHeading}</div>
      </div>
    </div>
  );
};

export default SectionSeparator;
