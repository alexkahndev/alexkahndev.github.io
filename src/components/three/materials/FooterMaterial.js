import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

const uniforms = {
  u_time: { value: 0.0 },
};

const vertexShader = `
varying vec3 vUv;

void main() {
  vUv = position; 

  vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * modelViewPosition; 
}
`;

const fragmentShader = `
uniform float u_time;
varying vec3 vUv;

void main() {
  // Define a base color palette inspired by nature
  vec3 natureColors[5];
  natureColors[0] = vec3(0.086, 0.349, 0.090);  // Green
  natureColors[1] = vec3(0.878, 0.502, 0.196);  // Orange
  natureColors[2] = vec3(0.478, 0.725, 0.831);  // Blue
  natureColors[3] = vec3(0.776, 0.678, 0.439);  // Yellow
  natureColors[4] = vec3(0.384, 0.180, 0.027);  // Brown

  // Calculate the gradient index based on time
  float gradientIndex = mod(u_time, 5.0);
  int colorIndex = int(gradientIndex);

  // Calculate the interpolation factor between colors
  float t = fract(gradientIndex);

  // Interpolate between two adjacent nature colors
  vec3 color = mix(natureColors[colorIndex], natureColors[colorIndex + 1], t);

  // Apply a wave effect using sine function
  float waveEffect = sin(u_time * 2.0) * 0.1; // Adjust the frequency and amplitude as needed
  color.rgb += waveEffect;

  gl_FragColor = vec4(color, 1.0);
}
`;

const FooterMaterial = shaderMaterial(uniforms, vertexShader, fragmentShader);

export default FooterMaterial;
