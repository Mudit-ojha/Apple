import React from "react";
import { useNavigate } from "react-router-dom";
import headphone1 from "../assets/headphone1.png";
import FeatureSection from "./FeatureSection";
import ProductList from "./PricingSection";
import FAQSection from "./FAQSection";
import Contact from "./Contact";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleBuyNowClick = () => {
    navigate("/product-card");
  };

  return (
    <section id="hero" className="hero bg-gray-900 text-white py-16 relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-semibold mb-4">
            Experience Music Like Never Before
          </h1>
          <p className="text-lg mb-8">
            Discover the ultimate audio experience with our premium Headphones.
          </p>
          <button
            onClick={handleBuyNowClick}
            className="btn bg-gray-100 py-2 px-4 text-gray-800 rounded-2xl font-bold btn-primary cursor-pointer"
          >
            Buy Now
          </button>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <div className="relative rounded-lg shadow-lg ml-24">
            <img src={headphone1} alt="AirPods" className="rounded-lg" />
          </div>
        </div>
      </div>

      <FeatureSection />
      <ProductList />
      <FAQSection />
      <Contact />
    </section>
  );
};

export default HeroSection;
