import React from 'react';
import { Canvas } from '@react-three/fiber';
import BackgroundViewerBackground from '../backgrounds/BackgroundViewerBackground';
import '../../styles/BackgroundViewerPage.css';
import FlowerBloomBackground from '../backgrounds/FlowerBloomBackground';
import { OrbitControls } from '@react-three/drei';

const BackgroundViewerPage = () => {
  return (
    <div className='background-viewer-page-container'>
    <Canvas
      orthographic={true}
      dpr={window.devicePixelRatio}
    >
      <BackgroundViewerBackground />
      <OrbitControls />
    </Canvas>
    </div>
  );
};

export default BackgroundViewerPage;
