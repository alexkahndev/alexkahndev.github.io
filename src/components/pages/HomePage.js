import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import GroundModel from "../three/models/GroundModel";
import TowerModel from "../three/models/TowerModel";
import BoatModel from "../three/models/BoatModel";
import MineModel from "../three/models/MineModel";
import PlaneModel from "../three/models/PlaneModel";
import DockModel from "../three/models/DockModel";
import PointLight from "../three/lights/PointLight";
import LightHouseModel from "../three/models/LighthouseModel";
import DirectionalLight from "../three/lights/DirectionalLight";
import Footer from "../utils/Footer";
import { Environment } from "@react-three/drei";
import FixedCamera from "../three/cameras/HomeCamera";
import { DaySky } from "../three/skies/DaySky";
import { OrbitControls } from "@react-three/drei";
import "../../styles/HomePage.css";

const HomeSceneFiber = () => {
  const [preset, setPreset] = useState("apartment");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) {
      setPreset("dawn"); // Morning
    } else if (hour >= 12 && hour < 18) {
      setPreset("sunset"); // Noon
    } else {
      setPreset("night"); // Midnight
    }
  }, []);

  return (
    <div className="home-page-container">
      <Canvas dpr={window.devicePixelRatio}>
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          target={[0, 0, 0]}
          minDistance={0}
        />
        <FixedCamera />
        <Environment preset={preset} />
        <DaySky />
        <PointLight />
        <DirectionalLight />
        <GroundModel />
        <PlaneModel />
        <BoatModel />
        <LightHouseModel />
        <MineModel />
        <TowerModel />
        <DockModel />
        <Footer />

        {/* Add other models here */}
      </Canvas>
    </div>
  );
};

export default HomeSceneFiber;
