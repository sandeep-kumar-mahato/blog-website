import React from "react";

export default function Hackathons() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Hackathons</h2>
      <div className="flex gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">CodeJam Hackathon</h3>
          <p className="text-gray-700 text-sm text-justify">
            Participate in our CodeJam Hackathon and showcase your coding
            skills. Collaborate with a team to solve real-world challenges
            within a specified timeframe. Compete against other talented
            developers and win exciting prizes.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">Innovation Hackathon</h3>
          <p className="text-gray-700 text-sm text-justify">
            Join our Innovation Hackathon and unleash your creativity. Solve
            complex problems, brainstorm innovative ideas, and develop
            prototypes. Collaborate with multidisciplinary teams and present
            your solutions to a panel of experts.
          </p>
        </div>
      </div>
    </div>
  );
}
