import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

const uniforms = {
  uTime: 0,
  uResolution: { value: new THREE.Vector2() },
};

const vertexShader = `
attribute vec3 aPosition;
attribute vec2 aTexCoord;

varying vec2 vTexCoord;

void main() {
    vTexCoord = aTexCoord;
    gl_Position = vec4(aPosition, 1.0);
}
`;

const fragmentShader = `
precision mediump float;

uniform vec2 uResolution;
uniform float uTime;

varying vec2 vTexCoord;

void main() {
    // Flag dimensions and colors
    vec2 flagSize = vec2(1.0, 0.7); // Change this to the desired size of the flag
    vec3 stripeColor = vec3(0.8, 0.0, 0.0); // Red stripe color
    vec3 starColor = vec3(1.0, 1.0, 1.0); // White star color
    vec3 blueColor = vec3(0.0, 0.0, 0.8); // Blue background color
    float starSize = 0.02; // Adjust the star size
    
    // Calculate stripe height and normalized coordinates
    float stripeHeight = flagSize.y / 13.0;
    vec2 normalizedCoord = vTexCoord * vec2(1.0, -1.0) + vec2(0.0, 1.0);
    
    // Draw blue background
    if (normalizedCoord.y > 1.0 - stripeHeight * 13.0) {
        gl_FragColor = vec4(blueColor, 1.0);
        return;
    }
    
    // Draw red and white stripes
    int stripeIndex = int(floor((1.0 - normalizedCoord.y) / stripeHeight));
    bool isRedStripe = mod(float(stripeIndex), 2.0) == 0.0;
    vec3 stripe = mix(stripeColor, vec3(1.0), float(isRedStripe));
    
    // Draw stars
    vec2 starPosition;
    float starSpacingX = flagSize.x / 15.0;
    float starSpacingY = stripeHeight / 5.0;
    
    for (int i = 0; i < 50; i++) {
        float xPosition = mod(float(i), 10.0) * 2.0 * starSpacingX + starSpacingX;
        float yPosition = 1.0 - stripeHeight * 13.0 + floor(float(i) / 10.0) * starSpacingY + starSpacingY;
        starPosition = vec2(xPosition, yPosition);
        
        // Add glowing effect to stars using time and distance from the center
        float distFromCenter = distance(starPosition, vec2(0.5));
        float glowIntensity = 0.5 + 0.5 * sin(uTime + distFromCenter * 20.0);
        vec3 starGlowColor = mix(starColor, vec3(1.0), glowIntensity);
        
        // Check if the current fragment is inside the star
        float starRadius = starSize * 0.5;
        if (abs(normalizedCoord.x - starPosition.x) < starRadius && abs(normalizedCoord.y - starPosition.y) < starRadius) {
            gl_FragColor = vec4(starGlowColor, 1.0);
            return;
        }
    }
    
    gl_FragColor = vec4(stripe, 1.0);
}

`;

const AmericaMaterial = shaderMaterial(uniforms, vertexShader, fragmentShader);

export default AmericaMaterial;
