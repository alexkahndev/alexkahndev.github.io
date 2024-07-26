import { useRef } from "react";
import { DirectionalLight, SpotLight } from "three";
export const Lighting = () => {
  const dirLight = useRef<DirectionalLight>(null);
  const spotLight = useRef<SpotLight>(null);

  return (
    <>
      {/* Ambient light for general illumination */}
      <ambientLight intensity={0.5} />

      {/* Directional light to simulate sunlight */}
      <directionalLight
        ref={dirLight}
        castShadow
        position={[5, 10, 5]}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
      />

      {/* Spot light for focused lighting effect */}
      <spotLight
        ref={spotLight}
        castShadow
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
      />

      {/* Point light to simulate a light bulb */}
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
    </>
  );
};
