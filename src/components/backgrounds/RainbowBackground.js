import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const BackgroundShader = () => {
  const planeRef = useRef();

  useFrame(({ clock }) => {
    const material = planeRef.current.material;

    // Update shader uniforms based on time
    material.uniforms.time.value = clock.elapsedTime;
  });

  return (
    <mesh ref={planeRef} position={[0, 0, -10]} rotation={[0, 0, 0]}>
      <planeGeometry args={[100, 100, 100, 100]} />
      <shaderMaterial
        uniforms={{
          time: { value: 0 },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float time;
          varying vec2 vUv;

          void main() {
            // Generate complex visual effect using noise functions and time-based animation
            float r = cos(time * 0.2 + vUv.x * 3.0) + sin(time * 0.3 + vUv.y * 4.0);
            float g = sin(time * 0.4 + vUv.y * 5.0) + cos(time * 0.5 + vUv.x * 6.0);
            float b = cos(time * 0.6 + vUv.y * 7.0) + sin(time * 0.7 + vUv.x * 8.0);

            vec3 color = vec3(r, g, b) * 0.5 + 0.5;

            gl_FragColor = vec4(color, 1.0);
          }
        `}
      />
    </mesh>
  );
};

const RainbowBackground = () => {
  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={1} />
      <BackgroundShader />
    </group>
  );
};

export default RainbowBackground;
