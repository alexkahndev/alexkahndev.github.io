import React from 'react';
import { Gltf } from '@react-three/drei';
import { useSpring } from '@react-spring/web';

const TowerModel = () => {
  const modelSrc = './resources/props/tower.glb';

  // Set the desired scale, position, and rotation values
  const scale = [5, 5, 5]; // Make the model twice as large in all directions
  const position = [2, 4, -12]; // Move the model to the specified position
  const rotation = [0, 0.2, 0]; // Rotate the model around the Y-axis by -0.5 radians (around 180 degrees)

  return (
    <mesh>
      <Gltf src={modelSrc} scale={scale} position={position} rotation={rotation} receiveShadow castShadow />
    </mesh>
  );
};

export default TowerModel;
