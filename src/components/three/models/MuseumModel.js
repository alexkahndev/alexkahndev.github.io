import React, { useEffect, useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useSpring, a } from '@react-spring/three';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';

const MuseumModel = () => {
  const url = './resources/props/tower.glb';
  const desiredSize = 150;
  //const name = 'museum';

  const [modelLoaded, setModelLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);
  //const gltf = useLoader(GLTFLoader, url);
  const modelRef = useRef();
  const museumRef = useRef();
  const navigate = useNavigate();

  const [hovered, setHovered] = useState(false); // State for hover effect

  useEffect(() => {
    // Load the model asynchronously using GLTFLoader
    new GLTFLoader().load(url, (gltf) => {
      const model = gltf.scene;
      const bbox = new THREE.Box3().setFromObject(model);

      // Get the center of the bounding box
      //const center = bbox.getCenter(new THREE.Vector3());

      // Calculate the size of the bounding box
      const size = bbox.getSize(new THREE.Vector3());

      // Calculate the maximum dimension of the bounding box
      const maxDim = Math.max(size.x, size.y, size.z);

      // Calculate the scale factor to make the model have the desired size
      const scaleFactor = desiredSize / maxDim;

      // Apply the scale factor to the model
      model.scale.set(scaleFactor, scaleFactor, scaleFactor);

      // Set shadow properties for all child meshes
      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      modelRef.current = model;
      setModelLoaded(true); // Set the modelLoaded state to true when the model is loaded
    });
  }, []);

  const springConfig = {
    hoverScale: hovered ? 1.2 : 1.0, // Adjusted to 1.05 for a slightly larger growth
    config: { mass: 1, tension: 280, friction: 60 },
  };

  const hoverProps = useSpring({
    scale: [springConfig.hoverScale, springConfig.hoverScale, springConfig.hoverScale],
    config: springConfig.config,
  });

  useEffect(() => {
    if (modelLoaded && museumRef.current && modelRef.current) {
      museumRef.current.add(modelRef.current);

      // Set the position and rotation of the museum
      museumRef.current.position.set(50, 120, -125);
      museumRef.current.rotation.y = -0.5;
    }
  }, [modelLoaded]);

  const handleClick = () => {
    // Navigate to the projects page (replace '/projects' with the actual path to your projects page)
    navigate('/projects');
    setClicked(!clicked);
  };

  const handleMouseEnter = () => {
      setHovered(true);
  };
  
  const handleMouseLeave = () => {
      setHovered(false);
  };
  

  return (
    <a.group
      ref={museumRef}
      onClick={handleClick}
      onPointerOver={handleMouseEnter}
      onPointerOut={handleMouseLeave}
      {...hoverProps} // Apply the scale animation to the group
    >
      {/* The rest of your 3D model rendering code goes here */}
    </a.group>
  );
};

export default MuseumModel;
