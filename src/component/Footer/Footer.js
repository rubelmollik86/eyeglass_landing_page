import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 mt-8">
      <div className="container mx-auto px-6 md:px-12 ">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h2 className="text-2xl font-bold text-gray-900">
              Eye<span className="text-yellow-500">Glass</span>
            </h2>
            <p className="mt-4 text-gray-700">
              Latin literature from 45 BC, making it over 2000 years old.
              Richard McClintock, a Latin professor at Hampde.
            </p>
            <div className="flex mt-4 space-x-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap justify-between md:space-x-8 w-full md:w-3/4 lg:ps-16">
            <div className="w-1/2 md:w-1/4 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Support
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>
                  <button
                    onClick={() => alert("Privacy Policy")}
                    className="hover:text-gray-900"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => alert("Terms & Conditions")}
                    className="hover:text-gray-900"
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => alert("Product FAQs")}
                    className="hover:text-gray-900"
                  >
                    Product FAQs
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => alert("Company Support")}
                    className="hover:text-gray-900"
                  >
                    Company Support
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => alert("Manage Account")}
                    className="hover:text-gray-900"
                  >
                    Manage Account
                  </button>
                </li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/4 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Links
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>
                  <button
                    onClick={() => alert("About Us")}
                    className="hover:text-gray-900"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => alert("Blog Post")}
                    className="hover:text-gray-900"
                  >
                    Blog Post
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => alert("Product Features")}
                    className="hover:text-gray-900"
                  >
                    Product Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => alert("Company Info")}
                    className="hover:text-gray-900"
                  >
                    Company Info
                  </button>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Community
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>
                  <button
                    onClick={() => alert("Become an affiliate")}
                    className="hover:text-gray-900"
                  >
                    Become an affiliate
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => alert("Help Center")}
                    className="hover:text-gray-900"
                  >
                    Help Center
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => alert("Product FAQs")}
                    className="hover:text-gray-900"
                  >
                    Product FAQs
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => alert("Our Forums")}
                    className="hover:text-gray-900"
                  >
                    Our Forums
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => alert("Product API")}
                    className="hover:text-gray-900"
                  >
                    Product API
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-gray-600">
            &copy; 2023 All rights reserved by Eyeglass
          </p>
          <div className="mt-4">
            <a href="#" className="text-gray-500 hover:text-gray-900 mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              Terms of service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
