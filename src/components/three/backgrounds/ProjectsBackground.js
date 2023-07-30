import * as THREE from 'three';
import { useRef, useMemo, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Line, Sphere, Html } from '@react-three/drei';

const CentralModel = () => {
  const centralModelRef = useRef();
  const { mouse } = useThree();

  const handleMouseEnter = () => {
    centralModelRef.current.scale.set(1.2, 1.2, 1.2);
  };

  const handleMouseLeave = () => {
    centralModelRef.current.scale.set(1, 1, 1);
  };

  useFrame(({ clock }) => {
    centralModelRef.current.rotation.x = clock.getElapsedTime() / 3;
    centralModelRef.current.rotation.y = clock.getElapsedTime() / 2;
  });

  return (
    <group ref={centralModelRef} onPointerEnter={handleMouseEnter} onPointerLeave={handleMouseLeave}>
      <mesh>
        <boxGeometry args={[5, 5, 5]} />
        <meshBasicMaterial color="purple" />
      </mesh>
    </group>
  );
};

const SmallModel = ({ position }) => {
  const smallModelRef = useRef();
  const { mouse } = useThree();
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  useFrame(({ clock }) => {
    smallModelRef.current.rotation.x = clock.getElapsedTime() / 5;
    smallModelRef.current.rotation.y = clock.getElapsedTime() / 6;
    if (hovered) {
      const distance = Math.sqrt(
        Math.pow(mouse.x * 100 - position[0], 2) +
        Math.pow(mouse.y * 100 - position[1], 2)
      );
      const colorValue = distance / 100;
      const color = new THREE.Color(`hsl(${colorValue * 360}, 100%, 50%)`);
      smallModelRef.current.material.color = color;
    }
  });

  return (
    <group position={position} onPointerEnter={handleMouseEnter} onPointerLeave={handleMouseLeave}>
      <mesh ref={smallModelRef}>
        <icosahedronGeometry args={[2, 0]} />
        <meshBasicMaterial color="cyan" wireframe />
      </mesh>
    </group>
  );
};

const ProjectsBackground = () => {
  const numSmallModels = 20;

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={1} />
      <CentralModel />
      {Array.from({ length: numSmallModels }).map((_, index) => (
        <SmallModel
          key={index}
          position={[
            Math.cos(index) * 30,
            Math.sin(index) * 30,
            Math.sin(index * 2) * 30,
          ]}
        />
      ))}
    </>
  );
};

export default ProjectsBackground;
