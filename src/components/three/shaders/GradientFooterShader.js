import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

const GradientFooterShader = shaderMaterial(
  {
    uTime: 0.0,
  },
  `
  uniform float uTime;

  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,
  `
  uniform float uTime;

  varying vec2 vUv;

  void main() {
    vec2 p = -1.0 + 2.0 * vUv;
    float a = atan(p.y, p.x);
    float r = length(p);
    vec3 gradientColor = vec3(
      0.5 + 0.5 * cos(10.0 * r + uTime),
      0.5 + 0.5 * sin(5.0 * a + uTime),
      0.5 - 0.5 * cos(20.0 * r + uTime)
    );

    gl_FragColor = vec4(gradientColor, 1.0);
  }
`
);

export default GradientFooterShader;