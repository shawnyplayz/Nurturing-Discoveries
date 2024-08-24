"use client";

import React, { useEffect, useState } from "react";
import SectionSeparator from "@/components/SectionSeparator";
import Footer from "@/components/Footer";
import ProgramCard from "@/components/cards/ProgramCard";
import EventsCards from "@/components/cards/EventsCard";
import endpoints from "@/config/endpoints";
import { programSectionCardData } from "../constants";

const ProgramsandEvents = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const url = endpoints.fetchEvents;
      const response = await fetch(url);
      if (!response.ok) {
        // Handle the error appropriately
        console.error("Network response was not ok");
        return;
      }
      const data = await response.json();
      if (data.length > 0) {
        setEvents(data);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

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
        <div className="sm:grid pt-10 md:pt-16 pb-16 md:pb-24 lg:grid-cols-3 md:flex-row gap-8 md:gap-10 lg:gap-12 md:px-4">
          {/* Map through program section data */}
          {programSectionCardData.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              description={program.description}
              backgroundColor={program.backgroundColor}
              src={program.src}
            />
          ))}
          {/* Map through fetched event data */}

          {events.map((event) => (
            <EventsCards
              key={event.event_id}
              title={event.event_name}
              description={event.event_description}
              src={event.pictures[0]?.secure_url}
              location={event.event_location}
              date={new Date(event.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ProgramsandEvents;
