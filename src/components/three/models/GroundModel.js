import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

const GroundModel = () => {
  const gltf = useLoader(GLTFLoader, './resources/props/ground.glb');

  return (
    <group>
      {/* Use the loaded model */}
      <primitive object={gltf.scene} />
    </group>
  );
};

export default GroundModel;
