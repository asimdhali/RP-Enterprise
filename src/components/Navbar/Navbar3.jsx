import React, { useContext, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import logo from "../../assets/logopng.png";
import {
  Menu,
  Search,
  ShoppingCart,
  Heart,
  Package2,
  User,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { CartContext } from "../Root/Root";

const Navbar3 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { initialCartCount } = useContext(CartContext);

  const categories = [
    "Food",
    "Beauty",
    "Fashion & Lifestyle",
    "Baby Care",
    "Pharmacy",
    "Electronics",
    "Sports",
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              className="p-2 -ml-2 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center space-x-2">
              <figure className="flex-shrink-0">
                <Link to={"/"}>
                  <img
                    src={logo}
                    alt="RP Enterprise Logo"
                    className="w-20 h-20 object-contain"
                  />
                </Link>
              </figure>
              {/* <span className="text-xl font-bold text-blue-600">
                RP Enterprise
              </span> */}
            </div>
          </div>

          {/* Search Bar - Hidden on mobile, visible on larger screens */}
          <div className="hidden lg:flex flex-grow max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Icons - Responsive */}
          <div className="flex items-center space-x-4">
            <button
              className="lg:hidden text-gray-600 hover:text-blue-600"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search size={24} />
            </button>

            {/* <Link
              to={'/orders'}
              className="hidden md:flex items-center text-gray-600 hover:text-blue-600"
            >
              <Package2 size={24} />
              <span className="ml-1 hidden lg:inline">Orders</span>
            </Link> */}

            {/* <Link
              to={'/wishlist'}
              className="flex items-center text-gray-600 hover:text-blue-600"
            >
              <Heart size={24} />
              <span className="ml-1 hidden lg:inline">Wishlist</span>
            </Link> */}

            <Link
              to="/cart"
              className="relative flex items-center text-gray-600 hover:text-blue-600"
              aria-label="View Cart"
            >
              <ShoppingCart size={24} />
              {initialCartCount > 0 && (
                <span
                  className="absolute -top-3 -right-3 bg-[#4a00ff] text-white rounded-full text-xs w-5 h-5 flex items-center justify-center"
                  aria-label={`Cart count: ${initialCartCount}`}
                >
                  {initialCartCount}
                </span>
              )}
              <span className="ml-1 hidden lg:inline">Cart</span>
            </Link>

            <Link
              to="/account"
              className="items-center flex text-gray-600 hover:text-blue-600"
              aria-label="Go to Account"
            >
              <User size={24} />
              <span className="ml-1 hidden lg:inline ">Account</span>
            </Link>
          </div>
        </div>

        {/* Mobile Search - Conditional Render */}
        {isSearchOpen && (
          <div className="lg:hidden py-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600">
                <Search size={20} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Categories - Desktop */}
      <div className="hidden lg:block bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8 py-2">
            {categories.map((category) => (
              <a
                key={category}
                href="#"
                className="text-gray-600 hover:text-blue-600 whitespace-nowrap text-sm font-medium"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col space-y-4">
              {categories.map((category) => (
                <a
                  key={category}
                  href="#"
                  className="text-gray-600 hover:text-blue-600 py-2 border-b border-gray-100"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar3;
