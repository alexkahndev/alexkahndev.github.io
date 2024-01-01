import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";

const StarModel = ({ radius = 50, speed = 4, color = [1, 1, 1], ...props }) => {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.set(Math.cos(t) * radius, 0, Math.sin(t) * radius);
  });

  return (
    <group {...props}>
      <Line
        worldUnits
        points={[
          new THREE.Vector3(-0.25, 0, 0),
          new THREE.Vector3(0.25, 0, 0),
          new THREE.Vector3(0, -0.25, 0),
          new THREE.Vector3(0, 0.25, 0),
        ]}
        color={color}
        lineWidth={0.15}
      />
      <Line
        worldUnits
        points={[
          new THREE.Vector3(-0.15, -0.15, 0),
          new THREE.Vector3(0.15, 0.15, 0),
          new THREE.Vector3(0.15, -0.15, 0),
          new THREE.Vector3(-0.15, 0.15, 0),
        ]}
        color={color}
        lineWidth={0.15}
      />
      <Line
        worldUnits
        points={[
          new THREE.Vector3(-0.15, 0, -0.15),
          new THREE.Vector3(0.15, 0, 0.15),
          new THREE.Vector3(0.15, 0, -0.15),
          new THREE.Vector3(-0.15, 0, 0.15),
        ]}
        color={color}
        lineWidth={0.15}
      />
      <Line
        worldUnits
        points={[
          new THREE.Vector3(0, -0.15, -0.15),
          new THREE.Vector3(0, 0.15, 0.15),
          new THREE.Vector3(0, 0.15, -0.15),
          new THREE.Vector3(0, -0.15, 0.15),
        ]}
        color={color}
        lineWidth={0.15}
      />
      <mesh ref={ref}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
    </group>
  );
};

const GalaxyModel = (props) => {
  return (
    <group {...props}>
      <StarModel position={[0, 0, 0]} radius={5} speed={2} color={[1, 1, 1]} />
      <StarModel position={[0, 0, 0]} radius={7} speed={3} color={[1, 0, 0]} />
      <StarModel position={[0, 0, 0]} radius={9} speed={4} color={[0, 1, 0]} />
      <StarModel position={[0, 0, 0]} radius={11} speed={5} color={[0, 0, 1]} />
      <StarModel position={[0, 0, 0]} radius={13} speed={6} color={[1, 1, 0]} />
    </group>
  );
};

export default GalaxyModel;
