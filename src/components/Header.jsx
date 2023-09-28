import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  const handleBuyNowClick = () => {
    nav("/product-card");
  };
  return (
    <header className="bg-gray-900 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="logo cursor-pointer">
          <Link to="hero" spy={true} smooth={true} duration={500}>
            <img src={logo} className="w-12 h-12" alt="Logo" />
          </Link>
        </div>
        <ul className="flex space-x-6">
          <li className="cursor-pointer">
            <Link to="features" spy={true} smooth={true} duration={1500}>
              Features
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="pricing" spy={true} smooth={true} duration={1500}>
              Pricing
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="faq" spy={true} smooth={true} duration={1500}>
              FAQ
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="contact" spy={true} smooth={true} duration={1500}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="cta">
          <button
            onClick={handleBuyNowClick}
            className="btn bg-gray-100 py-2 px-4 text-gray-800 rounded-2xl font-bold btn-primary cursor-pointer"
          >
            Buy Now
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
