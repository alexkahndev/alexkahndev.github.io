import React, { useRef } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import * as THREE from 'three';
import GradientFooterShader from '../three/shaders/GradientFooterShader';
const Footer = () => {
  const ref = useRef();

  useFrame(({ clock }) => {
    // Update the time uniform for the shader material every frame
    if (ref.current.material) {
      ref.current.material.uniforms.time.value = clock.elapsedTime;
    }
  });

  
  return (
    <group ref={ref}>
      <Box args={[8, 2, 1]}>
        {/* Apply the gradient material to the box */}
        <mesh>
          <primitive object={GradientFooterShader} attach="material" />
        </mesh>
      </Box>
      {/* Add other 3D elements as needed */}
    </group>
  )

  return (
    <div className="footer-container">
      <Canvas>
        <color attach="background" args={['black']} />
        <Box args={[8, 2, 1]}>
          {/* Apply the gradient material to the box */}
          <mesh>
            <primitive object={GradientFooterShader} attach="material" />
          </mesh>
        </Box>
      </Canvas>
    </div>
  )
};

export default Footer;
