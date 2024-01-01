import { useRef } from "react";

const PointLight = () => {
  const lightRef = useRef();

  return (
    <pointLight
      ref={lightRef}
      color={0xffffff}
      intensity={0.9}
      distance={100000}
      castShadow
      shadow-mapSize-width={512}
      shadow-mapSize-height={512}
      shadow-camera-near={0.5}
      shadow-camera-far={5000}
      position={[0, 50, 120]}
    />
  );
};

export default PointLight;
