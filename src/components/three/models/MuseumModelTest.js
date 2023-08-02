import React from "react";
import { Canvas } from "react-three-fiber";
import { Box, Cone } from "@react-three/drei";

const MuseumModel = () => {
  return (
    <group>
      {/* The rectangular box */}
      <Box
      args={[2, 2, 4]} // Width, Height, Depth
      position={[0, 1, 0]} // X, Y, Z position
      rotation={[0, 0, 0]} // X, Y, Z rotation
      >
        <meshBasicMaterial color="red" /> {/* Replace with any highly visible color */}
      </Box>

      {/* The triangular pyramid acting as the roof */}
      <Cone
        args={[1.5, 2, 4]} // Radius, Height, Segments
        position={[0, 3, 0]} // X, Y, Z position
        rotation={[Math.PI / 2, 0, 0]} // X, Y, Z rotation
        color="blue" // Replace with any highly visible color
      />
    </group>
      
  );
};

export default MuseumModel;
