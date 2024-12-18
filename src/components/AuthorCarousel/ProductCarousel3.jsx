import React, { useState, useEffect } from "react";
import productsJson from "../../../public/productData.json";

const ProductCarousel3 = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    // Load products data on component mount
    setProductsData(productsJson);
  }, []);

  return (
    <div className="w-full mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Popular Products
        </h2>
        <a
          href="/products"
          className="hidden md:block text-blue-600 hover:text-blue-700 transition-colors duration-300"
        >
          View All
        </a>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {productsData.slice(0, 20).map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden h-[400px] flex flex-col"
          >
            {/* Product Image */}
            <div className="relative h-48">
              <img
                src={product.imageUrl}
                alt={product.productEnName}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Product Details */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.productEnName}
              </h3>
              <div className="flex flex-row justify-between">
                <p className="text-gray-600 mb-2">{product.productPrice}</p>
                <p className="text-gray-600 mb-2 line-through">
                  {product.productPrice}
                </p>
              </div>

              {/* Add to Cart Button */}
              <button className="mt-auto w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View All Link */}
      <div className="mt-6 text-center md:hidden">
        <a
          href="/products"
          className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
        >
          View All
        </a>
      </div>
    </div>
  );
};

export default ProductCarousel3;
