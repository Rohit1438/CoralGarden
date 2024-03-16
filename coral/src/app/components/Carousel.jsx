import React, { useEffect, useRef } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

const Carousel = ({ children }) => {
  const scrollRef = useRef(null);
  let scrollCurrentPosition = 0;

  const scroll = (position, ref) => {
    if (ref.current) {
      ref.current.scrollLeft = position;
    }
  };

  const getTotalLayoutWidth = () => {
    if (scrollRef.current) {
      return scrollRef.current.scrollWidth;
    }
    return 0;
  };

  const goToNextSlide = () => {
    const positionToScroll = scrollCurrentPosition + 300;
    if (positionToScroll >= getTotalLayoutWidth()) return false;

    scroll(positionToScroll, scrollRef);
    scrollCurrentPosition = positionToScroll;
    return true;
  };

  const goPrevSlide = () => {
    const positionToScroll = scrollCurrentPosition - 300;
    if (positionToScroll < 0) return false;

    scroll(positionToScroll, scrollRef);
    scrollCurrentPosition = positionToScroll;
    return true;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      let isGoesNext = goToNextSlide();
      if (!isGoesNext) {
        scrollCurrentPosition = 0;
        scroll(scrollCurrentPosition, scrollRef);
        clearInterval(interval); // Clear the interval immediately
      }
    }, 2500);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden relative w-full">
        <ul
          ref={scrollRef}
          className="flex transition-transform duration-300 ease-in-out overflow-x-scroll gap-12 flex-nowrap"
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
            scrollBehavior: "smooth",
          }}
        >
          {children}
        </ul>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-800 p-5 rounded-full focus:outline-none"
        onClick={goPrevSlide}
      >
        <GrPrevious />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-800 p-5 rounded-full focus:outline-none"
        onClick={goToNextSlide}
      >
        <GrNext />
      </button>
    </div>
  );
};

export default Carousel;
