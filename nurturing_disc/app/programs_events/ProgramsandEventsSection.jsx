"use client";

import React, { useEffect, useState } from "react";
import SectionSeparator from "@/components/SectionSeparator";
import Footer from "@/components/Footer";
import ProgramCard from "@/components/cards/ProgramCard";
import EventsCards from "@/components/cards/EventsCard";
import ResponsiveModal from "@/components/modal/ResponsiveModal";
import endpoints from "@/config/endpoints";
import { programSectionCardData } from "../constants";

const ProgramsandEventsSection = () => {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  // Program Card Loading State
  const [loading, setLoading] = useState(true);

  // Events Card Loading State
  const [isEventsLoading, setIsEventsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Set loading to false after 2 seconds (simulate data fetching)
  }, []);

  const fetchEvents = async () => {
    setIsEventsLoading(true);
    try {
      const url = endpoints.fetchEvents;
      const response = await fetch(url);
      if (!response.ok) {
        console.error("Network response was not ok");
        return;
      }
      const data = await response.json();
      if (data.length > 0) {
        setEvents(data);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setIsEventsLoading(false);
    }
  };

  const handleOpenModal = (eventData) => {
    console.log("Opening Modal with data:", eventData);
    setModalData(eventData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Closing Modal");
    setIsModalOpen(false);
    setModalData(null);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [isModalOpen]);

  useEffect(() => {
    fetchEvents();
  }, []);

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
            {programSectionCardData.map((program, index) => (
              <ProgramCard
                key={index}
                title={program.title}
                description={program.description}
                backgroundColor={program.backgroundColor}
                src={program.src}
                loading={loading}
              />
            ))}
          </div>
        </div>
        {/* Events Section */}
        <div className="flex flex-col">
          <h2 className="font-quicksand font-bold text-4xl sm:text-3xl text-left lg:text-left text-fiord py-3 lg:text-5xl ml-5">
            Events
          </h2>

          <div className="sm:grid pt-0 pb-16 md:pb-24 lg:grid-cols-3 md:flex-row gap-8 md:gap-10 lg:gap-12 md:px-4">
            {events.map((event) => {
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
                      date: new Date(event.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }),
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
          location={modalData.location}
          date={modalData.date}
          description={modalData.description}
        />
      )}
    </section>
  );
};

export default ProgramsandEventsSection;
