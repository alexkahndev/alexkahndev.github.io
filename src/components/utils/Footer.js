import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrthographicCamera, Plane } from '@react-three/drei';
import { ShaderMaterial } from '@react-three/drei';
import { Vector3 } from 'three'; // Import THREE's Vector3

const Footer = () => {
  const planeRef = useRef();

  return (
    <group>
      <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={20} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Background plane with color gradient */}
      <GradientPlane ref={planeRef} />
    </group>
  );
};

const GradientPlane = React.forwardRef((props, ref) => {
  const material = useRef();

  // Animation loop
  useFrame(({ clock }) => {
    if (material.current) {
      const time = clock.getElapsedTime();
      const color = [
        Math.sin(time * 0.4) * 0.5 + 0.5,
        Math.cos(time * 0.3) * 0.5 + 0.5,
        Math.sin(time * 0.7) * 0.5 + 0.5,
      ];
      material.current.uniforms.uColor.value.set(...color);
    }
  });

  return (
    <Plane scale={[window.innerWidth,window.innerHeight,1]} ref={ref} {...props}>
      <shaderMaterial
        ref={material}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uColor: { value: new Vector3(1, 1, 1) },
        }}
      />
    </Plane>
  );
});

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform vec3 uColor;
  varying vec2 vUv;
  void main() {
    gl_FragColor = vec4(uColor, 1.0);
  }
`;

export default Footer;
