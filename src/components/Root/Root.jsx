import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar3 from "../Navbar/Navbar3"; // Ensure this path is correct

// Create contexts
export const CartContext = createContext();
export const WishlistContext = createContext();

// Define CartProvider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let isAdded = false;
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.productID === product.productID
      );

      if (existingProduct) {
        // If product already exists, return the cart unchanged
        return prevCart;
      }

      isAdded = true; // New product added
    return [...prevCart, { ...product, quantity: 1 }];
    });
    return isAdded;
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.productID !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.productID === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Define WishlistProvider
export const WishlistProvider = ({ children }) => {
  const [wCart, setWCart] = useState([]);

  const addToWishlist = (item) => {
    setWCart((prevWCart) => {
      const existingItem = prevWCart.find((wishlistItem) => wishlistItem.id === item.id);

      if (existingItem) {
        return prevWCart; // Avoid duplicates
      } else {
        return [...prevWCart, item];
      }
    });
  };

  const removeFromWishlist = (itemId) => {
    setWCart((prevWCart) => prevWCart.filter((item) => item.id !== itemId));
  };

  return (
    <WishlistContext.Provider value={{ wCart, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default function Root() {
  return (
    <WishlistProvider>
      <CartProvider>
        <div>
          {/* Navbar3 is being used; if switching Navbars dynamically, ensure routing works */}
          <Navbar3 />
          <Outlet />
          <Footer />
        </div>
      </CartProvider>
    </WishlistProvider>
  );
}
