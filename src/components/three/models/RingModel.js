import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Torus, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

function UniqueModel(props) {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    groupRef.current.rotation.x = Math.sin(time * 0.5) * Math.PI;
    groupRef.current.rotation.y = Math.cos(time * 0.5) * Math.PI;

    // Color-changing animation
    const color = new THREE.Color(
      Math.sin(time * 0.5) * 0.5 + 0.5,
      Math.cos(time * 0.8) * 0.5 + 0.5,
      Math.sin(time * 1.2) * 0.5 + 0.5
    );

    // Set the color of the sphere and torus materials
    groupRef.current.children.forEach((child) => {
      if (child.material) {
        child.material.color = color;
      }
    });
  });

  return (
    <group ref={groupRef} {...props}>
      {/* Custom Sphere */}
      <Sphere args={[1, 32, 32]}>
        <meshPhongMaterial color="orange" />
      </Sphere>
      {/* Custom Torus */}
      <Torus args={[1.5, 0.4, 32, 64]} position={[1.5, 1.5, 0]}>
        <meshPhongMaterial color="purple" />
      </Torus>
      {/* Floating Icosahedron */}
      <Icosahedron args={[1.2, 0]}>
        <meshPhongMaterial color="cyan" />
      </Icosahedron>
    </group>
  );
}

export default UniqueModel;
