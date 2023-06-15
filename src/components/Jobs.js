import React from "react";
import { Routes, Route } from "react-router-dom";
import SoftwareDevelopment from "./Jobs/SoftwareDevelopment";
import Design from "./Jobs/Design";
import Marketing from "./Jobs/Marketing";
import Sales from "./Jobs/Sales";
import DataScience from "./Jobs/DataScience";
import ContentWriting from "./Jobs/ContentWriting";
import Finance from "./Jobs/Finance";

function Jobs() {
  return (
    <div className="w-4/5 mx-auto py-8">
      <h2 className="text-center text-3xl font-bold mb-6">Jobs</h2>
      <div className="relative">
        <div className="absolute -left-5 lg:-left-10 h-full w-2 bg-blue-500"></div>
        <div className="p-4 ml-4">
          <div className="relative py-4">
            <SoftwareDevelopment />
            <div className="absolute top-8 -left-20 transform -translate-y-1/2 h-0.5 bg-blue-500 w-16"></div>
          </div>
          <div className="relative py-4">
            <Design />
            <div className="absolute top-8 -left-20 transform -translate-y-1/2 h-0.5 bg-blue-500 w-16"></div>
          </div>
          <div className="relative py-4">
            <Marketing />
            <div className="absolute top-8 -left-20 transform -translate-y-1/2 h-0.5 bg-blue-500 w-16"></div>
          </div>
          <div className="relative py-4">
            <Sales />
            <div className="absolute top-8 -left-20 transform -translate-y-1/2 h-0.5 bg-blue-500 w-16"></div>
          </div>
          <div className="relative py-4">
            <DataScience />
            <div className="absolute top-8 -left-20 transform -translate-y-1/2 h-0.5 bg-blue-500 w-16"></div>
          </div>
          <div className="relative py-4">
            <ContentWriting />
            <div className="absolute top-8 -left-20 transform -translate-y-1/2 h-0.5 bg-blue-500 w-16"></div>
          </div>
          <div className="relative py-4">
            <Finance />
            <div className="absolute top-8 -left-20 transform -translate-y-1/2 h-0.5 bg-blue-500 w-16"></div>
          </div>
        </div>
      </div>

      <Routes>
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
    </div>
  );
}

export default Jobs;
