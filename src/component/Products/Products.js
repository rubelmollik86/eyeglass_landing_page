import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const products = [
  {
    name: "Bravo Sunglasses",
    price: 100,
    oldPrice: 150,
    discount: 10,
    img: "eye-glass/image-1.png",
  },
  {
    name: "Vincent Chase",
    price: 120,
    oldPrice: 150,
    discount: 10,
    img: "eye-glass/image-2.png",
  },
  {
    name: "John Jacobs",
    price: 100,
    oldPrice: 150,
    discount: 10,
    img: "eye-glass/image-3.png",
  },
  {
    name: "Tommy Hilfiger",
    price: 130,
    oldPrice: 150,
    discount: 10,
    img: "eye-glass/image-4.png",
  },
  {
    name: "Ray Ban",
    price: 100,
    oldPrice: 150,
    discount: 10,
    img: "eye-glass/image-5.png",
  },
  {
    name: "Occhiali",
    price: 110,
    oldPrice: 150,
    discount: 10,
    img: "eye-glass/image-6.png",
  },
];

const ProductCard = ({ product }) => {
    return (
      <div>
      
        <div className="bg-white shadow-md rounded-md p-4">
          <div className="relative">
            <img
              className="w-full h-40 object-cover rounded-md"
              src={product.img}
              alt={product.name}
            />
            <div className="absolute top-2 left-2 bg-yellow-400 text-white text-xs px-2 py-1 rounded-full">
              {product.discount}%
            </div>
            <div className="absolute top-2 right-2 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
            </div>
          </div>
          <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
          <div className="flex items-center justify-between mt-2">
            <span className="text-lg font-bold text-gray-800">
              ${product.price}
            </span>
            <span className="text-sm line-through text-gray-500">
              ${product.oldPrice}
            </span>
          </div>
          <button className="mt-4 w-full bg-black text-white py-2 rounded-md">
            Add To Cart
          </button>
        </div>
      </div>
    );
};

const Product = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Our Products</h1>
          <p className="text-gray-600">
            Experience crystal clear vision and elevated style with our premium
            collection of eyeglasses.
          </p>
          <div className="mt-4 flex space-x-2">
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded">
              Latest
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white rounded">
              Special
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded">
              Best sell
            </button>
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Product;
