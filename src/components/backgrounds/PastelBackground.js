import React, { useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import { Vector3 } from 'three';

const BeautifulComplexBackgroundMaterial = shaderMaterial(
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

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 beautifulColor(vec2 p, float t) {
  float r = 0.5 + 0.5 * sin(t + p.x * 10.0);
  float g = 0.5 + 0.5 * sin(t + p.y * 10.0);
  float b = 0.5 + 0.5 * sin(t + p.x * p.y * 5.0);
  return vec3(r, g, b);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 p = (2.0 * fragCoord - resolution.xy) / resolution.y;
  p *= 3.0;

  // Create complex patterns using fractals
  vec2 offset = vec2(1.0);
  float totalWeight = 0.0;
  vec3 color = vec3(0.0);

  for (int i = 0; i < 10; i++) {
    float t = time * float(i + 1) * 0.1;
    vec2 rotatedP = mat2(cos(t), -sin(t), sin(t), cos(t)) * (p + offset * t * 0.5);
    vec3 col = beautifulColor(rotatedP, t);
    float weight = 1.0 / (1.0 + 10.0 * length(rotatedP));
    color += col * weight;
    totalWeight += weight;
  }

  color /= totalWeight;

  // Add dynamic animation to the colors
  color += 0.5 * cos(time * 0.5) + 0.5;

  fragColor = vec4(color, 1.0);
}

void main() {
  mainImage(gl_FragColor, gl_FragCoord.xy);
}
`
);

extend({ BeautifulComplexBackgroundMaterial });

const BeautifulComplexBackground = () => {
  const mesh = useRef();
  const { size } = useThree();

  useFrame((state, delta) => {
    mesh.current.material.uniforms.time.value += delta * 0.5; // Adjust speed of animation
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[size.width, size.height]} />
      <beautifulComplexBackgroundMaterial resolution={[size.width, size.height, 1]} />
    </mesh>
  );
};

export default BeautifulComplexBackground;
