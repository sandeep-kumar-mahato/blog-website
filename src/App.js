import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NewsFeeds from "./components/NewsFeeds";
import Politics from "./components/NewsFeeds/Politics";
import Technology from "./components/NewsFeeds/Technology";
import Entertainment from "./components/NewsFeeds/Entertainment";
import Sports from "./components/NewsFeeds/Sports";
import Business from "./components/NewsFeeds/Business";
import Health from "./components/NewsFeeds/Health";
import Science from "./components/NewsFeeds/Science";

import UpcomingEvents from "./components/UpcomingEvents";
import Conferences from "./components/UpcomingEvents/Conferences";
import Exhibitions from "./components/UpcomingEvents/Exhibitions";
import Hackathons from "./components/UpcomingEvents/Hackathons";
import Meetups from "./components/UpcomingEvents/Meetups";
import Seminars from "./components/UpcomingEvents/Seminars";
import Webinars from "./components/UpcomingEvents/Webinars";
import Workshops from "./components/UpcomingEvents/Workshops";

import Jobs from "./components/Jobs";
import SoftwareDevelopment from "./components/Jobs/SoftwareDevelopment";
import Design from "./components/Jobs/Design";
import Marketing from "./components/Jobs/Marketing";
import Sales from "./components/Jobs/Sales";
import DataScience from "./components/Jobs/DataScience";
import ContentWriting from "./components/Jobs/ContentWriting";
import Finance from "./components/Jobs/Finance";

function App() {
  return (
    <Router>
      <div className="bg-slate-200">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/news-feeds" element={<NewsFeeds />} />
          <Route path="/news-feeds/politics" element={<Politics />} />
          <Route path="/news-feeds/technology" element={<Technology />} />
          <Route path="/news-feeds/entertainment" element={<Entertainment />} />
          <Route path="/news-feeds/sports" element={<Sports />} />
          <Route path="/news-feeds/business" element={<Business />} />
          <Route path="/news-feeds/health" element={<Health />} />
          <Route path="/news-feeds/science" element={<Science />} />

          <Route path="/update-events" element={<UpcomingEvents />} />
          <Route path="/update-events/Conferences" element={<Conferences />} />
          <Route path="/update-events/Exhibitions" element={<Exhibitions />} />
          <Route path="/update-events/Hackathons" element={<Hackathons />} />
          <Route path="/update-events/Meetups" element={<Meetups />} />
          <Route path="/update-events/Seminars" element={<Seminars />} />
          <Route path="/update-events/Webinars" element={<Webinars />} />
          <Route path="/update-events/Workshops" element={<Workshops />} />

          <Route path="/jobs" element={<Jobs />} />
          <Route
            path="/jobs/software-development"
            element={<SoftwareDevelopment />}
          />
          <Route path="/jobs/design" element={<Design />} />
          <Route path="/jobs/marketing" element={<Marketing />} />
          <Route path="/jobs/sales" element={<Sales />} />
          <Route path="/jobs/data-science" element={<DataScience />} />
          <Route path="/jobs/content-writing" element={<ContentWriting />} />
          <Route path="/jobs/finance" element={<Finance />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
