import React, { useState } from "react";
import { Gltf } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { useNavigate } from "react-router-dom";

const BoatModel = (
  { aboutHovered, setAboutHovered }
) => {
  
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const modelSrc = "./resources/props/boat.glb";

  const scale = [2, 2, 2]; 
  const position = [-5, 2.5, 7]; 
  const rotation = [0, 0, 0]; 

  const hoverProps = useSpring({
    position: aboutHovered
      ? [position[0], position[1] + 0.2, position[2]]
      : position,
    scale: aboutHovered ? [1.1, 1.1, 1.1] : [1, 1, 1],
    config: { mass: 1, tension: 280, friction: 60 },
  });

  const handleClick = () => {
    navigate("/about");
    setClicked(!clicked);
  };

  const handlePointerEnter = () => {
    setAboutHovered(true);
  };

  const handlePointerLeave = () => {
    setAboutHovered(false);
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

export default BoatModel;
