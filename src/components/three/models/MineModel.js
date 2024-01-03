import React, { useState } from "react";
import { Gltf } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { useNavigate } from "react-router-dom";

const MineModel = (
  { developmentHovered, setDevelopmentHovered }
) => {

  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const modelSrc = "./resources/props/mine.glb";

  // Set the desired scale, position, and rotation values
  const scale = [6, 6, 6]; // Make the model three times as large in all directions
  const position = [2, 2.2, -6]; 
  const rotation = [0, 0.1, 0];

  const hoverProps = useSpring({
    position: developmentHovered
      ? [position[0], position[1] + 0.2, position[2]]
      : position,
    scale: developmentHovered ? [1.1, 1.1, 1.1] : [1, 1, 1],
    config: { mass: 1, tension: 280, friction: 60 },
  });

  // Set the navigate function
  const handleClick = () => {
    // Navigate to the mailbox page (replace '/mailbox' with the actual path to your mailbox page)
    navigate("/development");
    setClicked(!clicked);
    setDevelopmentHovered(false);
  };

  const handlePointerEnter = () => {
    setDevelopmentHovered(true);
  };

  const handlePointerLeave = () => {
    setDevelopmentHovered(false);
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

export default MineModel;
