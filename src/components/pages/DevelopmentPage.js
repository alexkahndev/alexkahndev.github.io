import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import FixedCamera from "../three/cameras/HomeCamera";
import { LibrarySky } from "../three/skies/LibrarySky";
import PointLight from "../three/lights/PointLight";
import DirectionalLight from "../three/lights/DirectionalLight";

import "../../styles/ProjectsPage.css";

const DevelopmentPage = () => {
  return (
    <div className="projects-page-container">
      <Canvas dpr={window.devicePixelRatio}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          target={[0, 0, 0]}
          minDistance={50}
        />
        <Environment preset="sunset" />
        <LibrarySky />
        <PointLight />
        <DirectionalLight />
      </Canvas>
      <div className="about-page-content">
        <h1>🚧 Check Back Later 🚧</h1>
        <p style={{ fontSize:'2vmin', fontWeight:'bold', background:'white', margin: '1vmin', padding:'1vmin'}}>
          I am currently working on this page. Please check back later for more
          information! In the meantime, feel free to check out any of my exciting projects! Drag your cursor around to look around the scene on any page.
        </p>
      </div>
    </div>
  );
};

export default DevelopmentPage;
