import React, { useRef, useEffect } from 'react';
import { PerspectiveCamera } from '@react-three/drei';

const FixedCamera = () => {
  const cameraPosition = [0, 500, 800];
  const lookAtPosition = [0, 0, 0];

  // Define a reference to the camera
  const cameraRef = useRef();

  // Function to handle window resize and update camera aspect ratio
  const handleResize = () => {
    const { current: camera } = cameraRef;
    if (camera) {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }
  };

  // Use useEffect to add and remove window resize event listener
  useEffect(() => {
    handleResize(); // Call the function to update the aspect ratio on initial render

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Update the camera's lookAt position whenever it changes
    cameraRef.current.lookAt(lookAtPosition[0], lookAtPosition[1], lookAtPosition[2]);
  }, [lookAtPosition]);

  return (
    <PerspectiveCamera
      ref={cameraRef} // Assign the camera reference to the ref
      makeDefault
      fov={45}
      aspect={window.innerWidth / window.innerHeight}
      near={1}
      far={10000}
      position={cameraPosition}
    />
  );
};

export default FixedCamera;
