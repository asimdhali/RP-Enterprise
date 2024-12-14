import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./AuthorCarousel.css";

const AuthorCarousel = () => {
    const products = [
        {
          id: 1,
          title: "Bagda Chingri",
          img: "https://i.ibb.co.com/xMJ0PX3/cingri.jpg",
          discountPrice: 1200, // in BDT
          originalPrice: 1400, // in BDT
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
        {
          id: 8,
          title: "Bagda Chingri",
          img: "https://i.ibb.co.com/xMJ0PX3/cingri.jpg",
          discountPrice: 1200,
          originalPrice: 1400,
          amount: "1 kg",
        },
        {
          id: 9,
          title: "Palon Shak",
          img: "https://i.ibb.co.com/7yJ67Tm/palonshak.jpg",
          discountPrice: 30,
          originalPrice: 40,
          amount: "500 gm",
        },
        {
          id: 10,
          title: "Kakra",
          img: "https://i.ibb.co.com/MBY5Cct/kakra.jpg",
          discountPrice: 350,
          originalPrice: 400,
          amount: "1 kg",
        },
        {
          id: 11,
          title: "Phoolcopy",
          img: "https://i.ibb.co.com/MBLpz6W/fulcopy.jpg",
          discountPrice: 35,
          originalPrice: 50,
          amount: "1 piece",
        },
        {
          id: 12,
          title: "Lal Shak",
          img: "https://i.ibb.co.com/tJkm3dh/lalshak.jpg",
          discountPrice: 25,
          originalPrice: 35,
          amount: "500 gm",
        },
        {
          id: 13,
          title: "Kacha Morich",
          img: "https://i.ibb.co.com/Ph7dWvM/marich.jpg",
          discountPrice: 80,
          originalPrice: 100,
          amount: "250 gm",
        },
        {
          id: 14,
          title: "Soyabin Tel",
          img: "https://i.ibb.co.com/4KdjyNB/soyabin-tel.jpg",
          discountPrice: 170,
          originalPrice: 190,
          amount: "1 liter",
        },
      ];
      

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const visibleAuthors = 10;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - visibleAuthors : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleAuthors >= products.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="author-carousel">
      <h2 className="carousel-title">Grocery Products</h2>
      <div className="carousel-wrapper">
        <button className="nav-button prev" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <div className="author-cards">
          {products
            .slice(currentIndex, currentIndex + visibleAuthors)
            .map((author) => (
              <div key={author.id} className="author-card">
                <img
                  src={author.img}
                  alt={author.name}
                  className="author-img"
                />
                <p className="author-name">{author.title}</p>
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

export default AuthorCarousel;