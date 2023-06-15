import React from "react";

export default function Entertainment() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Entertainment</h2>
      <div className="flex gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">Movie Reviews</h3>
          <p className="text-gray-700 text-sm text-justify">
            Get the latest reviews and recommendations for movies. From
            blockbuster hits to indie films, stay informed about the best movies
            to watch and the ones to avoid.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">Music Releases</h3>
          <p className="text-gray-700 text-sm text-justify">
            Stay tuned to the newest music releases from your favorite artists.
            Discover new albums, singles, and music videos across various genres
            and enjoy the latest sounds in the entertainment industry.
          </p>
        </div>
      </div>
    </div>
  );
}
