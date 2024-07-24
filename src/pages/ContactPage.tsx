import { Canvas } from "@react-three/fiber";

export const ContactPage = () => {
  return (
    <Canvas>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="hotpink" />
      </mesh>
    </Canvas>
  );
};
