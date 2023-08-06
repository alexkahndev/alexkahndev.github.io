import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three"; 

const uniforms = {
    uTime: 0.0,
    uResolution: new THREE.Vector3(),
};

const vertexShader = `
varying vec2 vUv;

void main()	{
    vUv = uv;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}
`;

const fragmentShader = `
uniform vec3 resolution;
uniform float time;



`;

const FlowFieldMaterial = shaderMaterial(
    uniforms,
    vertexShader,
    fragmentShader
  );
  
  export default FlowFieldMaterial;