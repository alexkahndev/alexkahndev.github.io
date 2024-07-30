import { Canvas } from "@react-three/fiber";
import { Background } from "../components/utils/Background";

export const BlogPage = () => {
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
      <Background backgroundUrl="/outerspace.jpg" />
    </Canvas>
  );
};
