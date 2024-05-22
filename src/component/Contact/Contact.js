import React from "react";
import Navber from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const ContactForm = () => {
  return (
    <div>
      <Navber />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4 mt-10">
        <div className="flex flex-col items-start p-6 w-1/2  bg-white shadow-md rounded-md md:mr-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <div className="mb-4">
            <p className="font-medium">Email:</p>
            <p>info@example.com</p>
          </div>
          <div className="mb-4">
            <p className="font-medium">Phone:</p>
            <p>+1 (123) 456-7890</p>
          </div>
          <div>
            <p className="font-medium">Address:</p>
            <p>123 Street, City, Country</p>
          </div>
        </div>
        <div className="flex flex-col p-6 w-1/2 bg-white shadow-md rounded-md mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-2 border rounded"
            />
            <textarea
              placeholder="Your Message"
              className="p-2 border rounded"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-white p-2 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactForm;
