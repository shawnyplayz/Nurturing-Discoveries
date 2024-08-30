import Image from "next/image";
import React from "react";

const RoadMapSection = () => {
  return (
    <div
      className="hidden md:flex justify-center items-center py-48"
      data-aos="zoom-in-up"
      data-aos-offset="500"
    >
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
              Choose a service
            </h1>
            <p className="max-w-96 text-center font-normal font-sans text-base text-fiord">
              In a free hour, when our power of choice is untrammeled
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
              In a free hour, when our power of choice is untrammeled
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
              In a free hour, when our power of choice is untrammeled
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
              In a free hour, when our power of choice is untrammeled
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMapSection;
