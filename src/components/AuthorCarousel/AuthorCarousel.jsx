import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const AuthorCarousel = () => {
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

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const visibleProducts = 5;

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
    <div className=" mx-auto text-center">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">Popular Products</h2>
      <div className="flex items-center justify-between">
        <button
          className="text-2xl text-gray-500 hover:text-gray-800 focus:outline-none"
          onClick={handlePrev}
        >
          <FaChevronLeft />
        </button>
        <div className="flex gap-4 overflow-hidden max-w-full">
          {products
            .slice(currentIndex, currentIndex + visibleProducts)
            .map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg w-40 sm:w-56 h-64 sm:h-80 p-2 sm:p-4 shadow-md flex flex-col justify-between items-center"
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-24 sm:h-32 object-cover rounded-lg mb-2"
                />
                <div className="text-center flex flex-col justify-between flex-grow">
                  <h3 className="text-sm sm:text-lg font-bold truncate mb-2">
                    {product.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-2">{product.amount}</p>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm sm:text-lg font-bold text-green-600">
                      ৳{product.discountPrice}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-400 line-through">
                      ৳{product.originalPrice}
                    </span>
                  </div>
                  <button className="bg-blue-500 text-white text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 rounded hover:bg-blue-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
        <button
          className="text-2xl text-gray-500 hover:text-gray-800 focus:outline-none"
          onClick={handleNext}
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="mt-4">
        <a
          href="/products"
          className="text-blue-500 hover:underline text-sm font-medium"
        >
          View All
        </a>
      </div>
    </div>
  );
};

export default AuthorCarousel;
