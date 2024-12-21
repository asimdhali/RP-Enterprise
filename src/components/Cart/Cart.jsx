import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../Root/Root";
import { Link } from "react-router-dom";

const CartList = () => {
  const { cart, removeFromCart, updateQuantity, setCart, setInitialCartCount } = useContext(CartContext);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const total = cart.reduce(
      (sum, item) => sum + item.discountPrice * item.quantity,
      0
    );
    setTotalAmount(total);
  }, [cart]);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Add items before proceeding to checkout.");
      return;
    }
    alert(`Proceeding to checkout. Total: ${totalAmount.toFixed(2)} tk`);
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

  const handleClearCart = () => {
    setCart([]);
    setInitialCartCount(0);
    localStorage.removeItem("cart");
    localStorage.removeItem("activeProductIds");
    localStorage.removeItem("initialCartCount");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        {cart.length > 0 && (
          <button
            onClick={handleClearCart}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300"
          >
            Clear
          </button>
        )}
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.productID} 
                className="bg-white rounded-lg shadow-md overflow-hidden flex items-center p-4"
              >
                <img
                  src={item.imageUrl}
                  alt={item.productEnName}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{item.productEnName}</h3>
                  <p>{item.productBnName}</p>
                  <p>
                    <span className="text-gray-600">Price: </span>
                    {item.discountPrice} tk
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">Quantity: </span>
                    <button
                      onClick={() => handleDecreaseQuantity(item.productID)}
                      className="bg-gray-300 text-gray-800 py-1 px-3 rounded hover:bg-gray-400 transition-colors duration-300"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleIncreaseQuantity(item.productID)}
                      className="bg-gray-300 text-gray-800 py-1 px-3 rounded hover:bg-gray-400 transition-colors duration-300"
                    >
                      +
                    </button>
                  </div>
                  <p className="mt-2 text-gray-600">
                    Total: {item.discountPrice * item.quantity} tk
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.productID)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md text-right">
            <h3 className="text-xl font-bold">
              Total: <span className="text-green-600">{totalAmount.toFixed(2)} tk</span>
            </h3>
          </div>

          <div className="mt-6 flex justify-end">
            <Link to={'/checkout'}
              onClick={handleCheckout}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors duration-300"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartList;
