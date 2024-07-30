import { Canvas } from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import { GroundModel } from "../components/models/Ground";
import { Background } from "../components/utils/Background";
import { Lighting } from "../components/utils/Lighting";
import { LighthouseModel } from "../components/models/Lighthouse";
import { BoatModel } from "../components/models/Boat";
import { DockModel } from "../components/models/Dock";
import { MineModel } from "../components/models/Mine";
import { PlaneModel } from "../components/models/Plane";
import { Vector3 } from "three";
import { SpringValue } from "@react-spring/three";

export type HomeModelProps = {
  position?: Vector3;
  rotation?: [number, number, number];
  scale?: SpringValue<number>;
  onPointerEnter?: () => void;
  onPointerLeave?: () => void;
  onClick?: () => void;
};

type HomePageProps = {
  modelSprings: {
    scale: SpringValue<number>;
  }[];
  handleModelClick: (index: number) => void;
  handleModelHover: (index: number) => void;
  handleModelUnhover: (index: number) => void;
  handleLinkHover: (index: number) => void;
  handleLinkUnhover: (index: number) => void;
};

export const HomePage = ({
  modelSprings,
  handleModelClick,
  handleModelHover,
  handleModelUnhover,
  handleLinkHover,
  handleLinkUnhover,
}: HomePageProps) => {

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
     

      <GroundModel rotation={[0, Math.PI / 24, 0]} />
      <BoatModel
        position={new Vector3(-7, 5, 15)}
        scale={modelSprings[0].scale}
        rotation={[0, Math.PI / 6, 0]}
        onPointerEnter={() => {
          handleModelHover(0);
          handleLinkHover(1);
        }}
        onPointerLeave={() => {
          handleModelUnhover(0);
          handleLinkUnhover(1);
        }}
        onClick={() => handleModelClick(0)}
      />
      <DockModel
        position={new Vector3(9.5, 4.25, -9)}
        scale={modelSprings[1].scale}
        rotation={[0, -Math.PI / 6, 0]}
        onPointerEnter={() => {
          handleModelHover(1);
          handleLinkHover(3);
        }}
        onPointerLeave={() => {
          handleModelUnhover(1);
          handleLinkUnhover(3);
        }}
        onClick={() => handleModelClick(1)}
      />
      <MineModel
        position={new Vector3(2, 9, -16.6)}
        scale={modelSprings[2].scale}
        rotation={[0, Math.PI / 10, 0]}
        onPointerEnter={() => {
          handleModelHover(2);
          handleLinkHover(2);
        }}
        onPointerLeave={() => {
          handleModelUnhover(2);
          handleLinkUnhover(2);
        }}
        onClick={() => handleModelClick(2)}
      />
      <PlaneModel
        position={new Vector3(0, 20, 0)}
        scale={modelSprings[3].scale}
        onPointerEnter={() => {
          handleModelHover(3);
          handleLinkHover(0);
        }}
        onPointerLeave={() => {
          handleModelUnhover(3);
          handleLinkUnhover(0);
        }}
        onClick={() => handleModelClick(3)}
      />
      <LighthouseModel
        position={new Vector3(-5, 7.5, 5)}
        scale={modelSprings[4].scale}
        rotation={[0, Math.PI / 12, 0]}
        onPointerEnter={() => {
          handleModelHover(4);
          handleLinkHover(4);
        }}
        onPointerLeave={() => {
          handleModelUnhover(4);
          handleLinkUnhover(4);
        }}
        onClick={() => handleModelClick(4)}
      />

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
      <Lighting />
      <Background backgroundUrl="/sky.jpg" cameraPosition={[0, 40, 50]} />
    </Canvas>
  );
};
