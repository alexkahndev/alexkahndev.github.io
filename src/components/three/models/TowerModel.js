import React, { useState } from "react";
import { Gltf } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { useNavigate } from "react-router-dom";

const TowerModel = (
  { projectsHovered, setProjectsHovered }
) => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const modelSrc = "./resources/props/tower.glb";

  // Set the desired scale, position, and rotation values
  const scale = [5, 5, 5]; 
  const position = [2, 2, -6]; 
  const rotation = [0, 0, 0]; 

  const hoverProps = useSpring({
    position: projectsHovered
      ? [position[0], position[1] + 0.2, position[2]]
      : position,
    scale: projectsHovered ? [1.1, 1.1, 1.1] : [1, 1, 1],
    config: { mass: 1, tension: 280, friction: 60 },
  });

  // Set the navigate function
  const handleClick = () => {
    // Navigate to the projects page (replace '/projects' with the actual path to your projects page)
    navigate("/projects");
    setClicked(!clicked);
    setProjectsHovered(false);
  };

  const handlePointerEnter = () => {
   
    setProjectsHovered(true);
  };

  const handlePointerLeave = () => {
   
    setProjectsHovered(false);
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

export default TowerModel;
