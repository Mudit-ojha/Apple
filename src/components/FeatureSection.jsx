import React from "react";
import headphone from "../assets/headphone.png";
import headphone1 from "../assets/headphone1.png";

const features = [
  {
    title: "High-Quality Sound",
    description: "Experience crisp and clear audio like never before.",
    icon: headphone,
  },
  {
    title: "Long Battery Life",
    description:
      "Enjoy uninterrupted music with long-lasting battery performance.",
    icon: headphone1,
  },
  {
    title: "Military Based Quality",
    description:
      "Never seen before Durability, with Water resistance technology.",
    icon: headphone,
  },
  {
    title: "High-Quality Sound",
    description: "Experience crisp and clear audio like never before.",
    icon: headphone,
  },
  {
    title: "Long Battery Life",
    description:
      "Enjoy uninterrupted music with long-lasting battery performance.",
    icon: headphone1,
  },
  {
    title: "Military Based Quality",
    description:
      "Never seen before Durability, with Water resistance technology.",
    icon: headphone,
  },
];

const FeatureSection = () => {
  return (
    <section id="features" className="bg-white py-12">
      <div className="container mx-auto my-2 text-center">
        <h2 className="text-6xl font-semibold mb-8 text-gray-900">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-lg transition-transform transform hover:scale-105 text-gray-900"
            >
              <div className="mb-4">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="mx-auto w-16 h-16"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
