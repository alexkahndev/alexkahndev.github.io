import * as THREE from 'three';
import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

const WaterBall = ({ position }) => {
  const ballRef = useRef();
  const { mouse } = useThree();

  useFrame(({ clock }) => {
    ballRef.current.rotation.x = clock.getElapsedTime() / 3;
    ballRef.current.rotation.y = clock.getElapsedTime() / 2;

    // Calculate distance between mouse and ball
    const distance = Math.sqrt(
      Math.pow(mouse.x * 100 - position[0], 2) +
      Math.pow(mouse.y * 100 - position[1], 2)
    );

    // If the mouse is near the ball, repel it away
    if (distance < 15) {
      const direction = new THREE.Vector3().subVectors(ballRef.current.position, mouse);
      const repulsionForce = 1500 / (distance + 1); // Increase the divisor to adjust the repulsion strength
      ballRef.current.position.add(direction.multiplyScalar(repulsionForce));
    }

    // Apply a color effect based on distance from the mouse
    const colorValue = distance / 150;
    const color = new THREE.Color(`hsl(${colorValue * 360}, 100%, 50%)`);
    ballRef.current.material.color = color;
  });

  return (
    <group position={position}>
      <mesh ref={ballRef}>
        <icosahedronGeometry args={[2, 0]} />
        <meshStandardMaterial color="cyan" wireframe />
      </mesh>
    </group>
  );
};

const WaterEffect = () => {
  const waterRef = useRef();
  const { clock } = useThree();

  useFrame(() => {
    waterRef.current.material.uniforms.time.value = clock.elapsedTime;
  });

  return (
    <mesh ref={waterRef}>
      <planeGeometry args={[100, 100, 100, 100]} />
      <shaderMaterial
        transparent
        uniforms={{
          time: { value: 0 },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float time;
          varying vec2 vUv;

          void main() {
            vec2 p = -1.0 + 2.0 * vUv;
            float a = time * 40.0;
            float d, e, f, g = 1.0 / 40.0 ,h ,i ,r ,q;
            e = 400.0 * (p.x * 0.5 + 0.5);
            f = 400.0 * (p.y * 0.5 + 0.5);
            i = 200.0 + sin(e * g + a / 150.0) * 20.0;
            d = 200.0 + cos(f * g / 2.0) * 18.0 + cos(e * g) * 7.0;
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
            gl_FragColor = vec4(vec3(f * i / 1.6, i / 2.0 + d / 13.0, i) * d * p.x + vec3(i / 1.3 + d / 8.0, i / 2.0 + d / 18.0, i) * d * (1.0 - p.x) , 1.0);
          }
        `}
      />
    </mesh>
  );
};

const FloatingOrbs = () => {
  const orbRef = useRef();

  useFrame(({ clock }) => {
    orbRef.current.rotation.y = clock.getElapsedTime() / 2;
  });

  return (
    <mesh ref={orbRef} position={[0, 10, 0]}>
      <sphereGeometry args={[10, 64, 64]} />
      <meshStandardMaterial color="yellow" transparent opacity={0.6} />
    </mesh>
  );
};

const ProjectsBackground = () => {
  const numWaterBalls = 30;

  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={1} />
      <WaterEffect />
      <FloatingOrbs />
      {Array.from({ length: numWaterBalls }).map((_, index) => (
        <WaterBall
          key={index}
          position={[
            Math.cos(index) * 30,
            Math.sin(index) * 30,
            Math.sin(index * 2) * 30,
          ]}
        />
      ))}
    </group>
  );
};

export default ProjectsBackground;
