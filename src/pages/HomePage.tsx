import { Canvas } from "@react-three/fiber";
import { Background } from "../components/utils/Background";
import { Text } from "@react-three/drei";
import { useSharedMediaQuery } from "../hooks/useSharedMediaQuery";

export const HomePage = () => {
  const breakpoint = useSharedMediaQuery();

  return (
    <Canvas
      className="HomePage"
      style={{
        height: "100svh",
        width: "100svw",
        backgroundColor: "lightblue",
      }}
    >
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="hotpink" />
        <Text color="black" fontSize={0.5} position={[0, 2, 0]}>
          {breakpoint}
        </Text>
      </mesh>
      <Background backgroundUrl="/sky.jpg" />
    </Canvas>
  );
};
