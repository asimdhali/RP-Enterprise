import React, { createContext, useState, useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar3 from "../Navbar/Navbar3"; // Ensure this path is correct

// Create Cart Context
export const CartContext = createContext();

// CartProvider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [activeProductIds, setActiveProductIds] = useState(() => {
    const savedActiveProductIds = localStorage.getItem("activeProductIds");
    return savedActiveProductIds ? JSON.parse(savedActiveProductIds) : [];
  });
  const [initialCartCount, setInitialCartCount] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart).length : 0;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("activeProductIds", JSON.stringify(activeProductIds));
    localStorage.setItem("initialCartCount", JSON.stringify(initialCartCount));
  }, [cart, activeProductIds, initialCartCount]);

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
        setActiveProductIds((prev) => [...prev, product.productID]);
        setInitialCartCount((prev) => prev + 1);
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  
    // Return whether the product was added
    return isAdded;
  };
  

  // Remove from Cart Function
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.productID !== productId);
      if (updatedCart.length === 0) {
        setInitialCartCount(0);
      }
      return updatedCart;
    });
    setActiveProductIds((prev) => prev.filter((id) => id !== productId));
    setInitialCartCount((prev) => Math.max(prev - 1, 0));
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
      value={{ cart, addToCart, removeFromCart, updateQuantity, cartCount, initialCartCount, activeProductIds, setCart, setInitialCartCount }}
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
