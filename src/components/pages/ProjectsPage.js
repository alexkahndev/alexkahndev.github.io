import React from 'react';
import { Canvas } from '@react-three/fiber';
import ProjectsBackground from '../backgrounds/ProjectsBackground';
import OldBackground from '../backgrounds/ProjectsBackgroundOld'
import RainbowBackground from '../backgrounds/RainbowBackground';
import KaleidoscopeBackground from '../backgrounds/KaleidoscopeBackground';

import '../../styles/ProjectsPage.css';

const ProjectsPage = () => {
  return (
    <div className='projects-page-container'>
    <Canvas
      orthographic={true}
      dpr={window.devicePixelRatio}
    >
      <OldBackground />
    </Canvas>
    </div>
  );
};

export default ProjectsPage;
