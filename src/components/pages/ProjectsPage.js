import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import { FuturisticSky } from "../three/skies/FuturisticSky";
import PointLight from "../three/lights/PointLight";
import DirectionalLight from "../three/lights/DirectionalLight";

import "../../styles/ProjectsPage.css";

const ProjectsPage = () => {
  return (
    <div className="projects-page-container">
      <Canvas dpr={window.devicePixelRatio}>
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          target={[0, 0, 0]}
          minDistance={50}
        />

        <Environment preset="sunset" />
        <FuturisticSky />
        <PointLight />
        <DirectionalLight />
      </Canvas>
    </div>
  );
};

export default ProjectsPage;
