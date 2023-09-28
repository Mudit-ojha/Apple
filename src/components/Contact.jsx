import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <form>
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold text-lg">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold text-lg">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold text-lg">
                  Message
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 text-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Contact Information
            </h3>
            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                Email: <span className="text-gray-600">xyz@example.com</span>
              </p>
            </div>
            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                Phone: <span className="text-gray-600">123-456-7890</span>
              </p>
            </div>
            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                Address:{" "}
                <span className="text-gray-600">
                  123 Kanpur, UttarPradesh, India
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
