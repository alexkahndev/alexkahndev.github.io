import React, { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

const ParticleModel = ({ position, speed }) => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const { mouse } = useThree();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.set(Math.sin(t) * position, (Math.cos(t) * position * Math.atan(t)) / Math.PI / 1.25, 0);

    // React to mouse interaction
    if (hovered) {
      const distance = ref.current.position.distanceTo(mouse);
      ref.current.material.color.setHSL((1 / distance) % 1, 1, 0.7);
    } else {
      ref.current.material.color.set(0x00ffff);
    }

    // Rotate the particle around its own axis
    ref.current.rotation.x += 0.005;
    ref.current.rotation.y += 0.01;
  });

  return (
    <group>
      <Sphere ref={ref} args={[0.15, 16, 16]} onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)} />
    </group>
  );
};

export default ParticleModel;