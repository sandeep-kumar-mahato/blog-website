import React from "react";

export default function Sales() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Sales</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">
            Effective Sales Techniques
          </h3>
          <p className="text-gray-700 text-sm text-justify">
            Master the art of selling with our comprehensive sales techniques
            workshop. Learn proven strategies for lead generation, prospecting,
            negotiation, and closing deals. Enhance your communication and
            persuasion skills to boost sales performance.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">Sales Management Seminar</h3>
          <p className="text-gray-700 text-sm text-justify">
            Join our sales management seminar and gain insights into effective
            sales team leadership. Learn how to motivate and coach your sales
            team, set targets, analyze sales data, and drive revenue growth
            through strategic sales management practices.
          </p>
        </div>
      </div>
    </div>
  );
}
