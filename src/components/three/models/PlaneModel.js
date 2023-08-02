import React, {useState} from 'react';
import { Gltf } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import { useNavigate } from 'react-router-dom';

const PlaneModel = () => {
  const modelSrc = './resources/props/plane.glb';

  // Set the desired scale, position, and rotation values
  const scale = [5, 5, 5]; // Make the model twice as large in all directions
  const position = [2, 2, -6]; // Move the model to the specified position
  const rotation = [0, 0, 0]; // Rotate the model around the Y-axis by -0.5 radians (around 180 degrees)
  

  return (
    <animated.mesh 

    >
      <Gltf src={modelSrc} scale={scale} position={position} rotation={rotation} receiveShadow castShadow />
    </animated.mesh>
  );
};

export default PlaneModel;
