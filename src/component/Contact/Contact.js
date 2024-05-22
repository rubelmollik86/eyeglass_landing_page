import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import Navber from "../../component/Navbar/Navbar.js";
import Footer from "../../component/Footer/Footer";

function ContactSection() {
  return (
    <div>
      <Navber />
      <section className="p-4 md:p-8 bg-gray-100 mt-20 mb-36">
        <div className="container mx-auto flex flex-wrap items-center">
          {/* First Column: Contact Information */}
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <div className="p-4">
              <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
              <div className="flex items-center mt-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-orange-500 mr-2"
                />
                <p>Email: info@example.com</p>
              </div>
              <div className="flex items-center mt-2">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-orange-500 mr-2"
                />
                <p>Phone: +1 (123) 456-7890</p>
              </div>
              <div className="flex items-center mt-2">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-orange-500 mr-2"
                />
                <p>123 Street, City, Country</p>
              </div>
              <div className="mt-4">{/* Add social media icons here */}</div>
            </div>
          </div>

          {/* Second Column: Contact Form */}
          <div className="w-full md:w-1/2">
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Contact Us</h3>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border rounded-lg py-2 px-3 w-full"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="border rounded-lg py-2 px-3 w-full"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="border rounded-lg py-2 px-3 w-full"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="border rounded-lg py-2 px-3 w-full"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Your Message"
                    className="border rounded-lg py-2 px-3 w-full h-32"
                  ></textarea>
                </div>
                <button
                  className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ContactSection;
