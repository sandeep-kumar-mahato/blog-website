import React from "react";

export default function SoftwareDevelopment() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Software Development</h2>
      <div className="flex gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">
            Introduction to JavaScript
          </h3>
          <p className="text-gray-700 text-sm text-justify">
            Learn the fundamentals of JavaScript programming language and
            explore its applications in web development. Master essential
            concepts like variables, functions, conditionals, and loops to kick
            start your software development journey.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">React Workshop</h3>
          <p className="text-gray-700 text-sm text-justify">
            Dive deep into React, the popular JavaScript library for building
            user interfaces. Gain hands-on experience in creating interactive
            web applications using React components, state management, and
            routing.
          </p>
        </div>
      </div>
    </div>
  );
}
