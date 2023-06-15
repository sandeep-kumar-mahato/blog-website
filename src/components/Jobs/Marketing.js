import React from "react";

export default function Marketing() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Marketing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">
            Digital Marketing Strategies
          </h3>
          <p className="text-gray-700 text-sm text-justify">
            Discover the latest digital marketing strategies and tactics to
            drive online success. Learn about SEO, social media marketing,
            content marketing, and analytics to effectively promote your brand
            and reach your target audience.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-base font-bold mb-2">
            Email Marketing Campaigns
          </h3>
          <p className="text-gray-700 text-sm text-justify">
            Unlock the power of email marketing with our comprehensive workshop.
            Learn how to create engaging email campaigns, optimize conversions,
            and build strong customer relationships through effective email
            communication.
          </p>
        </div>
      </div>
    </div>
  );
}
