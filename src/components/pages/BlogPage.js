import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import FixedCamera from "../three/cameras/HomeCamera";
import { LibrarySky } from "../three/skies/LibrarySky";
import PointLight from "../three/lights/PointLight";
import DirectionalLight from "../three/lights/DirectionalLight";

import "../../styles/ProjectsPage.css";

const ContactPage = () => {
  return (
    <div className="projects-page-container">
      <Canvas dpr={window.devicePixelRatio}>
        <OrbitControls enableZoom={true} enablePan={false} />
        <Environment preset="sunset" />
        <LibrarySky />
        <PointLight />
        <DirectionalLight />
      </Canvas>
    </div>
  );
};

export default ContactPage;
