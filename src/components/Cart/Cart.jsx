import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CartList = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Bagda Chingri",
      img: "https://i.ibb.co.com/xMJ0PX3/cingri.jpg",
      price: 1200,
      quantity: 1,
    },
    {
      id: 2,
      title: "Palon Shak",
      img: "https://i.ibb.co.com/7yJ67Tm/palonshak.jpg",
      price: 30,
      quantity: 2,
    },
    {
      id: 3,
      title: "Kakra",
      img: "https://i.ibb.co.com/MBY5Cct/kakra.jpg",
      price: 350,
      quantity: 1,
    },
  ]);

  const navigate = useNavigate();

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "increase" ? item.quantity + 1 : item.quantity - 1,
            }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleProceedToCheckout = () => {
    navigate("/checkout"); // Navigate to the checkout page
  };

  return (
    <div className="w-full mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between py-4 border-b"
              >
                <div className="flex items-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      ৳{item.price} per unit
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleQuantityChange(item.id, "decrease")}
                    className="text-gray-600 hover:text-gray-800"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, "increase")}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right">
            <p className="text-xl font-semibold">Total: ৳{calculateTotal()}</p>
            <button
              onClick={handleProceedToCheckout} // Navigate to checkout page on click
              className="mt-4 bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartList;
