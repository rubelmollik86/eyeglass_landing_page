import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      position: "CEO, Company A",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "testimonials-img/avata-1.png",
    },
    {
      name: "Jane Smith",
      position: "Founder, Company B",
      quote:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "testimonials-img/avata-2.png",
    },
    {
      name: "John Roe",
      position: "Founder, Company C",
      quote:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      image: "testimonials-img/avata-3.png",
    },
    {
      name: "Jane Doe",
      position: "Founder, Company D",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      image: "testimonials-img/avata-4.png",
    },
  ];

  return (
    <div>
      <Navbar />
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            WHAT THEY SAY ABOUT US
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                <div className="text-center">
                  <p className="text-lg font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Testimonials;
