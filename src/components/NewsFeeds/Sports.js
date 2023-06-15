import React from "react";

export default function Sports() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Sports</h2>
      <div className="flex gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">Football News</h3>
          <p className="text-gray-700 text-sm text-justify">
            Stay updated with the latest football news, including match
            highlights, transfer rumors, player interviews, and analysis of
            major football events happening around the world.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">Basketball Updates</h3>
          <p className="text-gray-700 text-sm text-justify">
            Catch up on the latest basketball updates, including game scores,
            player stats, team rankings, and news about the NBA and other
            basketball leagues.
          </p>
        </div>
      </div>
    </div>
  );
}
