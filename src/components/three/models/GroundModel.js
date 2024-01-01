import React from "react";
import { Gltf } from "@react-three/drei";

const GroundModel = () => {
  const modelSrc = "./resources/props/ground.glb";

  // Set the desired scale, position, and rotation values
  const scale = [1, 1, 1]; // Make the model twice as large in all directions
  const position = [0, 0, 0]; // Move the model to the specified position
  const rotation = [0, 0, 0]; // Rotate the model around the Y-axis by -0.5 radians (around 180 degrees)

  return (
    <Gltf
      src={modelSrc}
      scale={scale}
      position={position}
      rotation={rotation}
      receiveShadow
      castShadow
    />
  );
};

export default GroundModel;
