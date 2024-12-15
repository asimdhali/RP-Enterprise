import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductCarousel3 = () => {
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
  const [visibleProducts, setVisibleProducts] = useState(5);

  // Update visible products based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleProducts(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setVisibleProducts(3); // Tablet
      } else {
        setVisibleProducts(5); // Desktop
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - visibleProducts : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleProducts >= products.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full  mx-auto px-4 py-8">
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Popular Products
        </h2>
        <a 
          href="/products" 
          className="hidden md:block text-blue-600 hover:text-blue-700 transition-colors duration-300"
        >
          View All
        </a>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleProducts)}%)`
            }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="w-full sm:w-1/3 lg:w-1/5 flex-shrink-0 px-2"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-[400px] flex flex-col">
                  <div className="relative h-48">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{product.amount}</p>
                    
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-xl font-bold text-blue-600">
                        ৳{product.discountPrice}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        ৳{product.originalPrice}
                      </span>
                    </div>
                    
                    <button className="mt-auto w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handlePrev}
          className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors duration-300 focus:outline-none hidden sm:block"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button
          onClick={handleNext}
          className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors duration-300 focus:outline-none hidden sm:block"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <div className="mt-6 text-center md:hidden">
        <a 
          href="/products" 
          className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
        >
          View All
        </a>
      </div>
    </div>
  );
};

export default ProductCarousel3;