import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import FixedCamera from '../three/cameras/HomeCamera';
import { MineSky } from '../three/skies/MineSky';
import PointLight from '../three/lights/PointLight';
import DirectionalLight from '../three/lights/DirectionalLight';

import '../../styles/ProjectsPage.css';

const DevelopmentPage = () => {
  return (
    <div className='projects-page-container'>
    <Canvas
      dpr={window.devicePixelRatio}
    >
      <OrbitControls 
          enableZoom={true}
          enablePan={false}
          target={[-100,-50,-50]}
          minDistance={50}
      />
      <Environment preset='sunset' />
      <MineSky />
      <PointLight />
      <DirectionalLight />

    </Canvas>
    </div>
  );
};

export default DevelopmentPage;
