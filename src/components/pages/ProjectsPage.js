import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, Stars } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import AtomModel from '../three/models/AtomModel'
import ProjectsBackground from '../three/backgrounds/ProjectsBackground'
import '../../styles/ProjectsPage.css';
import Footer from '../utils/Footer'

const projectsData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'This is the description of Project 1.',
    imageSrc: './resources/images/quake2.jpg',
    featured: true, // Add a "featured" property to mark projects as featured
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'This is the description of Project 2.',
    imageSrc: './resources/images/quake4.jpg',
    featured: false, // This project is not featured
  },
  // Add more project data objects as needed
];

const ProjectsPage = () => {
  const featuredProjects = projectsData.filter((project) => project.featured);
  const allProjects = projectsData;

  return (
    <div className='projects-page-container'>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <color attach="background" args={['black']} />
        <ProjectsBackground /> {/* Use the new ProjectsBackground component */}
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
        </EffectComposer>
        <Footer />  
      </Canvas>
    </div>
  );
};

export default ProjectsPage;
