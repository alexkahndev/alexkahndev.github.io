import React, { useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import { Vector3 } from 'three';

const BubbleBackgroundMaterial = shaderMaterial(
  {
    time: 0.0,
    resolution: new Vector3(),
  },
  `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,
  `
  uniform vec3 resolution;
  uniform float time;
  varying vec2 vUv;

  const int numBubbles = 100;
  const float bubbleSize = 0.01;

  float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 p = (2.0 * fragCoord - resolution.xy) / resolution.y;

    vec3 color = vec3(0.0);

    for (int i = 0; i < numBubbles; i++) {
      vec2 center = vec2(rand(vec2(float(i))), rand(vec2(float(i + numBubbles))));
      float alpha = 1.0 - smoothstep(0.0, bubbleSize, distance(p, center));
      color += vec3(0.0, 0.5, 1.0) * alpha; // Set bubble color and adjust opacity
    }

    fragColor = vec4(color, 1.0);
  }

  void main() {
    mainImage(gl_FragColor, vUv * resolution.xy);
  }
  `
);

extend({ BubbleBackgroundMaterial });

const BubbleBackground = () => {
  const mesh = useRef();
  const { size } = useThree();

  useFrame((state, delta) => {
    mesh.current.material.uniforms.time.value += delta * 0.2; // Adjust speed of animation
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[size.width, size.height]} />
      <bubbleBackgroundMaterial resolution={[size.width, size.height, 1]} />
    </mesh>
  );
};

export default BubbleBackground;
