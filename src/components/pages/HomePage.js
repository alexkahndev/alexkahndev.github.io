import React from 'react';
import { Canvas} from '@react-three/fiber';
import GroundModel from '../three/models/GroundModel';
import MuseumModel from '../three/models/MuseumModel';
import BoatModel from '../three/models/BoatModel';
import MailboxModel from '../three/models/MailboxModel';
import MineModel from '../three/models/MineModel';
import PlaneModel from '../three/models/PlaneModel';
import HomeCamera from '../three/cameras/HomeCamera';
import PointLight from '../three/lights/PointLight';
import DirectionalLight from '../three/lights/DirectionalLight';
import DynamicSky from '../three/skies/DynamicSky';

import '../../styles/HomePage.css';

const HomeSceneFiber = ({ museumHoveredRef }) => {

  return (
    <div className='home-page-container'>
      <Canvas>
        <DynamicSky />
        <PointLight />
        <DirectionalLight />
        <HomeCamera />
        <GroundModel />
        <PlaneModel />
        <MuseumModel />
        <BoatModel />
        <MailboxModel />
        <MineModel />
        
        {/* Add other models here */}

      </Canvas>
    </div>
  );
};

export default HomeSceneFiber;