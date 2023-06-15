import React from "react";

export default function Business() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Business</h2>
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">Entrepreneurship Tips</h3>
          <p className="text-gray-700 text-sm text-justify">
            Learn valuable entrepreneurship tips and strategies from successful
            business leaders. Discover how to start and grow your own business,
            navigate challenges, and stay ahead in the competitive business
            landscape.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">Market Updates</h3>
          <p className="text-gray-700 text-sm text-justify">
            Stay informed about the latest market trends, stock updates,
            financial news, and economic developments that impact businesses
            worldwide. Gain insights into investment opportunities and make
            well-informed decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
