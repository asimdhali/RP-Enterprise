import React, { useState } from 'react';
import { ShoppingCart, Trash2 } from 'lucide-react';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      title: "Bagda Chingri",
      img: "https://i.ibb.co.com/xMJ0PX3/cingri.jpg",
      discountPrice: 1200,
      originalPrice: 1400,
      amount: "1 kg",
    },
    {
      id: 2,
      title: "Palon Shak",
      img: "https://i.ibb.co.com/7yJ67Tm/palonshak.jpg",
      discountPrice: 30,
      originalPrice: 40,
      amount: "500 gm",
    },
    {
      id: 3,
      title: "Kakra",
      img: "https://i.ibb.co.com/MBY5Cct/kakra.jpg",
      discountPrice: 350,
      originalPrice: 400,
      amount: "1 kg",
    },
  ]);

  const handleRemove = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className=" mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Your Wishlist</h2>
        </div>

        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md flex flex-col h-[480px]">
                {/* Image Section */}
                <div className="h-64 w-full overflow-hidden rounded-t-lg">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                    <p className="text-gray-500 mb-4">{product.amount}</p>
                    
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-2xl font-bold text-blue-600">৳{product.discountPrice}</span>
                      <span className="text-sm text-gray-400 line-through">৳{product.originalPrice}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <button className="w-1/2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2">
                      <ShoppingCart className="w-5 h-5" />
                      <span>Add to Cart</span>
                    </button>
                    <button
                      onClick={() => handleRemove(product.id)}
                      className="w-1/2 bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <Trash2 className="w-5 h-5" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-8">
            <p className="text-gray-500">Your wishlist is empty.</p>
            <a
              href="/products"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors inline-flex items-center mt-4"
            >
              Browse Products
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
