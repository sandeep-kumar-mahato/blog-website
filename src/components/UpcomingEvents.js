import React from "react";
import { Routes, Route } from "react-router-dom";
import Conferences from "./UpcomingEvents/Conferences";
import Workshops from "./UpcomingEvents/Workshops";
import Webinars from "./UpcomingEvents/Webinars";
import Seminars from "./UpcomingEvents/Seminars";
import Meetups from "./UpcomingEvents/Meetups";
import Hackathons from "./UpcomingEvents/Hackathons";
import Exhibitions from "./UpcomingEvents/Exhibitions";

function UpcomingEvents() {
  return (
    <div className="w-4/5 mx-auto py-8">
      <h2 className="text-center text-3xl font-bold mb-6">Upcoming Events</h2>
      <div className="relative">
        <div className="absolute -left-10 h-full w-2 bg-blue-500"></div>
        <div className="p-4 ml-4">
          <div className="relative py-4">
            <Conferences />
            <div className="absolute top-8 -left-20 transform -translate-y-1/2 h-0.5 bg-blue-500 w-16"></div>
          </div>
          <div className="relative py-4">
            <Workshops />
            <div className="absolute top-8 -left-20 transform -translate-y-1/2 h-0.5 bg-blue-500 w-16"></div>
          </div>
          <div className="relative py-4">
            <Webinars />
            <div className="absolute top-8 -left-20 transform -translate-y-1/2 h-0.5 bg-blue-500 w-16"></div>
          </div>
          <div className="relative py-4">
            <Seminars />
            <div className="absolute top-8 -left-20 transform -translate-y-1/2 h-0.5 bg-blue-500 w-16"></div>
          </div>
          <div className="relative py-4">
            <Meetups />
            <div className="absolute top-8 -left-20 transform -translate-y-1/2 h-0.5 bg-blue-500 w-16"></div>
          </div>
          <div className="relative py-4">
            <Hackathons />
            <div className="absolute top-8 -left-20 transform -translate-y-1/2 h-0.5 bg-blue-500 w-16"></div>
          </div>
          <div className="relative py-4">
            <Exhibitions />
            <div className="absolute top-8 -left-20 transform -translate-y-1/2 h-0.5 bg-blue-500 w-16"></div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/upcoming-events/conferences" element={<Conferences />} />
        <Route path="/upcoming-events/workshops" element={<Workshops />} />
        <Route path="/upcoming-events/webinars" element={<Webinars />} />
        <Route path="/upcoming-events/seminars" element={<Seminars />} />
        <Route path="/upcoming-events/meetups" element={<Meetups />} />
        <Route path="/upcoming-events/hackathons" element={<Hackathons />} />
        <Route path="/upcoming-events/exhibitions" element={<Exhibitions />} />
      </Routes>
    </div>
  );
}

export default UpcomingEvents;
