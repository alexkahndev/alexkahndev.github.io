import React, { useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import { Text } from "@react-three/drei";
import { TextureLoader } from "three";
import { Box, Plane } from "@react-three/drei";

const ProjectTile = ({ gameImage, gameTitle, gameDescription }) => {
  const mesh = useRef();
  const texture = useLoader(TextureLoader, gameImage);
  const [hovered, setHovered] = useState(false);

  const hoverProps = useSpring({
    position: hovered ? [0, -0.1, 0] : [0, 0, 0],
    opacity: hovered ? 0 : 1,
  });

  const handlePointerEnter = () => {
    setHovered(true);
  };

  const handlePointerLeave = () => {
    setHovered(false);
  };

  return (
    <group>
      <Plane 
       onPointerEnter={handlePointerEnter}
       onPointerLeave={handlePointerLeave}
      args={[1, 1]} position={[0, 0, 0]} receiveShadow>
        <meshBasicMaterial attach="material" map={texture} />
      </Plane>

      <Text
        color="black"
        fontSize={0.1}
        maxWidth={1}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        position={[0, 0.5, 0.01]}
        outlineColor="#ffffff"
        outlineWidth={0.01}
      >
        {gameTitle}
      </Text>

      <animated.mesh 
         {...hoverProps}
      >
        <Text
          color="black"
          fontSize={0.1}
          maxWidth={1}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign="center"
          position={[0, -0.5, 0.01]}
          outlineColor="#ffffff"
          outlineWidth={0.01}
        >
          {gameDescription}
        </Text>
      </animated.mesh>

      <Box args={[1, 0.2, 0.01]} position={[0, 0, -0.01]} />
    </group>
  );
};

export default ProjectTile;
