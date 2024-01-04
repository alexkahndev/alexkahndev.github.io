import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { FuturisticSky } from "../three/skies/FuturisticSky";
import PointLight from "../three/lights/PointLight";
import DirectionalLight from "../three/lights/DirectionalLight";
import ProjectTile from "../utils/ProjectTile";

import "../../styles/ProjectsPage.css";

const ProjectsPage = () => {
  const JavaScriptIcon = 'https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png';
  const BunIcon = 'https://github.com/marwin1991/profile-technology-icons/assets/136815194/7e9599e9-0570-4bb6-b17f-676ed589912f';

  const PortfolioThumbnail = process.env.PUBLIC_URL + "/resources/images/portfolio.png";
  const BrandMatchThumbnail = process.env.PUBLIC_URL + "/resources/images/brandmatch.png";
  const BalloonPopperThumbnail = process.env.PUBLIC_URL + "/resources/images/balloonpopper.png";
  const InfiniteDriverThumbnail = process.env.PUBLIC_URL + "/resources/images/infinitedriver.png";
  const ProceduralFlyoverThumbnail = process.env.PUBLIC_URL + "/resources/images/proceduralflyover.jpg";

  const projects = [
    { title: "Portfolio Website", description: "A personal wesbite used to display skills, achievements, and goals.", image: PortfolioThumbnail, videoId: "89KcuiXDKb4", demoLink: "https://alexkahndev.github.io", icons: [JavaScriptIcon] },
    { title: "Balloon Popper", description: "Modern 3D take on the classic balloon popper game.", image: BalloonPopperThumbnail, videoId: "3wR7f2ARnZY", demoLink:"https://njit-akahn.itch.io/balloon-popper", icons: [JavaScriptIcon] },
    { title: "Procedural Flyover", description: "Explore a procedurally generated world by flying a plane over a diverse terrain", image: ProceduralFlyoverThumbnail, videoId: "eMcsyphnN6E", demoLink: "https://njit-akahn.itch.io/procedural-generation", icons: [JavaScriptIcon]},
    { title: "Brand Match", description: "An engaging game designed to promote company logos and solutions.", image: BrandMatchThumbnail, videoId: "zTZz_3rMOfQ", demoLink: "https://njit-akahn.itch.io/brand-match",icons: [JavaScriptIcon] },
    { title: "Infinite Driver", description: "Take control of a car and collect as many points and powerups as you can on an infitnite road.", image: InfiniteDriverThumbnail, videoId: "A8ZmGqpb-Oo", demoLink: "https://njit-akahn.itch.io/infinite-driver",icons: [JavaScriptIcon] },
  ];

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
            videoId={project.videoId}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
