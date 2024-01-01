import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export const FuturisticSky = () => {
  const map = useTexture("./resources/skies/futuristic-sky.jpg");

  return (
    <mesh>
      <sphereGeometry args={[100, 100, 100]} />
      <meshBasicMaterial map={map} side={THREE.BackSide} />
    </mesh>
  );
};
