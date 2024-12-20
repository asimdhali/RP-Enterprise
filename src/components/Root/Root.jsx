import React, { createContext, useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar3 from "../Navbar/Navbar3"; // Ensure this path is correct

// Create Cart Context
export const CartContext = createContext();

// CartProvider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add to Cart Function
  const addToCart = (product) => {
    let isAdded = false;
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.productID === product.productID
      );
  
      if (existingProduct) {
        // Product already exists, no changes to the cart
        return prevCart;
      } else {
        isAdded = true; // New product added
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  
    // Return whether the product was added
    return isAdded;
  };
  

  // Remove from Cart Function
  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.productID !== productId)
    );
  };

  // Update Quantity Function
  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.productID === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Cart Count
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Wishlist Context
export const WishlistContext = createContext();

// WishlistProvider Component
export const WishlistProvider = ({ children }) => {
  const [wCart, setWCart] = useState([]);

  // Add to Wishlist Function
  const addToWishlist = (item) => {
    setWCart((prevWCart) => {
      const existingItem = prevWCart.find(
        (wishlistItem) => wishlistItem.id === item.id
      );

      if (existingItem) {
        return prevWCart; // Avoid duplicates
      } else {
        return [...prevWCart, item];
      }
    });
  };

  // Remove from Wishlist Function
  const removeFromWishlist = (itemId) => {
    setWCart((prevWCart) =>
      prevWCart.filter((item) => item.id !== itemId)
    );
  };

  return (
    <WishlistContext.Provider value={{ wCart, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Root Component
export default function Root() {
  return (
    <WishlistProvider>
      <CartProvider>
        <div>
          <Navbar3 />
          <Outlet />
          <Footer />
        </div>
      </CartProvider>
    </WishlistProvider>
  );
}
