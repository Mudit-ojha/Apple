import React from "react";
import headphone from "../assets/headphone.png";
import headphone1 from "../assets/headphone1.png";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Product 1",
    price: 1200,
    image: headphone,
  },
  {
    name: "Product 2",
    price: 2499,
    image: headphone1,
  },
  {
    name: "Product 3",
    price: 1999,
    image: headphone,
  },
  // Add more products as needed
];

const ProductList = () => {
  return (
    <section id="pricing" className="bg-gray-800 py-12 ">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl font-semibold text-gray-100 mb-8 py-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 relative"
            >
              <div className="mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="mx-auto w-64 h-64 object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                {product.name}
              </h3>
              <p className="text-3xl font-semibold mb-2 text-black">
                ₹{product.price}
              </p>
              <Link to="/product-card">
                <button className=" bg-blue-600 text-white btn btn-primary px-6 py-2 rounded-full mt-4 relative overflow-hidden group">
                  Buy Now
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
