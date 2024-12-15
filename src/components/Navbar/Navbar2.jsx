import React from 'react';

const Navbar2 = () => {
    return (
        <nav className="bg-white border-b shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <img src="https://via.placeholder.com/50x20" alt="Ozon Logo" className="h-6" />
          <span className="ml-2 text-lg font-bold text-blue-600">Ozon</span>
        </div>

        {/* Search Bar */}
        <div className="flex items-center flex-grow mx-4">
          <input
            type="text"
            placeholder="Search on Ozon"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg">Search</button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600">Login</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Orders</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Favorites</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Cart</a>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-2 flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">Catalog</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Tickets, Hotels, Tours</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Clothing and Shoes</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Electronics</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Home and Garden</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Kids' Products</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Deals</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Premium</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Certificates</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Made in Russia</a>
        </div>
      </div>
    </nav>
    );
};

export default Navbar2;