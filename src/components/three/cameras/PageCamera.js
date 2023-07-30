import {useRef} from 'react';
import {useFrame} from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
const FixedCamera = () => {
    const cameraPosition = [0, 0, 0];
    const lookAtPosition = [0, 0, 0];
  
    // Define a reference to the camera
    const cameraRef = useRef();
  
    // Use the useFrame hook to update the camera's lookAt on every frame
    useFrame(() => {
      cameraRef.current.lookAt(lookAtPosition[0], lookAtPosition[1], lookAtPosition[2]);
    });
  
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
