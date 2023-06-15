import React from "react";

export default function Workshops() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Workshops</h2>
      <div className="flex gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">Web Development Workshop</h3>
          <p className="text-gray-700 text-sm text-justify">
            Join our web development workshop and learn the fundamentals of
            building interactive and responsive websites. Explore HTML, CSS,
            JavaScript, and popular web development frameworks. Build your own
            website from scratch and enhance your coding skills.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">
            Digital Marketing Workshop
          </h3>
          <p className="text-gray-700 text-sm text-justify">
            Discover the world of digital marketing in our comprehensive
            workshop. Learn about SEO, social media marketing, content
            marketing, and online advertising. Develop effective digital
            marketing strategies and boost your online presence.
          </p>
        </div>
      </div>
    </div>
  );
}
