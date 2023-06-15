import React from "react";

export default function DataScience() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Data Science</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">
            Introduction to Data Science
          </h3>
          <p className="text-gray-700 text-sm text-justify">
            Dive into the world of data science with our introductory workshop.
            Learn about data analysis, statistical modeling, machine learning,
            and data visualization. Gain hands-on experience with popular tools
            and techniques used in the field of data science.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">
            Predictive Analytics Workshop
          </h3>
          <p className="text-gray-700 text-sm text-justify">
            Discover the power of predictive analytics in our hands-on workshop.
            Learn how to build predictive models, perform data preprocessing,
            and make data-driven decisions. Explore real-world applications of
            predictive analytics across various industries.
          </p>
        </div>
      </div>
    </div>
  );
}
