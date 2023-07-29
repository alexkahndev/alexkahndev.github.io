import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import GroundModel from '../models/Ground';
import MuseumModel from '../models/Museum';
import BoatModel from '../models/Boat';
import MailboxModel from '../models/Mailbox';
import MineModel from '../models/Mine';
import PlaneModel from '../models/Plane';
import FixedCamera from '../cameras/FixedCamera';
import ExperimentalCamera from '../cameras/ExperimentalCamera';
import PointLight from '../lights/PointLight';
import DirectionalLight from '../lights/DirectionalLight';
import DynamicSky from '../sky/DynamicSky';

const HomeSceneFiber = ({ museumHoveredRef }) => {

  return (
    <div className="home-scene-fiber">
      <Canvas>
        <DynamicSky />
        <PointLight />
        <DirectionalLight />
        <FixedCamera />
        <GroundModel />
        <PlaneModel />
        <MuseumModel museumHoveredRef={museumHoveredRef} />
        <BoatModel />
        <MailboxModel />
        <MineModel />
        {/* Add other models here */}

        {/* Add other models here */}
      </Canvas>
    </div>
  );
};

export default HomeSceneFiber;