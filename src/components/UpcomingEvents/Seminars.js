import React from "react";

export default function Seminars() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Seminars</h2>
      <div className="flex gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">
            Leadership and Team Management Seminar
          </h3>
          <p className="text-gray-700 text-sm text-justify">
            Enhance your leadership and team management skills with our
            interactive seminar. Learn effective communication, decision-making,
            and conflict resolution techniques. Develop strategies to motivate
            and inspire your team for high-performance results.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">
            Financial Planning Seminar
          </h3>
          <p className="text-gray-700 text-sm text-justify">
            Attend our financial planning seminar to learn about personal
            finance, budgeting, investment strategies, retirement planning, and
            risk management. Gain the knowledge and skills to make informed
            financial decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
