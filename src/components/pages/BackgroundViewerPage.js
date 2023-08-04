import React from 'react';
import { Canvas } from '@react-three/fiber';
import BackgroundViewerBackground from '../backgrounds/BackgroundViewerBackground';
import GridModel from '../three/models/GridModel';
import FixedOrthographicCamera from '../three/cameras/FixedOrthographicCamera';
import { OrbitControls } from '@react-three/drei';

import '../../styles/BackgroundViewerPage.css';
const BackgroundViewerPage = () => {
  return (
    <div className='background-viewer-page-container'>
    <Canvas 
      dpr={window.devicePixelRatio}
    >
      <OrbitControls />
      <FixedOrthographicCamera />
      <BackgroundViewerBackground />
      <GridModel />
    </Canvas>
    </div>
  );
};

export default BackgroundViewerPage;
