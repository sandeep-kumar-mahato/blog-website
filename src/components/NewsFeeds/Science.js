import React from "react";

export default function Science() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Science</h2>
      <div className="flex gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">Space Exploration</h3>
          <p className="text-gray-700 text-sm text-justify">
            Dive into the fascinating world of space exploration. Stay updated
            with the latest discoveries, missions, and advancements in
            astronomy, astrophysics, and planetary science.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">Scientific Breakthroughs</h3>
          <p className="text-gray-700 text-sm text-justify">
            Learn about the most recent scientific breakthroughs across various
            fields, including biology, chemistry, physics, and environmental
            science. Stay informed about groundbreaking research and its
            potential impact on society.
          </p>
        </div>
      </div>
    </div>
  );
}
