import React, { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { extend } from "@react-three/fiber";
import AnimatedRippleMaterial from "../three/materials/AnimatedRippleMaterial";

extend({ AnimatedRippleMaterial });

const ProjectsBackground = () => {
  const mesh = useRef();
  const { size } = useThree();

  useFrame((state, delta) => {
    mesh.current.material.uniforms.time.value += delta;
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[size.width, size.height]} />
      <animatedRippleMaterial/>
    </mesh>
  );
};

export default ProjectsBackground;
