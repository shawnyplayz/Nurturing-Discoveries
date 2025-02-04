"use client";

import React, { useState, useEffect } from "react";
import Button from "@/components/buttons/Button";
import ProgramsCardHome from "@/components/cards/ProgramsCardHome";
import { programSectionCardData, programSectionData } from "../constants";
import Image from "next/image";
import Link from "next/link";
import endpoints from "@/config/endpoints";

const ProgramSection = () => {
  const [loading, setLoading] = useState(true);
  const [programs, setPrograms] = useState([]);
  const fetchPrograms = async () => {
    setLoading(true);
    try {
      const response = await fetch(endpoints.fetchPrograms);
      if (!response.ok) {
        console.error("Failed to fetch programs");
        return;
      }
      const data = await response.json();
      setPrograms(data);
    } catch (error) {
      console.error("Error fetching programs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);
  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Set loading to false after 2 seconds (simulate data fetching)
  }, []);

  if (programs.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col items-center container mx-auto px-4 md:px-6 lg:px-8 relative pt-20 md:pt-28">
      <div className="hidden md:flex">
        <Image
          src="/cartoons/mask.svg"
          width={100}
          height={72}
          className="absolute top-20 left-5"
          alt="Mask Cartoon"
          data-aos="zoom-in"
        />
        <Image
          src="/cartoons/pencil-5.svg"
          width={90}
          height={90}
          className="absolute bottom-12 left-24"
          alt="Pencil Cartoon"
          data-aos="zoom-in"
        />
        <Image
          src="/cartoons/compass.svg"
          width={100}
          height={100}
          className="absolute bottom-12 right-28"
          alt="Compass Cartoon"
          data-aos="zoom-in"
        />
        <Image
          src="/cartoons/mask-2.svg"
          width={150}
          height={150}
          className="absolute top-10 right-12"
          alt="Mask Cartoon"
          data-aos="zoom-in"
        />
      </div>
      <div>
        <div className="font-sans font-semibold text-xl text-peach text-center">
          <h1>{programSectionData.title}</h1>
        </div>
        <div className="font-quicksand text-fiord font-bold md:text-5xl max-w-2xl text-center pt-6 md:pt-10">
          {programSectionData.subHeading}
        </div>
      </div>
      {/* // Card Section */}
      <div className="grid pt-10 md:pt-16 pb-16 md:pb-24 lg:grid-cols-3 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 md:px-4">
        {programs.map((program, index) => {
          const latestImage =
            program.pictures && program.pictures.length > 0
              ? program.pictures[program.pictures.length - 1].secure_url
              : "";

          return (
            <ProgramsCardHome
              key={index}
              title={program.program_name}
              description={program.program_description}
              backgroundColor={
                ["rgb(112 166 177)", "rgb(243 159 95)", "rgb(88 102 235)"][
                  index % 3
                ]
              }
              src={latestImage || program.thumbnail_url}
              loading={loading}
            />
          );
        })}
      </div>
      <div className="py-8 md:py-12">
        <Link href={"/programs_events"}>
          <Button>View All Programs</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProgramSection;
