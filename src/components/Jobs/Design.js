import React from "react";

export default function Design() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Design</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">UI/UX Design Workshop</h3>
          <p className="text-gray-700 text-sm text-justify">
            Join our interactive workshop on UI/UX design and learn the
            principles of creating user-friendly interfaces. Gain practical
            skills in wireframing, prototyping, and user research to design
            exceptional digital experiences.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">
            Graphic Design Masterclass
          </h3>
          <p className="text-gray-700 text-sm text-justify">
            Enhance your graphic design skills with our masterclass led by
            industry professionals. Explore advanced techniques in typography,
            color theory, and visual composition to create stunning visual
            designs for various mediums.
          </p>
        </div>
      </div>
    </div>
  );
}
