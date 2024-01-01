import React, { useRef } from "react";
import { RoundedBox, useCubeTexture } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import FooterMaterial from "../three/materials/FooterMaterial";
import { Vector2 } from "three";
import * as THREE from "three";

extend({ FooterMaterial });

const Footer = () => {
  const { size } = useThree();
  const footerMaterialRef = useRef(); // Reference to the custom material

  useFrame((state, delta) => {
    if (footerMaterialRef.current) {
      footerMaterialRef.current.u_time += delta; // Increment u_time
    }
  });

  return (
    <mesh position={[0, 0, 25]}>
      <boxGeometry args={[50, 5, 5]} />
      <footerMaterial
        ref={footerMaterialRef}
        u_time={0.0}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default Footer;
