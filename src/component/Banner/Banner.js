import React, { useState, useEffect } from "react";
import image from "../../Assets/images/image.png";
import image1 from "../../Assets/images/image-3.jpg";
import image2 from "../../Assets/images/image-2.png";

const images = [image, image1, image2];

const textData = [
  {
    title: "Big World Out There",
  },
  {
    title: "Do the best you can until you know better",
  },
  {
    title: "I do not know anyone who has got to the top without hard work",
  },
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(timer);
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  return (
    <div className="bg-white-700 text-black relative">
      <div className="container mx-auto flex flex-wrap justify-center items-center h-screen">
        <div className="w-full md:w-4/12 p-4">
          <h2 className="text-3xl font-bold">{textData[currentSlide].title}</h2>
          <p>{textData[currentSlide].description}</p>
          <button className="bg-orange-500 text-white text-xl px-4 py-2 mt-4 rounded-lg">
            Buy Now
          </button>
        </div>
        <div className="w-full md:w-8/12 relative">
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
          <div className="absolute top-1/2 -mt-6 left-0 right-0 flex justify-between">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-80"
            >
              {"<"}
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover-bg-opacity-80"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
