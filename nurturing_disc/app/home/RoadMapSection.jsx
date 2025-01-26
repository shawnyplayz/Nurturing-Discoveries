import Image from "next/image";
import React from "react";

const RoadMapSection = () => {
  return (
    <div className="hidden md:flex justify-center items-center py-48">
      <div className="relative w-full max-w-screen-xl">
        <Image
          src="/home/roadMapAssets/roadmap_line.jpg"
          width={1000}
          height={1000}
          alt="RoadMap Line"
          className="w-full h-auto"
        />

        {/* Blob 1 with text */}
        <div>
          <Image
            src="/home/roadMapAssets/roadmap_blob.svg"
            width={75}
            height={75}
            alt="RoadMap Blob 1"
            style={{
              position: "absolute",
              top: "26.25%",
              left: "15%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            className="max-w-72 absolute"
            style={{
              top: "75.25%",
              left: "15%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h1 className="text-center text-fiord font-quicksand font-bold text-xl">
              Choose a program
            </h1>
            <p className="max-w-96 text-center font-normal font-sans text-base text-fiord">
              Explore a variety of programs tailored to meet the unique needs of
              your child, ensuring a well-rounded and engaging learning
              experience.
            </p>
          </div>
        </div>

        {/* Blob 2 with text */}
        <div>
          <Image
            src="/home/roadMapAssets/roadmap_blob2.svg"
            width={75}
            height={75}
            alt="RoadMap Blob 2"
            style={{
              position: "absolute",
              top: "73.25%",
              left: "37%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            className="max-w-72 absolute"
            style={{
              top: "25.25%",
              left: "37%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h1 className="text-center text-fiord font-quicksand font-bold text-xl">
              Expert Teachers
            </h1>
            <p className="max-w-96 text-center font-normal font-sans text-base text-fiord">
              Learn from experienced educators dedicated to nurturing curiosity
              and fostering growth in every child.
            </p>
          </div>
        </div>

        {/* Blob 3 with text */}
        <div>
          <Image
            src="/home/roadMapAssets/roadmap_blob3.svg"
            width={75}
            height={75}
            alt="RoadMap Blob 3"
            style={{
              position: "absolute",
              top: "20.25%",
              right: "38%",
              transform: "translate(50%, -50%)",
            }}
          />
          <div
            className="max-w-72 absolute"
            style={{
              top: "75.25%",
              right: "38%",
              transform: "translate(50%, -50%)",
            }}
          >
            <h1 className="text-center text-fiord font-quicksand font-bold text-xl">
              E-Learning Media
            </h1>
            <p className="max-w-96 text-center font-normal font-sans text-base text-fiord">
              Leverage modern digital tools and resources to enhance learning,
              making education more interactive and fun.
            </p>
          </div>
        </div>

        {/* Blob 4 with text */}
        <div>
          <Image
            src="/home/roadMapAssets/roadmap_blob4.svg"
            width={80}
            height={80}
            alt="RoadMap Blob 4"
            style={{
              position: "absolute",
              top: "72.25%",
              right: "12%",
              transform: "translate(50%, -50%)",
            }}
          />
          <div
            className="max-w-72 absolute"
            style={{
              top: "15.25%",
              right: "12%",
              transform: "translate(50%, -50%)",
            }}
          >
            <h1 className="text-center text-fiord font-quicksand font-bold text-xl">
              Full Day Programs
            </h1>
            <p className="max-w-96 text-center font-normal font-sans text-base text-fiord">
              Comprehensive full-day schedules designed to balance learning,
              play, and rest for holistic development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMapSection;
