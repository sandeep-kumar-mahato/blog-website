import React from "react";

export default function Technology() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Technology</h2>
      <div className="flex gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">Latest Tech Gadgets</h3>
          <p className="text-gray-700 text-sm text-justify">
            Discover the newest and most innovative tech gadgets hitting the
            market. From smartphones to smart home devices, stay up to date with
            the latest advancements in technology.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">
            Artificial Intelligence Trends
          </h3>
          <p className="text-gray-700 text-sm text-justify">
            Explore the exciting developments and trends in artificial
            intelligence. Learn about AI applications, machine learning models,
            and how AI is transforming various industries.
          </p>
        </div>
      </div>
    </div>
  );
}
