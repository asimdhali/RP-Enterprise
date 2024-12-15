
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./PopularPacks.css";
import { useState } from "react";

const PopularPacks = () => {
  const products = [
    {
      id: 1,
      title: "Bagda Chingri",
      img: "https://i.ibb.co/xMJ0PX3/cingri.jpg",
      discountPrice: 1200, // in BDT
      originalPrice: 1400, // in BDT
      amount: "1 kg",
    },
    {
      id: 2,
      title: "Palon Shak",
      img: "https://i.ibb.co/7yJ67Tm/palonshak.jpg",
      discountPrice: 30,
      originalPrice: 40,
      amount: "500 gm",
    },
    {
      id: 3,
      title: "Kakra",
      img: "https://i.ibb.co/MBY5Cct/kakra.jpg",
      discountPrice: 350,
      originalPrice: 400,
      amount: "1 kg",
    },
    {
      id: 4,
      title: "Phoolcopy",
      img: "https://i.ibb.co/MBLpz6W/fulcopy.jpg",
      discountPrice: 35,
      originalPrice: 50,
      amount: "1 piece",
    },
    {
      id: 5,
      title: "Lal Shak",
      img: "https://i.ibb.co/tJkm3dh/lalshak.jpg",
      discountPrice: 25,
      originalPrice: 35,
      amount: "500 gm",
    },
    {
      id: 6,
      title: "Kacha Morich",
      img: "https://i.ibb.co/Ph7dWvM/marich.jpg",
      discountPrice: 80,
      originalPrice: 100,
      amount: "250 gm",
    },
    {
      id: 7,
      title: "Soyabin Tel",
      img: "https://i.ibb.co/4KdjyNB/soyabin-tel.jpg",
      discountPrice: 170,
      originalPrice: 190,
      amount: "1 liter",
    },
    // Add more products if needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleProducts = 5; // Number of products visible at once

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
    <div className="product-carousel">
      <h2 className="carousel-title">Grocery Products</h2>
      <div className="carousel-wrapper">
        <button className="nav-button prev" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <div className="product-cards">
          {products
            .slice(currentIndex, currentIndex + visibleProducts)
            .map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={product.img}
                  alt={product.title}
                  className="product-img"
                />
                <div className="product-details">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-amount">{product.amount}</p>
                  <div className="product-pricing">
                    <span className="discount-price">
                      ৳{product.discountPrice}
                    </span>
                    <span className="original-price">
                      ৳{product.originalPrice}
                    </span>
                  </div>
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
            ))}
        </div>
        <button className="nav-button next" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
      <div className="view-all-container">
        <a href="/products" className="view-all-link">
          View All
        </a>
      </div>
    </div>
  );
};

export default PopularPacks;
