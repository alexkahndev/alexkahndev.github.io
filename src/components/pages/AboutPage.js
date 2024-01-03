import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, BoxHelper } from "@react-three/drei";
import FixedCamera from "../three/cameras/HomeCamera";
import { WaterSky } from "../three/skies/WaterSky";
import PointLight from "../three/lights/PointLight";
import DirectionalLight from "../three/lights/DirectionalLight";

import "../../styles/ProjectsPage.css";

const AboutPage = () => {
  return (
    <div className="projects-page-container">
      <Canvas dpr={window.devicePixelRatio}>
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={50}
        />
        <Environment preset="sunset" />
        <WaterSky />
        <PointLight />
        <DirectionalLight />
      </Canvas>
    </div>
  );
};

export default AboutPage;
