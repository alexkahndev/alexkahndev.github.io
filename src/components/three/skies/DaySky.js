import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export const DaySky = () => {
  const map = useTexture("./resources/skies/day-sky.jpg");

  return (
    <mesh>
      <sphereGeometry args={[100, 64, 64]} />
      <meshBasicMaterial map={map} side={THREE.BackSide} />
    </mesh>
  );
};
