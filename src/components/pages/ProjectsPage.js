import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { FuturisticSky } from "../three/skies/FuturisticSky";
import PointLight from "../three/lights/PointLight";
import DirectionalLight from "../three/lights/DirectionalLight";
import ProjectTile from "../utils/ProjectTile";

import "../../styles/ProjectsPage.css";

const ProjectsPage = () => {
  const projects = [
    { title: "Portfolio Website", description: "A personal wesbite used to display skills, achievements, and goals.", image: "https://picsum.photos/200/300" },
    { title: "Brand Match", description: "An engaging game designed to promote company logos and solutions", image: "https://picsum.photos/200/300" },
    { title: "Balloon Popper", description: "Modern 3D take on the classic balloon popper game", image: "https://picsum.photos/200/300" },
    { title: "Infinite Driver", description: "Take control of a car and collect as many points and powerups as you can on an infitnite road", image: "https://picsum.photos/200/300" },
  ];

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
      <div className="project-tiles-container">
        {projects.map((project, index) => (
          <ProjectTile 
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
