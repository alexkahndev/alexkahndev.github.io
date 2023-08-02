import React, { useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import { Vector3 } from 'three';

const FlowerBloomMaterial = shaderMaterial(
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

vec3 flowerColor(vec2 p, float t) {
  float a = atan(p.y, p.x);
  float d = length(p);
  float petal = cos(6.0 * a + t * 3.0) * 0.5 + 0.5;
  vec3 color = vec3(petal * sin(20.0 * d + t), petal * cos(15.0 * d + t), petal * sin(10.0 * d + t));
  color += vec3(petal * sin(25.0 * d - t), petal * cos(18.0 * d - t), petal * sin(12.0 * d - t));
  color *= vec3(1.0, 0.6, 0.3); // Use warm colors (orange/yellow tones)
  color *= smoothstep(1.0, 0.5, d);
  color += smoothstep(0.1, 0.3, d) * vec3(1.0, 0.8, 0.2);
  return color;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 p = (2.0 * fragCoord - resolution.xy) / resolution.y;
  p *= 2.0;
  vec3 color = vec3(0.0);

  // Create multiple flowers by applying translations to the flower positions
  for (int i = -2; i <= 2; i++) {
    for (int j = -2; j <= 2; j++) {
      vec2 offset = vec2(float(i), float(j));
      vec2 rotatedP = mat2(cos(0.4), -sin(0.4), sin(0.4), cos(0.4)) * (p - offset);
      color += flowerColor(rotatedP, time * 0.5 + float(i + j) * 0.6);
    }
  }

  color /= 25.0; // Divide by the number of flowers to average the colors

  fragColor = vec4(color, 1.0);
}

void main() {
  mainImage(gl_FragColor, gl_FragCoord.xy);
}
`
);

extend({ FlowerBloomMaterial });

const FlowerBloomBackground = () => {
  const mesh = useRef();
  const { size } = useThree();

  useFrame((state, delta) => {
    mesh.current.material.uniforms.time.value += delta * 0.5; // Adjust speed of animation
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[size.width, size.height]} />
      <flowerBloomMaterial resolution={[size.width, size.height, 1]} />
    </mesh>
  );
};

export default FlowerBloomBackground;
