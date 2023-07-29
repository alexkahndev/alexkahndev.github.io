import React, { useEffect, useRef, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const PlaneModel = () => {
  const url = './resources/props/plane.glb';
  const desiredSize = 25; // Adjust this value to control the size of the plane
  const name = 'plane';

  const [modelLoaded, setModelLoaded] = useState(false);
  const gltf = useLoader(GLTFLoader, url);
  const modelRef = useRef();
  const planeRef = useRef();
  let elapsedTime = 0;

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

  useEffect(() => {
    if (modelLoaded && planeRef.current && modelRef.current) {
      planeRef.current.add(modelRef.current);
      planeRef.current.position.set(0, 200, 0);
      planeRef.current.direction = new THREE.Vector3(1, 0, 0);
    }
  }, [modelLoaded]);

  useFrame(() => {
    // Increment the elapsed time
    elapsedTime += 0.005;

    // Calculate the circular path
    const radius = 225; // Set the radius of the circular path
    const angle = elapsedTime; // The angle changes over time to make the plane move around the circle
    const x = radius * Math.cos(angle);
    const z = radius * Math.sin(angle);

    // Update the plane's position along the circular path
    if (planeRef.current) {
      planeRef.current.position.x = x;
      planeRef.current.position.z = z;

      // Calculate the angle for the plane's rotation
      const dist = Math.sqrt(z * z + x * x);
      let planeAngle = Math.atan2(z, x);
      planeAngle += 0.005;

      // Set the YXZ rotation order to ensure the plane's propeller is facing forward
      planeRef.current.rotation.order = 'YXZ';
      planeRef.current.rotation.y = Math.PI - planeAngle; // Rotate the plane to face the direction of movement
    }
  });

  if (!modelLoaded) {
    // You can render a loading indicator here while the model is loading
    return null;
  }

  return <group ref={planeRef} />;
};

export default PlaneModel;
