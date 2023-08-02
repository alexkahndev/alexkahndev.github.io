import React, { useRef, useEffect } from 'react';
import { useThree } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';

const ExperimentalCamera = () => {
  const { camera, gl, size } = useThree();
  const controlsRef = useRef();

  // Set the initial position of the camera based on canvas size
  const initialCameraPosition = [0, size.width * 0.5, size.height * 0.5];
  camera.position.set(...initialCameraPosition);
  camera.lookAt(0, 0, 0); // Point the camera towards the origin where your island is located

  useEffect(() => {
    const handleResize = () => {
      const { clientWidth, clientHeight } = gl.domElement;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [camera, gl]);

  return (
    <OrbitControls
      makeDefault
      ref={controlsRef}
      enableZoom={true}
      enablePan={false}
      minDistance={size.width * 0.5}  // Set the minimum distance to zoom in based on canvas width
      maxDistance={size.width * 1.4}  // Set the maximum distance to zoom out based on canvas width
      onUpdate={() => controlsRef.current && controlsRef.current.update()}
    />
  );
};

export default ExperimentalCamera;
