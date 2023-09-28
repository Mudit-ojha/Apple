import React from "react";
import headphone1 from "../assets/headphone1.png";
import { toast } from "react-toastify";

const ProductPage = () => {
  const handleBuyNowClick = () => {
    toast.success("Moved to checkout page!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  const handleAddToWishlist = () => {
    toast.success("Product added to wishlist!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  const productDetails = {
    name: "Pro Headphones",
    price: 1999,
    description:
      "Experience superior sound quality with the Pro Headphones. These headphones deliver crisp and clear audio, making them perfect for music lovers and audiophiles.",
  };

  const reviews = [
    {
      id: 1,
      text: "The sound quality is amazing! I love these headphones 😍.",
    },
    {
      id: 2,
      text: "Great value for money 👌👌. Comfortable to wear for long periods.",
    },
    {
      id: 3,
      text: "Best headphones I've ever owned. Highly recommended!🤩",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={headphone1}
              alt={productDetails.name}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div>
            <h1 className="text-4xl font-semibold mb-4">
              {productDetails.name}
            </h1>
            <p className="text-2xl font-semibold text-primary mb-4">
              ₹{productDetails.price}
            </p>
            <p className="text-gray-600 mb-6">{productDetails.description}</p>
            <div className="flex items-center mb-6">
              <span className="text-gray-600 ml-2">(3 Reviews)</span>
            </div>
            <div className="flex space-x-4 mb-8">
              <button
                className="bg-black font-bold text-white btn btn-primary px-6 py-3 rounded-full hover:bg-opacity-80"
                onClick={handleBuyNowClick}
              >
                Buy Now
              </button>

              <button
                className="bg-black font-bold text-white btn btn-primary px-6 py-3 rounded-full hover:bg-opacity-80"
                onClick={handleAddToWishlist}
              >
                Add to Wishlist
              </button>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Product Reviews</h2>
            <ul>
              {reviews.map((review) => (
                <li key={review.id} className="mb-4">
                  <div className="flex items-center">
                    <p className="text-gray-600 ml-2">{review.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
