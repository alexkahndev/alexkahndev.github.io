import React, { useEffect, useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useSpring, a } from '@react-spring/three';
import { useNavigate } from 'react-router-dom';

const BoatModel = () => {
  const url = './resources/props/boat.glb';
  const scale = 25;
  const name = 'boat';

  const [modelLoaded, setModelLoaded] = useState(false);
  //const gltf = useLoader(GLTFLoader, url);
  const modelRef = useRef();
  const boatRef = useRef();
  const [hovered, setHovered] = useState(false); // State for hover effect
  const navigate = useNavigate(); // Use navigate hook for routing

  useEffect(() => {
    // Load the model asynchronously using GLTFLoader
    new GLTFLoader().load(url, (gltf) => {
      // Set the scale of the model
      gltf.scene.scale.set(scale, scale, scale);
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
    if (modelLoaded && boatRef.current && modelRef.current) {
      boatRef.current.add(modelRef.current);
      boatRef.current.position.set(-200, 75, 200);
      boatRef.current.rotation.y = Math.PI * 2 / 3 + 0.5; // Set the initial rotation
    }
  }, [modelLoaded]);

  const handleClick = () => {
    // Navigate to the about page (replace '/about' with the actual path to your about page)
    navigate('/about');
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
      ref={boatRef}
      onClick={handleClick} // Add click handler to navigate to the about page
      onPointerOver={handleMouseEnter}
      onPointerOut={handleMouseLeave}
      {...hoverProps} // Apply the scale animation to the group
    />
  );
};

export default BoatModel;
