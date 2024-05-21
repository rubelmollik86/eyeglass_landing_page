import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white lg:p-8 shadow-md">
      <div className=" px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-800">
            <span className="text-black">Eye</span>
            <span className="text-yellow-500">Glass</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-black">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-black">
              About Us
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-black">
              Products
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-black">
              Features
            </Link>
            <Link to="/reviews" className="text-gray-700 hover:text-black">
              Reviews
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-black">
              Contact Us
            </Link>
          </div>
          <div className="flex space-x-4">
            <button className="text-gray-700 hover:text-black">
              <i className="fas fa-shopping-cart"></i>
            </button>
            <button className="text-gray-700 hover:text-black">
              <i className="fas fa-user"></i>
            </button>
          </div>
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-black">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
