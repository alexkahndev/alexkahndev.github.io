import { Canvas } from "@react-three/fiber";
import { Background } from "../components/utils/Background";
import { OrbitControls } from "@react-three/drei";
import { AboutContent } from "../components/content/AboutContent";

export const AboutPage = () => {
  return (
    <div
      style={{
        height: "100svh",
        width: "100svw",
        display: "flex",
        justifyContent: "center",
        paddingTop: "2rem",
      }}
    >
      <AboutContent />
      <Canvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
        shadows
      >
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
    </div>
  );
};
