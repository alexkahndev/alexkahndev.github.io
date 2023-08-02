import React, { useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import { Vector3 } from 'three';

const FractalMountainMaterial = shaderMaterial(
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

const int maxIterations = 100;

float mandelbrot(vec2 c) {
  vec2 z = c;
  for (int i = 0; i < maxIterations; i++) {
    z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
    if (length(z) > 2.0) {
      return float(i) / float(maxIterations);
    }
  }
  return 0.0;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 p = (2.0 * fragCoord - resolution.xy) / resolution.y;
  p *= 2.0;

  float scale = 2.0;
  vec2 offset = vec2(-0.5, -0.5);

  vec2 c = (p + offset) / scale;

  // Animate the Mandelbrot set by using time
  float animatedTime = time * 0.1;
  c += vec2(sin(animatedTime), cos(animatedTime));

  float fractalValue = mandelbrot(c);

  // Add a color-changing glow effect
  vec3 glowColor = vec3(sin(time * 1.5), cos(time * 2.0), sin(time * 1.0));
  vec3 color = vec3(fractalValue) + glowColor * 0.2;

  fragColor = vec4(color, 1.0);
}

void main() {
  mainImage(gl_FragColor, gl_FragCoord.xy);
}
`
);

extend({ FractalMountainMaterial });

const FractalMountainBackground = () => {
  const mesh = useRef();
  const { size } = useThree();

  useFrame((state, delta) => {
    mesh.current.material.uniforms.time.value += delta * 0.2; // Adjust speed of animation
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[size.width, size.height]} />
      <fractalMountainMaterial resolution={[size.width, size.height, 1]} />
    </mesh>
  );
};

export default FractalMountainBackground;
