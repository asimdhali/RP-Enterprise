import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../Root/Root";

const CartList = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
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

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
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
                  <p>
                    <span className="text-gray-600">Quantity: </span>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(
                          item.productID,
                          Math.max(1, parseInt(e.target.value, 10))
                        )
                      }
                      className="w-12 text-center border rounded"
                    />
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
            <button
              onClick={handleCheckout}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartList;
