import React from "react";

export default function Health() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Health</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">Fitness Tips</h3>
          <p className="text-gray-700 text-sm text-justify">
            Discover fitness tips, exercise routines, and healthy living advice
            to improve your physical well-being. Learn about nutrition, workout
            plans, and ways to maintain an active lifestyle.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">Mental Health Awareness</h3>
          <p className="text-gray-700 text-sm text-justify">
            Explore topics related to mental health, including stress
            management, mindfulness techniques, and strategies for maintaining
            emotional well-being. Learn how to prioritize self-care and promote
            mental wellness.
          </p>
        </div>
      </div>
    </div>
  );
}
