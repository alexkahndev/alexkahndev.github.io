import React, { useEffect, useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useSpring, a } from '@react-spring/three';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';

const MineModel = () => {
  const url = './resources/props/mine.glb';
  const desiredSize = 150; // Adjust this value to control the size of the plane
  const name = 'mine';

  const [modelLoaded, setModelLoaded] = useState(false);
  const gltf = useLoader(GLTFLoader, url);
  const modelRef = useRef();
  const mineRef = useRef();
  const [hovered, setHovered] = useState(false); // State for hover effect
  const navigate = useNavigate(); // Use navigate hook for routing

  useEffect(() => {
    // Load the model asynchronously using GLTFLoader
    new GLTFLoader().load(url, (gltf) => {
      // Calculate the bounding box of the model to get its size
      const bbox = new THREE.Box3().setFromObject(gltf.scene);
      const modelSize = new THREE.Vector3();
      bbox.getSize(modelSize);

      // Calculate the scale factor to make the model have the desired size
      const scaleFactor = desiredSize / Math.max(modelSize.x, modelSize.y, modelSize.z);

      // Apply the scale factor to the model
      gltf.scene.scale.set(scaleFactor, scaleFactor, scaleFactor);
      gltf.scene.name = name;

      // Set shadow properties for all child meshes
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      modelRef.current = gltf.scene;
      setModelLoaded(true); // Set the modelLoaded state to true when the model is loaded
    });
  }, []);

  const springConfig = {
    hoverScale: hovered ? 1.2 : 1.0, // Adjusted to 1.1 for a slightly larger growth
    config: { mass: 1, tension: 280, friction: 60 },
  };

  const hoverProps = useSpring({
    scale: [springConfig.hoverScale, springConfig.hoverScale, springConfig.hoverScale],
    config: springConfig.config,
  });

  useEffect(() => {
    if (modelLoaded && mineRef.current && modelRef.current) {
      mineRef.current.add(modelRef.current);
      mineRef.current.position.set(-150, 75, -225);
      modelRef.current.rotation.y = 0; // Set the initial rotation to 0 degrees
    }
  }, [modelLoaded]);

  const handleClick = () => {
    // Navigate to the development (or "projects-in-progress") page
    navigate('/development');
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  if (!modelLoaded) {
    // You can render a loading indicator here while the model is loading
    return null;
  }

  return (
    <a.group
      ref={mineRef}
      onClick={handleClick} // Add click handler to navigate to the development (or "projects-in-progress") page
      onPointerOver={handleMouseEnter}
      onPointerOut={handleMouseLeave}
      {...hoverProps} // Apply the scale animation to the group
    />
  );
};

export default MineModel;
