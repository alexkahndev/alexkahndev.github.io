import React, { useState, useRef } from "react";
import { Gltf } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { useNavigate } from "react-router-dom";
import { useFrame } from "react-three-fiber";

const PlaneModel = () => {
  const modelSrc = "./resources/props/plane.glb";
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const scale = [5, 5, 5]; 
  const position = [0, 10, 0];
  const rotation = [0, 0, 0]; 
  const speed = 0.3;
  const radius = 15;

  const planeRef = useRef();

  const hoverProps = useSpring({
    position: hovered
      ? [position[0], position[1] + 0.2, position[2]]
      : position,
    scale: hovered ? [1.1, 1.1, 1.1] : [1, 1, 1],
    config: { mass: 1, tension: 280, friction: 60 },
  });

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (planeRef.current) {
      const x = radius * Math.cos(speed * elapsedTime);
      const z = radius * Math.sin(speed * elapsedTime);
      planeRef.current.position.x = -x;
      planeRef.current.position.z = -z;

      
      const angle = Math.atan2(z, x);
      planeRef.current.rotation.y = -angle;
    }
  });

  const handleClick = () => {
    navigate("/model-viewer");
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
      ref={planeRef}
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

export default PlaneModel;
