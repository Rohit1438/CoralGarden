"use client"
import React from "react";
import { useEffect } from "react";
import { useSpring, animated } from "react-spring";

const Counter = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 0,
    config: { mass: 1, tension: 30, friction: 15 }
  });
  useEffect(() => {
    number.start({ number: n });
  }, [n]);
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};

export default Counter;
