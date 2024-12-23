import React, { useState, useEffect } from "react";

const BannerCarousel = () => {
  const slides = [
    "https://i.ibb.co.com/93zjZcS/banner-1.jpg",
    "https://i.ibb.co.com/8Pbpdzx/banner2.jpg",
    "https://i.ibb.co.com/Br2r3PR/banner-3.jpg",
    "https://i.ibb.co.com/93zjZcS/banner-1.jpg",
    "https://i.ibb.co.com/8Pbpdzx/banner2.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayInterval = 3000; // 3 seconds

  useEffect(() => {
    let intervalId;
    
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setCurrentSlide((prevSlide) => 
          prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
      }, autoPlayInterval);
    }

    // Cleanup interval on component unmount or when autoplay is toggled
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Pause autoplay when user interacts with controls
  const handleInteraction = (callback) => {
    // setIsAutoPlaying(false);
    callback();
  };

  return (
    <div id="carousel" className="relative w-full mt-3">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === currentSlide ? "translate-x-0" : "translate-x-full hidden"
            }`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="absolute block w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-gray-800" : "bg-gray-400"
            }`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleInteraction(() => goToSlide(index))}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      {/* <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={() => handleInteraction(handlePrev)}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={() => handleInteraction(handleNext)}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button> */}
    </div>
  );
};

export default BannerCarousel;