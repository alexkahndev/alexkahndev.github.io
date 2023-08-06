import { extend } from '@react-three/fiber';
// ... other imports

const generatePositions = (width, height) => {
  // we need to create a vec4 since we're passing the positions to the fragment shader
  // data textures need to have 4 components, R, G, B, and A
  const length = width * height * 4;
  const data = new Float32Array(length);

  // Fill Float32Array here

  return data;
};

// Create a custom simulation shader material
class SimulationMaterial extends THREE.ShaderMaterial {
  constructor(size) {
    // Create a Data Texture with our positions data
    const positionsTexture = new THREE.DataTexture(
      generatePositions(size, size),
      size,
      size,
      THREE.RGBAFormat,
      THREE.FloatType
    );
    positionsTexture.needsUpdate = true;

    const simulationUniforms = {
      // Pass the positions Data Texture as a uniform
      positions: { value: positionsTexture },
    };

    super({
      uniforms: simulationUniforms,
      vertexShader: simulationVertexShader,
      fragmentShader: simulationFragmentShader,
    });
  }
}

// Make the simulation material available as a JSX element in our canva
extend({ SimulationMaterial: SimulationMaterial });