import React, {useState, useEffect} from 'react';
import { Canvas } from '@react-three/fiber';
import BackgroundViewerBackground from '../backgrounds/BackgroundViewerBackground';
import GridModel from '../three/models/GridModel';
import FixedOrthographicCamera from '../three/cameras/FixedOrthographicCamera';
import FixedPerspectiveCamera from '../three/cameras/FixedPerspectiveCamera';
import FlowFieldEffect from "../effects/FlowFieldEffect";
import { OrbitControls } from '@react-three/drei';

import '../../styles/BackgroundViewerPage.css';
const BackgroundViewerPage = () => {

  const [debugMode, setDebugMode] = useState(true);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        window.location.href = '/';
      } else if (e.key === 'd') {
        setDebugMode(prevDebugMode => !prevDebugMode); // Use the previous state to update
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [debugMode]);
  

  return (
    <div className='background-viewer-page-container'>
    <Canvas 
      dpr={window.devicePixelRatio}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <FixedPerspectiveCamera />
      <BackgroundViewerBackground />
      {debugMode && <GridModel />}
      <FlowFieldEffect />
    </Canvas>
    </div>
  );
};

export default BackgroundViewerPage;
