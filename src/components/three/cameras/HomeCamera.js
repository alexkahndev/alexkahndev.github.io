import React from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const FixedCamera = () => {
  const { size } = useThree();
  const aspect = size.width / size.height;
  const distance = 50; // Adjust this value to control the camera distance from the scene

  // Calculate the camera's position based on the screen size and aspect ratio
  const position = [0, distance / aspect, distance / aspect];

  return (
    <PerspectiveCamera
      makeDefault // Makes this camera the default one
      position={position}
      fov={45}
      near={0.1}
      far={1000}
    />
  );
};

export default FixedCamera;
