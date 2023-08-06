import React from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const FixedPerspectiveCamera = () => {
  const { size } = useThree();
  const aspect = size.width / size.height;
  // Calculate the camera's position based on the screen size and aspect ratio
  const position = [0, 0, 1500/aspect];

  return (
    <PerspectiveCamera
      makeDefault // Makes this camera the default one
      position={position}
      fov={45}
      near={0.1}
      far={10000}
    />
  );
};

export default FixedPerspectiveCamera;
