import React from "react";
import { Routes, Route } from "react-router-dom";
import Politics from "./NewsFeeds/Politics";
import Technology from "./NewsFeeds/Technology";
import Entertainment from "./NewsFeeds/Entertainment";
import Sports from "./NewsFeeds/Sports";
import Business from "./NewsFeeds/Business";
import Health from "./NewsFeeds/Health";
import Science from "./NewsFeeds/Science";

function NewsFeeds() {
  return (
    <div className="w-4/5 mx-auto py-8">
      <h2 className="text-center text-3xl font-bold mb-6">News Feeds</h2>
      <div className="relative">
        <div className="absolute -left-10 h-full w-2 bg-blue-500"></div>
        <div className="p-4 ml-4">
          <div className="relative py-4">
            <Politics />
            <div className="absolute top-8 -left-20 transform -translate-y-1/2 h-0.5 bg-blue-500 w-16"></div>
          </div>
          <div className="relative py-4">
            <Technology />
            <div className="absolute top-8 -left-20 transform -translate-y-1/2 h-0.5 bg-blue-500 w-16"></div>
          </div>
          <div className="relative py-4">
            <Entertainment />
            <div className="absolute top-8 -left-20 transform -translate-y-1/2 h-0.5 bg-blue-500 w-16"></div>
          </div>
          <div className="relative py-4">
            <Sports />
            <div className="absolute top-8 -left-20 transform -translate-y-1/2 h-0.5 bg-blue-500 w-16"></div>
          </div>
          <div className="relative py-4">
            <Business />
            <div className="absolute top-8 -left-20 transform -translate-y-1/2 h-0.5 bg-blue-500 w-16"></div>
          </div>
          <div className="relative py-4">
            <Health />
            <div className="absolute top-8 -left-20 transform -translate-y-1/2 h-0.5 bg-blue-500 w-16"></div>
          </div>
          <div className="relative py-4">
            <Science />
            <div className="absolute top-8 -left-20 transform -translate-y-1/2 h-0.5 bg-blue-500 w-16"></div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/news-feeds/politics" element={<Politics />} />
        <Route path="/news-feeds/technology" element={<Technology />} />
        <Route path="/news-feeds/entertainment" element={<Entertainment />} />
        <Route path="/news-feeds/sports" element={<Sports />} />
        <Route path="/news-feeds/business" element={<Business />} />
        <Route path="/news-feeds/health" element={<Health />} />
        <Route path="/news-feeds/science" element={<Science />} />
      </Routes>
    </div>
  );
}

export default NewsFeeds;
