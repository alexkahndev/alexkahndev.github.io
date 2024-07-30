import { Canvas } from "@react-three/fiber";
import { Background } from "../components/utils/Background";
import { OrbitControls } from "@react-three/drei";

export const AboutPage = () => {
  return (
    <Canvas
    style={{
      height: "100svh",
      width: "100svw",
      backgroundColor: "lightblue",
    }}
    shadows
    >
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="hotpink" />
      </mesh>
      <Background backgroundUrl="/meadow.jpg" />
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        // maxPolarAngle={Math.PI / 2}
        // minPolarAngle={Math.PI / 3}
        // maxAzimuthAngle={Math.PI / 2}
        // minAzimuthAngle={-Math.PI / 2}
        enableDamping={true}
        dampingFactor={0.1}
      />
    </Canvas>
  );
};
