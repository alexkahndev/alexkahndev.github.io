import { shaderMaterial } from "@react-three/drei";
import { Vector3 } from "three";

const uniforms = {
    time: 0,
    resolution: new Vector3()
};

const vertexShader = `
  uniform vec3 resolution;

  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
 uniform float time;
uniform vec3 resolution;

varying vec2 vUv;

void main() {
  vec2 p = -1.0 + 2.0 * vUv;
  float a = time * 40.0;
  float d, e, f, g = 1.0 / 40.0, h, i, r, q;
  
  // Use the resolution uniform to scale the coordinates
  e = resolution.x * (p.x * 0.5 + 0.5);
  f = resolution.y * (p.y * 0.5 + 0.5);
  i = resolution.z + sin(e * g + a / 150.0) * 20.0;
  d = resolution.z + cos(f * g / 2.0) * 18.0 + cos(e * g) * 7.0;
  
  r = sqrt(pow(i - e, 2.0) + pow(d - f, 2.0));
  q = f / r;
  e = (r * cos(q)) - a / 2.0;
  f = (r * sin(q)) - a / 2.0;
  d = sin(e * g) * 176.0 + sin(e * g) * 164.0 + r;
  h = ((f + d) + a / 2.0) * g;
  i = cos(h + r * p.x / 1.3) * (e + e + a) + cos(q * g * 6.0) * (r + h / 3.0);
  h = sin(f * g) * 144.0 - sin(e * g) * 212.0 * p.x;
  h = (h + (f - e) * q + sin(r - (a + h) / 7.0) * 10.0 + i / 4.0) * g;
  i += cos(h * 2.3 * sin(a / 350.0 - q)) * 184.0 * sin(q - (r * 4.3 + a / 12.0) * g) + tan(r * g + h) * 184.0 * cos(r * g + h);
  i = mod(i / 5.6, 256.0) / 64.0;
  if (i < 0.0) i += 4.0;
  if (i >= 2.0) i = 4.0 - i;
  d = r / 350.0;
  d += sin(d * d * 8.0) * 0.52;
  f = (sin(a * g) + 1.0) / 2.0;

  // Define the color gradients with shades of blue, purple, and red
  vec3 color1 = vec3(0.2, 0.4, 0.8);  // Deep Blue
  vec3 color2 = vec3(0.4, 0.2, 0.8);  // Purple
  vec3 color3 = vec3(0.8, 0.2, 0.2);  // Red
  vec3 color4 = vec3(0.2, 0.6, 0.8);  // Light Blue

  // Mix the colors based on the value of i
  vec3 finalColor;
  if (i < 1.0)
    finalColor = mix(color1, color2, i);
  else if (i < 2.0)
    finalColor = mix(color2, color3, i - 1.0);
  else if (i < 3.0)
    finalColor = mix(color3, color4, i - 2.0);
  else
    finalColor = mix(color4, color1, i - 3.0);

  gl_FragColor = vec4(finalColor * d * p.x + finalColor * d * (1.0 - p.x), 1.0);
}

`;

const AnimatedRippleMaterial = shaderMaterial(
  uniforms,
  vertexShader,
  fragmentShader
);

export default AnimatedRippleMaterial;
    