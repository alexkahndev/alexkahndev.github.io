import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { useSharedMediaQuery } from "../hooks/useSharedMediaQuery";
import { GroundModel } from "../components/models/Ground";
import { Background } from "../components/utils/Background";
import { Lighting } from "../components/utils/Lighting";
import { useEffect, useRef } from "react";
import { LighthouseModel } from "../components/models/Lighthouse";
import { BoatModel } from "../components/models/Boat";
import { DockModel } from "../components/models/Dock";
import { MineModel } from "../components/models/Mine";
import { PlaneModel } from "../components/models/Plane";

export const HomePage = () => {
  const breakpoint = useSharedMediaQuery();

  const controlRef = useRef<any>(null);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "e") {
        console.log(controlRef.current);
      }
    });

    return () => {
      document.removeEventListener("keydown", () => {});
    };
  }, []);

  return (
    <Canvas
      className="HomePage"
      style={{
        height: "100svh",
        width: "100svw",
        backgroundColor: "lightblue",
      }}
      shadows
    >
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
        <Text color="black" fontSize={0.5} position={[0, 2, 0]}>
          {breakpoint}
        </Text>
      </mesh>

      <GroundModel rotation={[0, Math.PI / 24, 0]} />
      <BoatModel
        position={[-7, 5, 15]}
        scale={2}
        rotation={[0, Math.PI / 6, 0]}
      />
      <DockModel
        position={[9.5, 4.25, -9]}
        scale={4}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <MineModel
        position={[2, 9, -16.6]}
        scale={5.5}
        rotation={[0, Math.PI / 10, 0]}
      />
      <PlaneModel position={[0, 20, 0]} scale={5} />
      <LighthouseModel
        position={[-5, 7.5, 5]}
        scale={0.6}
        rotation={[0, Math.PI / 12, 0]}
      />

      <OrbitControls
        ref={controlRef}
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
      <Lighting />
      <Background backgroundUrl="/sky.jpg" />
    </Canvas>
  );
};
