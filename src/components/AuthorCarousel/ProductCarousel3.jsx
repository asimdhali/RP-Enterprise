import React, { useState, useEffect, useContext } from "react";
import productsJson from "../../../public/productData.json";
import { CartContext } from "../Root/Root";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCarousel3 = () => {
  const [productsData, setProductsData] = useState([]);
  const { addToCart, updateQuantity, removeFromCart, activeProductIds, cart } = useContext(CartContext);

  useEffect(() => {
    setProductsData(productsJson);
  }, []);

  const handleAddToCart = (product) => {
    const isAdded = addToCart(product);
    if (isAdded) {
      toast.success(`${product.productEnName} added to cart!`);
    } else {
      toast.warn(`${product.productEnName} is already in the cart!`);
    }
  };

  const handleIncreaseQuantity = (productId) => {
    const product = cart.find((item) => item.productID === productId);
    if (product && product.quantity < 5) {
      updateQuantity(productId, product.quantity + 1);
    }
  };

  const handleDecreaseQuantity = (productId) => {
    const product = cart.find((item) => item.productID === productId);
    if (product && product.quantity > 1) {
      updateQuantity(productId, product.quantity - 1);
    } else if (product && product.quantity === 1) {
      removeFromCart(productId);
    }
  };

  return (
    <div className="w-full mx-auto px-4 py-8">
      <ToastContainer position="top-center" autoClose={3000} />

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
            key={product.productID}
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
              <span className="flex flex-row justify-center items-center text-center space-x-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.productEnName}
                </h3>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  ({product.productBnName})
                </h3>
              </span>

              <div className="flex flex-row justify-between">
                <p className="text-gray-600 mb-2">{product.discountPrice} tk</p>
                <p className="text-gray-600 mb-2 line-through">
                  {product.originalPrice} tk
                </p>
              </div>
              <div className="text-center">{product.productUnit}</div>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                className={`mt-auto w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors duration-300 ${
                  activeProductIds.includes(product.productID) && cart.find((item) => item.productID === product.productID)?.quantity > 0 ? "hidden" : ""
                }`}
              >
                Add to Cart
              </button>
              {activeProductIds.includes(product.productID) && cart.find((item) => item.productID === product.productID)?.quantity > 0 && (
                <div className="mt-auto flex justify-between items-center">
                  <button
                    onClick={() => handleDecreaseQuantity(product.productID)}
                    className="bg-gray-300 text-gray-800 py-1 px-3 rounded hover:bg-gray-400 transition-colors duration-300"
                  >
                    -
                  </button>
                  <span>{cart.find((item) => item.productID === product.productID)?.quantity || 1}</span>
                  <button
                    onClick={() => handleIncreaseQuantity(product.productID)}
                    className="bg-gray-300 text-gray-800 py-1 px-3 rounded hover:bg-gray-400 transition-colors duration-300"
                  >
                    +
                  </button>
                </div>
              )}
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
