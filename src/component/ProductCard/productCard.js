import React from "react";

export const productCard = ({ products, handleAddToCart }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((product) => (
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
            <button
              className="mt-4 w-full bg-black text-white py-2 rounded-md"
              onClick={() => handleAddToCart(product, "add")}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default productCard;
