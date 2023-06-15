import React from "react";

export default function Meetups() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Meetups</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">
            Frontend Developer Meetup
          </h3>
          <p className="text-gray-700 text-sm text-justify">
            Join our frontend developer meetup and connect with fellow web
            developers. Share knowledge, discuss the latest web development
            trends, and collaborate on projects. Expand your professional
            network and stay updated with industry insights.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">Entrepreneurs Meetup</h3>
          <p className="text-gray-700 text-sm text-justify">
            Network with like-minded entrepreneurs and startup enthusiasts in
            our meetup. Share experiences, exchange ideas, and learn from
            successful entrepreneurs. Build valuable connections and explore
            potential collaborations.
          </p>
        </div>
      </div>
    </div>
  );
}
