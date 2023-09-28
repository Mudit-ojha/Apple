import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h4 className="text-2xl font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h4 className="text-2xl font-semibold mb-2">Contact Us</h4>
          <p className="text-gray-400">
            Email: <a href="mailto:contact@example.com">contact@example.com</a>
          </p>
          <p className="text-gray-400">
            Phone: <a href="tel:+1234567890">1234567890</a>
          </p>
        </div>
      </div>
      <hr className="border-t border-gray-700 my-4" />
      <div className="text-center text-gray-400">
        &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
