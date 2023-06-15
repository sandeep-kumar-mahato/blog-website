import React from "react";

export default function Exhibitions() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Exhibitions</h2>
      <div className="flex gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">Art Exhibition</h3>
          <p className="text-gray-700 text-sm text-justify">
            Immerse yourself in the world of art at our art exhibition. Explore
            a diverse range of artworks, including paintings, sculptures,
            installations, and digital art. Engage with artists, gain artistic
            inspiration, and appreciate creative expressions.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">Technology Expo</h3>
          <p className="text-gray-700 text-sm text-justify">
            Discover the latest technological advancements at our technology
            expo. Experience innovative products and services across various
            industries. Interact with technology experts, attend demos, and
            explore cutting-edge solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
