import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ quentity }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white lg:p-8 shadow-md ">
      <div className="px-4">
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
              <i className="fas fa-shopping-cart relative inline-flex items-center p-3 text-sm font-medium text-center focus:ring-4 focus:outline-none focus:ring-blue-300">
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-yellow-400 border-2 border-white rounded-full -top-2 -end-2">
                  {quentity}
                </div>
              </i>
            </button>
            <button className="text-gray-700 hover:text-black">
              <i className="fas fa-user"></i>
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-black"
            >
              <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden">
            <Link to="/" className="block text-gray-700 hover:text-black py-2">
              Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-black py-2"
            >
              About Us
            </Link>
            <Link
              to="/products"
              className="block text-gray-700 hover:text-black py-2"
            >
              Products
            </Link>
            <Link
              to="/features"
              className="block text-gray-700 hover:text-black py-2"
            >
              Features
            </Link>
            <Link
              to="/reviews"
              className="block text-gray-700 hover:text-black py-2"
            >
              Reviews
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-black py-2"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
