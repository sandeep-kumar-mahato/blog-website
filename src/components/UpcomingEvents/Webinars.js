import React from "react";

export default function Webinars() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Webinars</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">
            Introduction to Artificial Intelligence
          </h3>
          <p className="text-gray-700 text-sm text-justify">
            Join our webinar on artificial intelligence and get an introduction
            to this exciting field. Learn about machine learning, neural
            networks, and applications of AI in various industries. Gain
            insights into the future of AI and its impact on society.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">
            Effective Time Management Webinar
          </h3>
          <p className="text-gray-700 text-sm text-justify">
            Improve your productivity and time management skills with our
            webinar. Learn practical techniques for prioritizing tasks,
            overcoming procrastination, and achieving work-life balance. Boost
            your efficiency and make the most of your time.
          </p>
        </div>
      </div>
    </div>
  );
}
