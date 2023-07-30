import { useRef } from "react";

const DirectionalLight = () => {
    const lightRef = useRef();
    const targetRef = useRef();
  
    return (
      <>
        <directionalLight
          ref={lightRef}
          color={0xffffff}
          intensity={0.5}
          castShadow
          shadow-camera-left={-45}
          shadow-camera-right={45}
          shadow-camera-top={45}
          shadow-camera-bottom={-45}
          position={[-5, 20, 4]}
        />
        <primitive object={targetRef} position={[9, 0, -9]} />
      </>
    );
};

export default DirectionalLight;

