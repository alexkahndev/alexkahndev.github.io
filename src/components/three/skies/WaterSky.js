import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export const WaterSky = () => {

    const map = useTexture ( './resources/skies/water-sky.jpg')

    return (
        <mesh>
            <sphereGeometry args={[100,100,100]} />
            <meshBasicMaterial map={map} side={THREE.BackSide} />
        </mesh>
    );
};