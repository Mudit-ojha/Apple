import React from "react";

const faqData = [
  {
    question: "What is the quality of your products?",
    answer:
      "Our products are crafted with the highest quality materials to ensure durability and exceptional performance.",
  },
  {
    question: "Do you offer warranty for your products?",
    answer:
      "Yes, we offer a comprehensive warranty for all our products. Please check the product details for warranty information.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team through email at abc@example.com or by calling our toll-free number at 100.",
  },
  {
    question: "What is the quality of your products?",
    answer:
      "Our products are crafted with the highest quality materials to ensure durability and exceptional performance.",
  },
  {
    question: "Do you offer warranty for your products?",
    answer:
      "Yes, we offer a comprehensive warranty for all our products. Please check the product details for warranty information.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team through email at abc@example.com or by calling our toll-free number at 100.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-6xl font-semibold mb-12 text-center text-black">
          FAQ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqData.map((faq, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl text-blue-500 font-semibold mb-4">
                {faq.question}
              </h3>
              <p className="text-gray-600 font-medium">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
