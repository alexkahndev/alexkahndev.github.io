import React, { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { extend } from "@react-three/fiber";
import AmericaMaterial from "../three/materials/AmericaMaterial";

extend({ AmericaMaterial });

const AmericanBackground = () => {
  const mesh = useRef();
  const { size } = useThree();

  useFrame((state, delta) => {
    mesh.current.material.uniforms.time.value += delta;
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[size.width, size.height]} />
      <americaMaterial resolution={[size.width,size.height]}/>
    </mesh>
  );
};

export default AmericanBackground;
