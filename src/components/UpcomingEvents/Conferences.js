import React from "react";

export default function Conferences() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Conferences</h2>
      <div className="flex gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">Tech Conference 2023</h3>
          <p className="text-gray-700 text-sm text-justify">
            Join the biggest tech conference of the year and explore the latest
            innovations, technologies, and trends. Network with industry
            experts, attend insightful sessions, and gain valuable knowledge to
            advance your career.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">Business Conference 2023</h3>
          <p className="text-gray-700 text-sm text-justify">
            Attend the premier business conference featuring renowned speakers,
            interactive workshops, and networking opportunities. Discover
            strategies for business growth, leadership development, and
            navigating the dynamic business landscape.
          </p>
        </div>
      </div>
    </div>
  );
}
