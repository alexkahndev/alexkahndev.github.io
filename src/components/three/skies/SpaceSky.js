import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export const SpaceSky = () => {
  const map = useTexture("./resources/skies/space-sky.jpg");

  return (
    <mesh>
      <sphereGeometry args={[100, 100, 100]} />
      <meshBasicMaterial map={map} side={THREE.BackSide} />
    </mesh>
  );
};
