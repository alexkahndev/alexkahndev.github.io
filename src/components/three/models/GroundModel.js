import React, { useEffect, useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const GroundModel = () => {
  const url = './resources/props/ground.glb';
  const desiredSize = 1000;
  const name = 'ground';

  const [modelLoaded, setModelLoaded] = useState(false);
  //const gltf = useLoader(GLTFLoader, url);
  const modelRef = useRef();
  const groundRef = useRef();

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
    if (modelLoaded && groundRef.current && modelRef.current) {
      groundRef.current.add(modelRef.current);
      groundRef.current.position.set(0, 0, 0);
    }
  }, [modelLoaded]);

  if (!modelLoaded) {
    // You can render a loading indicator here while the model is loading
    return null;
  }

  return <group ref={groundRef} />;
};

export default GroundModel;
