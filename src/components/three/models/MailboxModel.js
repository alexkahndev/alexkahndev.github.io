import React, { useEffect, useRef, useState } from 'react';
import { Gltf } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';

/*
const MailboxModelOld = () => {
  const url = './resources/props/mailbox.glb';
  const desiredSize = 35;
  //const name = 'mailbox';

  const [modelLoaded, setModelLoaded] = useState(false);
  //const gltf = useLoader(GLTFLoader, url);
  const modelRef = useRef();
  const mailboxRef = useRef();
  const [hovered, setHovered] = useState(false); // State for hover effect
  const navigate = useNavigate(); // Use navigate hook for routing

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
    hoverScale: hovered ? 1.5 : 1.0, // Adjusted to 1.05 for a slightly larger growth
    config: { mass: 1, tension: 280, friction: 60 },
  };

  const hoverProps = useSpring({
    scale: [springConfig.hoverScale, springConfig.hoverScale, springConfig.hoverScale],
    config: springConfig.config,
  });

  useEffect(() => {
    if (modelLoaded && mailboxRef.current && modelRef.current) {
      mailboxRef.current.add(modelRef.current);
      mailboxRef.current.position.set(-90, 140, 185);
      mailboxRef.current.rotation.y = Math.PI * 2 + 0.5;
    }
  }, [modelLoaded]);

  const handleClick = () => {
    // Navigate to the contact page (replace '/contact' with the actual path to your contact page)
    navigate('/contact');
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
      ref={mailboxRef}
      onClick={handleClick} // Add click handler to navigate to the contact page
      onPointerOver={handleMouseEnter}
      onPointerOut={handleMouseLeave}
      {...hoverProps} // Apply the scale animation to the group
    />
  );
};
*/


const MailboxModel = () => {
  const modelSrc = './resources/props/mailbox.glb';

  // Set the desired scale, position, and rotation values
  const scale = [100, 100, 100]; // Make the model twice as large in all directions
  const position = [2, 4, -12]; // Move the model to the specified position
  const rotation = [0, 0.2, 0]; // Rotate the model around the Y-axis by -0.5 radians (around 180 degrees)

  return (
    <mesh>
      <Gltf src={modelSrc} scale={scale} position={position} rotation={rotation} receiveShadow castShadow />
    </mesh>
  );
};

export default MailboxModel;