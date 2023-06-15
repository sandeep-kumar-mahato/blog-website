import React from "react";

export default function Finance() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Finance</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">
            Financial Planning Workshop
          </h3>
          <p className="text-gray-700 text-sm text-justify">
            Learn the principles of effective financial planning to achieve your
            personal and business goals. Understand budgeting, investment
            strategies, retirement planning, and risk management. Gain the
            knowledge and skills to make informed financial decisions.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">
            Financial Analysis Seminar
          </h3>
          <p className="text-gray-700 text-sm text-justify">
            Join our financial analysis seminar and enhance your skills in
            analyzing financial statements, evaluating investment opportunities,
            and assessing business performance. Gain insights into financial
            modeling techniques and tools used in financial analysis.
          </p>
        </div>
      </div>
    </div>
  );
}
