import React from "react";

const Experience = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center  bg-gray-50 mt-8 p-4">
      <div className="flex flex-col justify-center bg-yellow-200 p-6 md:w-1/2 rounded-lg fade-in">
        <h1 className="text-3xl font-bold mb-4 slide-in">
          Experience clear vision with OptiChroma Vision Frames
        </h1>
        <p className="mb-4 text-gray-700 slide-in">
          At OptiChroma, we believe that everyone deserves clear vision and
          stylish eyewear. That's why we've designed a collection of frames that
          prioritize both form and function.
        </p>
        <p className="mb-6 text-gray-700 slide-in">
          Our team of experts is dedicated to helping you find the perfect pair
          of glasses.
        </p>
        <button className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 slide-in">
          About Us
        </button>
      </div>
      <div className="flex justify-center items-center md:w-1/2 mt-6 md:mt-0">
        <img
          className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 fade-in"
          src="eye-glass/image-3.png"
          alt="OptiChroma Glasses"
        />
      </div>
    </div>
  );
};

export default Experience;
