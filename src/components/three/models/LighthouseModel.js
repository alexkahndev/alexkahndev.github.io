import React, { useState } from 'react';
import { Gltf } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import { useNavigate } from 'react-router-dom';

const LightHouseModel = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const modelSrc = './resources/props/lighthouse.glb';

  // Set the desired scale, position, and rotation values
  const scale = [0.5, 0.5, 0.5]; // Make the model three times as large in all directions
  const position = [-3, 3.75,2.5]; // Move the model to the specified position
  const rotation = [0, 0, 0]; // No rotation on the Y-axis

  const hoverProps = useSpring({
    position: hovered ? [position[0], position[1] + 0.2, position[2]] : position,
    scale: hovered ? [1.1, 1.1, 1.1] : [1, 1, 1],
    config: { mass: 1, tension: 280, friction: 60 },
  });

  // Set the navigate function
  const handleClick = () => {
    // Navigate to the mailbox page (replace '/mailbox' with the actual path to your mailbox page)
    //navigate('/contact');
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
      <Gltf src={modelSrc} scale={scale} position={position} rotation={rotation} receiveShadow castShadow />
    </animated.mesh>
  );
};

export default LightHouseModel;
