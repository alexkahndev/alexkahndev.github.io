import React, { useState } from "react";
import { Gltf } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { useNavigate } from "react-router-dom";

const DockModel = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const modelSrc = "./resources/props/dock.glb";

  // Set the desired scale, position, and rotation values
  const scale = [4, 4, 4]; // Make the model twice as large in all directions
  const position = [5, 2, -3]; // Move the model to the specified position
  const rotation = [0, -0.7, 0]; // Rotate the model around the Y-axis by -0.5 radians (around 180 degrees)

  const hoverProps = useSpring({
    position: hovered
      ? [position[0], position[1] + 0.2, position[2]]
      : position,
    scale: hovered ? [1.1, 1.1, 1.1] : [1, 1, 1],
    config: { mass: 1, tension: 280, friction: 60 },
  });

  // Set the navigate function
  const handleClick = () => {
    // Navigate to the projects page (replace '/projects' with the actual path to your projects page)
    navigate("/blog");
    setClicked(!clicked);
  };

  const handlePointerEnter = () => {
    setHovered(true);
  };

  const handlePointerLeave = () => {
    setHovered(false);
  };

  return (
    <animated.mesh
      onClick={handleClick}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      {...hoverProps}
    >
      <Gltf
        src={modelSrc}
        scale={scale}
        position={position}
        rotation={rotation}
        receiveShadow
        castShadow
      />
    </animated.mesh>
  );
};

export default DockModel;
