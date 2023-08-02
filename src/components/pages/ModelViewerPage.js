import React, { useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import GroundModel from '../three/models/GroundModel';
import { DaySky } from '../three/skies/DaySky';

import '../../styles/ModelViewerPage.css';

const ModelViewerPage = () => {

  return (
    <div className='model-viewer-page-container'>
      <Canvas
        dpr={window.devicePixelRatio}
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow // Enable shadow casting
          position={[10, 20, 10]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <PerspectiveCamera
          makeDefault // Makes this camera the default one
          position={[0, 50, 50]}
          fov={45}
          near={0.1}
          far={1000}
        />

        <OrbitControls 
          dampingFactor={0.1}
        />
        <DaySky />
        <GroundModel />
  
        {/* Add other models here */}

      </Canvas>
    </div>
  );
};

export default ModelViewerPage;
