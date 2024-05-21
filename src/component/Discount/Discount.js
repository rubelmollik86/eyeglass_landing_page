import React from "react";

const SunglassesPromo = () => {
  return (
    <div className="container mx-auto flex flex-wrap justify-center items-center p-4 bg-gray-100">
      <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="dicount-images/person-1.jpeg"
            alt="Bravo Sunglasses"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Bravo Sunglasses</h2>
            <p className="text-gray-700">Up to 80% off on selected item</p>
            <button className="mt-4 bg-black text-white py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="dicount-images/person-2.jpeg"
            alt="Tommy Hilfiger"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Tommy Hilfiger</h2>
            <p className="text-gray-700">Up to 30% off on selected item</p>
            <button className="mt-4 bg-black text-white py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="dicount-images/person-3.jpeg"
            alt="John Jacobs"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">John Jacobs</h2>
            <p className="text-gray-700">Up to 40% off on selected item</p>
            <button className="mt-4 bg-black text-white py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="dicount-images/person-4.jpeg"
            alt="Vincent Chase"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Vincent Chase</h2>
            <p className="text-gray-700">Up to 10% off on selected item</p>
            <button className="mt-4 bg-black text-white py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunglassesPromo;
