import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

const ProductCarousel = () => {
  const products = [
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
    {
      id: 4,
      title: "Phoolcopy",
      img: "https://i.ibb.co.com/MBLpz6W/fulcopy.jpg",
      discountPrice: 35,
      originalPrice: 50,
      amount: "1 piece",
    },
    {
      id: 5,
      title: "Lal Shak",
      img: "https://i.ibb.co.com/tJkm3dh/lalshak.jpg",
      discountPrice: 25,
      originalPrice: 35,
      amount: "500 gm",
    },
    {
      id: 6,
      title: "Kacha Morich",
      img: "https://i.ibb.co.com/Ph7dWvM/marich.jpg",
      discountPrice: 80,
      originalPrice: 100,
      amount: "250 gm",
    },
    {
      id: 7,
      title: "Soyabin Tel",
      img: "https://i.ibb.co.com/4KdjyNB/soyabin-tel.jpg",
      discountPrice: 170,
      originalPrice: 190,
      amount: "1 liter",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const getCurrentVisibleProducts = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 4;
    }
    return 4;
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - getCurrentVisibleProducts() : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + getCurrentVisibleProducts() >= products.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className=" mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Popular Products</h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / getCurrentVisibleProducts())}%)`
              }}
            >
              {products.map((product) => (
                <div 
                  key={product.id}
                  className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
                >
                  <div className="bg-white rounded-lg shadow-md h-[480px] flex flex-col">
                    {/* Fixed height image container */}
                    <div className="h-64 w-full overflow-hidden rounded-t-lg">
                      <img
                        src={product.img}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Fixed height content container */}
                    <div className="p-4 flex flex-col flex-grow">
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                        <p className="text-gray-500 mb-4">{product.amount}</p>
                        
                        <div className="flex items-center space-x-2 mb-4">
                          <span className="text-2xl font-bold text-blue-600">৳{product.discountPrice}</span>
                          <span className="text-sm text-gray-400 line-through">৳{product.originalPrice}</span>
                        </div>
                      </div>
                      
                      {/* Button always at bottom */}
                      <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2">
                        <ShoppingCart className="w-5 h-5" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/products" 
            className="text-blue-600 hover:text-blue-700 font-medium transition-colors inline-flex items-center"
          >
            View All Products
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;