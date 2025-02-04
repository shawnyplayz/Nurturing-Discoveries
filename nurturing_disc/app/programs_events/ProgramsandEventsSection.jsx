"use client";

import React, { useEffect, useState } from "react";
import SectionSeparator from "@/components/SectionSeparator";
import Footer from "@/components/Footer";

import EventsCards from "@/components/cards/EventsCard";
import ResponsiveModal from "@/components/modal/ResponsiveModal";
import endpoints from "@/config/endpoints";
import ProgramCard from "@/components/cards/ProgramCard";

const ProgramsandEventsSection = () => {
  const [events, setEvents] = useState([]);
  const [programs, setPrograms] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  // Loading states
  const [isEventsLoading, setIsEventsLoading] = useState(true);
  const [isProgramsLoading, setIsProgramsLoading] = useState(true);

  // Fetch events data
  const fetchEvents = async () => {
    setIsEventsLoading(true);
    try {
      const response = await fetch(endpoints.fetchEvents);
      if (!response.ok) {
        console.error("Failed to fetch events");
        return;
      }
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setIsEventsLoading(false);
    }
  };

  // Fetch programs data
  const fetchPrograms = async () => {
    setIsProgramsLoading(true);
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
      setIsProgramsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
    fetchPrograms();
  }, []);

  const handleOpenModal = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    document.documentElement.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [isModalOpen]);

  if (
    !isEventsLoading &&
    !isProgramsLoading &&
    programs.length === 0 &&
    events.length === 0
  ) {
    return null;
  }

  return (
    <section>
      <SectionSeparator
        title="Programs & Events"
        subHeading="Home > Programs & Events"
      />
      <div className="flex flex-col items-center container mx-auto px-4 md:px-6 lg:px-8 relative pt-20 md:pt-28">
        {/* Programs Section */}
        <div className="flex flex-col">
          <h2 className="font-quicksand font-bold text-4xl sm:text-3xl text-left lg:text-left text-fiord py-3 lg:text-5xl ml-5">
            Programs
          </h2>
          <div className="sm:grid pt-0 pb-10 lg:grid-cols-3 md:flex-row gap-8 md:gap-10 lg:gap-12 md:px-4">
            {isProgramsLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <ProgramCard key={index} isLoading={isProgramsLoading} />
                ))
              : programs?.map((program, index) => {
                  const latestImage =
                    program.pictures && program.pictures.length > 0
                      ? program.pictures[program.pictures.length - 1].secure_url
                      : null;

                  return (
                    <ProgramCard
                      key={program?.program_id}
                      title={program?.program_name}
                      description={program?.program_description}
                      backgroundColor={
                        [
                          "rgb(112 166 177)",
                          "rgb(243 159 95)",
                          "rgb(88 102 235)",
                        ][index % 3]
                      }
                      min_age={program?.min_age}
                      max_age={program?.max_age}
                      src={latestImage || program.thumbnail_url}
                      onClick={() =>
                        handleOpenModal({
                          imageSrc: latestImage || program.thumbnail_url,
                          title: program.program_name,
                          description: program.program_description,
                        })
                      }
                    />
                  );
                })}
          </div>
        </div>

        {/* Events Section */}
        <div className="flex flex-col">
          <h2 className="font-quicksand font-bold text-4xl sm:text-3xl text-left lg:text-left text-fiord py-3 lg:text-5xl ml-5">
            Events
          </h2>

          <div className="sm:grid pt-0 pb-16 md:pb-24 lg:grid-cols-3 md:flex-row gap-8 md:gap-10 lg:gap-12 md:px-4">
            {isEventsLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <EventsCards key={index} isLoading={isEventsLoading} />
                ))
              : events.map((event) => {
                  const latestImage =
                    event.pictures && event.pictures.length > 0
                      ? event.pictures[event.pictures.length - 1].secure_url
                      : null;

                  return (
                    <EventsCards
                      isLoading={isEventsLoading}
                      key={event.event_id}
                      title={event.event_name}
                      description={event.event_description}
                      src={latestImage}
                      location={event.event_location}
                      date={new Date(event.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                      onClick={() =>
                        handleOpenModal({
                          imageSrc: latestImage,
                          location: event.event_location,
                          date: new Date(event.date).toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            }
                          ),
                          description: event.event_description,
                        })
                      }
                    />
                  );
                })}
          </div>
        </div>
      </div>
      <Footer />

      {modalData && (
        <ResponsiveModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          imageSrc={modalData.imageSrc}
          title={modalData.title}
          location={modalData.location}
          date={modalData.date}
          description={modalData.description}
        />
      )}
    </section>
  );
};

export default ProgramsandEventsSection;
