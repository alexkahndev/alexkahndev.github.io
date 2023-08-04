import React, { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const BackgroundViewerBackground = () => {
  const { size } = useThree();

  return (
    <mesh>
        <planeGeometry args={[size.width, size.height]} />
        <meshBasicMaterial color="white" side={THREE.DoubleSide}/>
    </mesh>
  );
};

export default BackgroundViewerBackground;
