import React from "react";
import { Link } from "react-router-dom";
import Blogs from "./Blogs";
import NewsFeeds from "./NewsFeeds/Politics";
import Jobs from "./Jobs/SoftwareDevelopment";
import UpcomingEvents from "./UpcomingEvents/Conferences";

export default function Home() {
  return (
    <>
      <Blogs />
      <div className="lg:w-4/5 mx-auto p-4">
        <h2 className="text-3xl font-bold my-4 text-center">News Feeds</h2>
        <div className="bg-white rounded-lg shadow p-4 mt-6">
          <NewsFeeds />
          <div className="mt-8 text-center">
            <Link to="/news-feeds" className="text-blue-500 font-bold">
              View All News
            </Link>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 text-center">Jobs</h2>
        <div className="bg-white rounded-lg shadow p-4 mt-6">
          <Jobs />
          <div className="mt-8 text-center">
            <Link to="/jobs" className="text-blue-500 font-bold">
              View All Jobs
            </Link>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 text-center">
          Upcoming Events
        </h2>
        <div className="bg-white rounded-lg shadow p-4 mt-6">
          <UpcomingEvents />
          <div className="mt-8 text-center">
            <Link to="/update-events" className="text-blue-500 font-bold">
              View All Events
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
