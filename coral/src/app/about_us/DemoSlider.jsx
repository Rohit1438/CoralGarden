import React from "react";
import Carousel from "../components/Carousel";

const DemoSlider = () => {
  const datasLength = 5; // Change this to the number of demo cards you want

  // Generate some demo card elements
  const demoCards = Array.from({ length: datasLength }).map((_, index) => (
    <li key={index} className="w-64 h-40 bg-gray-200 flex justify-center items-center">
      <h2 className="text-gray-700 font-bold">Demo Card {index + 1}</h2>
    </li>
  ));

  return <Carousel datasLength={datasLength}>{demoCards}</Carousel>;
};

export default DemoSlider;
