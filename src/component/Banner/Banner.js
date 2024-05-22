import React, { useState, useEffect } from "react";
import image from "../../Assets/images/image.png";
import image1 from "../../Assets/images/image-3.jpg";
import image2 from "../../Assets/images/image-2.png";

const images = [image, image1, image2];

const textData = [
  {
    title: "Personalized Eyeglass Shopping",
    buttonText: "Buy Now",
  },
  {
    title: "Do the best you can until you know better",
    buttonText: "Shop Now",
  },
  {
    title: "I do not know anyone who has got to the top without hard work",
    buttonText: "Learn More",
  },
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 4000); 
    return () => clearInterval(timer);
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  return (
    <div className="bg-gray-100 text-black relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center h-screen space-y-4 md:space-y-0">
        <div className="md:w-6/12 p-4 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold">
            {textData[currentSlide].title}
          </h2>
          <button className="bg-yellow-500 text-white text-xl px-4 py-2 mt-4 rounded-lg">
            {textData[currentSlide].buttonText}
          </button>
        </div>
        <div className="md:w-6/12 relative">
          <img
            src={images[currentSlide]}
            alt={textData[currentSlide].title}
            className={`w-full h-auto ${
              imageLoaded
                ? "opacity-100"
                : "opacity-0 transition-opacity duration-3000"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute top-1/2 -mt-6 left-0 right-0 flex justify-between px-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-80"
            >
              {"<"}
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-80"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <div className="bg-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex flex-col items-center">
            <div className="p-4 bg-yellow-500 rounded-full">
              <span className="text-3xl text-white">🔍</span>
            </div>
            <h2 className="mt-2 text-lg font-semibold">Search your sunglass</h2>
            <p className="text-gray-500">Shop Stylish Eyewear Now</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-4 bg-yellow-500 rounded-full">
              <span className="text-3xl text-white">🕶️</span>
            </div>
            <h2 className="mt-2 text-lg font-semibold">Select Sunglass</h2>
            <p className="text-gray-500">Shade Your Style</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-4 bg-yellow-500 rounded-full">
              <span className="text-3xl text-white">💳</span>
            </div>
            <h2 className="mt-2 text-lg font-semibold">Make Payment</h2>
            <p className="text-gray-500">Securely Checkout Now</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-4 bg-yellow-500 rounded-full">
              <span className="text-3xl text-white">🚚</span>
            </div>
            <h2 className="mt-2 text-lg font-semibold">Received Product</h2>
            <p className="text-gray-500">See the World Clearly</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
