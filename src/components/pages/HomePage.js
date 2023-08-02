import React, { useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import GroundModel from '../three/models/GroundModel';
import TowerModel from '../three/models/TowerModel';
import BoatModel from '../three/models/BoatModel';
import MailboxModel from '../three/models/MailboxModel';
import MineModel from '../three/models/MineModel';
import PlaneModel from '../three/models/PlaneModel';
import PointLight from '../three/lights/PointLight';
import LightHouseModel from '../three/models/LighthouseModel';
import DirectionalLight from '../three/lights/DirectionalLight';
import DynamicSky from '../three/skies/DynamicSky';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import FixedCamera from '../three/cameras/HomeCamera';
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
        />
        <FixedCamera />
        <Environment preset='sunset' />
        <DaySky />
        <PointLight />
        <DirectionalLight />
        <GroundModel />
        <PlaneModel />
        <BoatModel />
        <LightHouseModel />
        <MineModel />
        <TowerModel />
  
        {/* Add other models here */}

      </Canvas>
    </div>
  );
};

export default HomeSceneFiber;
