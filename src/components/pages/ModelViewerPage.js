import React, { useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import { DaySky } from "../three/skies/DaySky";

import ProjectTile from "../utils/ProjectTile";

import "../../styles/ModelViewerPage.css";

const ModelViewerPage = () => {
  return (
    <div className="model-viewer-page-container">
      <Canvas dpr={window.devicePixelRatio}>
        <Environment preset="apartment" />

        <PerspectiveCamera
          makeDefault // Makes this camera the default one
          position={[0, 50, 50]}
          fov={45}
          near={0.1}
          far={1000}
        />

        <OrbitControls
          dampingFactor={0.1}
          enableZoom={true}
          enablePan={false}
          target={[0, 0, 0]}
          minDistance={0}
        />
        <DaySky />

        {/* Add model here */}
        <ProjectTile
          gameImage="https://i.imgur.com/7p5k2zL.jpg"
          gameTitle="Project Title"
          gameDescription="Project Description"
        />
      </Canvas>
    </div>
  );
};

export default ModelViewerPage;
