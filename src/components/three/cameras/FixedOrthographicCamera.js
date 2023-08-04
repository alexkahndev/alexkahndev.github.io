import React from 'react';
import { OrthographicCamera } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const FixedOrthographicCamera = () => {
  const { size } = useThree();
  const aspect = size.width / size.height;

  // Calculate the camera's position based on the screen size and aspect ratio
  const position = [0, 0, aspect];

  return (
    <OrthographicCamera
      makeDefault // Makes this camera the default one
      position={position}
    />
  );
};

export default FixedOrthographicCamera;
