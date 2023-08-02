import React, { useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import GroundModel from '../three/models/GroundModel';
import MuseumModel from '../three/models/MuseumModel';
import BoatModel from '../three/models/BoatModel';
import MailboxModel from '../three/models/MailboxModel';
import MineModel from '../three/models/MineModel';
import PlaneModel from '../three/models/PlaneModel';
import PointLight from '../three/lights/PointLight';
import MuseumTestModel from '../three/models/MuseumModelTest';
import DirectionalLight from '../three/lights/DirectionalLight';
import DynamicSky from '../three/skies/DynamicSky';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import DynamicLight from '../three/lights/DynamicLight';
import AmbientLight from '../three/lights/AmbientLight';
import { DaySky } from '../three/skies/DaySky';
import { OrbitControls } from '@react-three/drei';

import '../../styles/HomePage.css';

const HomeSceneFiber = ({ museumHoveredRef }) => {
  
  return (
    <div className='home-page-container'>
      <Canvas
        dpr={window.devicePixelRatio}
      >
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          minDistance={50}
          target={[0, 0, 0]} 
          position={[0, 500, 500]}
          autoRotate={false} 
          autoRotateSpeed={0.5} 
        />
        <Environment preset='sunset' />
        <DaySky />
        <PointLight />
        <DirectionalLight />
        <GroundModel />
        <PlaneModel />
        <MuseumModel />
  
        {/* Add other models here */}

      </Canvas>
    </div>
  );
};

export default HomeSceneFiber;
