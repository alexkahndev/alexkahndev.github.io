import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FooterLink = ({ text, url }) => {
  const linkRef = useRef();
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleLinkClick = () => {
    window.open(url, '_blank');
  };

  useFrame(({ clock }) => {
    if (linkRef.current.material) {
      linkRef.current.material.uniforms.uTime.value = clock.elapsedTime;
    }
  });

  return (
    <group onPointerEnter={handleMouseEnter} onPointerLeave={handleMouseLeave} onClick={handleLinkClick}>
      <mesh ref={linkRef}>
        {/* Add the link label geometry */}
        <planeGeometry args={[1.5, 0.5]} />
        <shaderMaterial
          uniforms={{
            uTime: { value: 0.0 },
            hovered: { value: 0 },
            color1: { value: new THREE.Color('#6eeeff') },
            color2: { value: new THREE.Color('#1a66ff') },
          }}
          vertexShader={`
            uniform float uTime;
            varying vec2 vUv;

            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            uniform float uTime;
            uniform int hovered;
            uniform vec3 color1;
            uniform vec3 color2;
            varying vec2 vUv;

            void main() {
              float animationProgress = mod(uTime * 0.5, 1.0);
              vec3 color = mix(color1, color2, vUv.x * vUv.y * (hovered == 1 ? animationProgress : 1.0));
              gl_FragColor = vec4(color, 1.0);
            }
          `}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh>
        {/* Add the link text geometry */}
        <textGeometry args={[text, { size: 0.15, height: 0 }]}>
          <meshBasicMaterial color="#ffffff" />
        </textGeometry>
      </mesh>
    </group>
  );
};

export default FooterLink;