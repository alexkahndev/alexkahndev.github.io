// DynamicSky.js

import React, { useRef } from "react";
import { Sky } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const DynamicSky = () => {
  const sunRef = useRef();

  // Update the sun position based on the time of day.
  useFrame(({ clock }) => {
    const timeOfDay = clock.getElapsedTime() / 10; // Adjust the division to control the sun movement speed.
    const x = Math.cos(timeOfDay);
    const y = Math.sin(timeOfDay);
    const z = -0.5; // Adjust this value to control the height of the sun.

    if (sunRef.current) {
      sunRef.current.position.set(x, y, z);
    }
  });

  return <Sky ref={sunRef} />;
};

export default DynamicSky;
