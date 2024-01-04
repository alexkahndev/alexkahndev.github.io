import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, BoxHelper } from "@react-three/drei";
import FixedCamera from "../three/cameras/HomeCamera";
import { WaterSky } from "../three/skies/WaterSky";
import PointLight from "../three/lights/PointLight";
import DirectionalLight from "../three/lights/DirectionalLight";

import "../../styles/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <Canvas dpr={window.devicePixelRatio}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minDistance={50}
        />
        <Environment preset="sunset" />
        <WaterSky />
        <PointLight />
        <DirectionalLight />
      </Canvas>

      <div className="about-page-content">
        <h1>🚧 Check Back Later 🚧</h1>
        <p>
          I am currently working on this page. Please check back later for more
          information! In the meantime, feel free to check out any of my exciting projects! Drag your cursor around to look around the scene on any page.
        </p>
      </div>

    </div>
  );
};

export default AboutPage;
