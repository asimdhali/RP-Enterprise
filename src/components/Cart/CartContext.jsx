// import React, { createContext, useState, useContext } from "react";

// const CartContext = createContext();
// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [cartCount, setCartCount] = useState(0);

//   const addToCart = (item) => {
//     let isAdded = false;
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((i) => i.id === item.id);
//       if (existingItem) {
//         isAdded = false; // No new item is added
//         return prevItems.map((i) =>
//           i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//         );
//       } else {
//         isAdded = true; // New item is added
//         return [...prevItems, { ...item, quantity: 1 }];
//       }
//     });

//     // Update cartCount only for new items
//     setCartCount((prevCount) => prevCount + (isAdded ? 1 : 0));
//     return isAdded;
//   };

//   const removeFromCart = (id) => {
//     setCartItems((prevItems) => {
//       const itemToRemove = prevItems.find((item) => item.id === id);
//       if (itemToRemove) {
//         setCartCount((prevCount) => prevCount - itemToRemove.quantity);
//       }
//       return prevItems.filter((item) => item.id !== id);
//     });
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         cartCount,
//         addToCart,
//         removeFromCart,
//         calculateTotal,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };
