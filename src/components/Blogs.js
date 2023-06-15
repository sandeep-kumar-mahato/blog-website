import React from "react";

function Blogs() {
  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Technology</h3>
              <ul className="list-disc list-inside">
                <li>Top tech trends in 2023</li>
                <li>The future of artificial intelligence</li>
                <li>Web development best practices</li>
                <li>Mobile app development frameworks</li>
                <li>Cybersecurity essentials for businesses</li>
              </ul>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Health & Wellness</h3>
              <ul className="list-disc list-inside">
                <li>Tips for maintaining a healthy lifestyle</li>
                <li>Mental health awareness and self-care</li>
                <li>The benefits of regular exercise</li>
                <li>Healthy recipes for busy individuals</li>
                <li>Natural remedies for common ailments</li>
              </ul>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Travel & Adventure</h3>
              <ul className="list-disc list-inside">
                <li>Exploring hidden gems around the world</li>
                <li>Tips for planning a memorable vacation</li>
                <li>Adventure sports and adrenaline rush</li>
                <li>Travel photography tips and tricks</li>
                <li>Local cuisines to try during your travels</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Blogs;
