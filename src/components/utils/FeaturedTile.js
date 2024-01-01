import { MeshRefractionMaterial, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

const FeaturedTile = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <MeshRefractionMaterial refractionRatio={0.98} />
    </mesh>
  );
};

export default FeaturedTile;
