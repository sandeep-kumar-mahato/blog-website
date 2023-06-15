import React from "react";

export default function ContentWriting() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Content Writing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">Copywriting Essentials</h3>
          <p className="text-gray-700 text-sm text-justify">
            Learn the art of persuasive writing with our copywriting essentials
            course. Discover techniques for crafting compelling headlines,
            writing engaging content, and optimizing your copy for conversions.
            Elevate your writing skills and captivate your audience.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">
            Content Strategy Workshop
          </h3>
          <p className="text-gray-700 text-sm text-justify">
            Develop a solid content strategy that aligns with your business
            goals and engages your target audience. Learn how to create
            high-quality content, plan content calendars, and optimize content
            for different platforms. Elevate your content writing and marketing
            efforts.
          </p>
        </div>
      </div>
    </div>
  );
}
