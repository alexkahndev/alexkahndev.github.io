import { animated, SpringValue, useSpring } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { Mesh, MeshStandardMaterial, Vector3 } from "three";
import { GLTF } from "three-stdlib";
import { HomeModelProps } from "../../pages/HomePage";

type GLTFResult = GLTF & {
  nodes: {
    group1483103472: Mesh;
    group1935290195: Mesh;
    group497477137: Mesh;
    group1013140902: Mesh;
    group266338622: Mesh;
    group1382559894: Mesh;
    group1180036314: Mesh;
    group1321507465: Mesh;
    group129584791: Mesh;
  };
  materials: {
    mat20: MeshStandardMaterial;
    mat21: MeshStandardMaterial;
    mat17: MeshStandardMaterial;
    mat12: MeshStandardMaterial;
    mat23: MeshStandardMaterial;
    mat19: MeshStandardMaterial;
    mat5: MeshStandardMaterial;
    mat14: MeshStandardMaterial;
    mat8: MeshStandardMaterial;
  };

  // @ts-expect-error: gltfjsx 6.4.1 has error in types
  animations: GLTFAction[];
};

export const BoatModel = ({
  position,
  rotation,
  scale,
  onPointerEnter,
  onPointerLeave,
  onClick,
}: HomeModelProps) => {
  const { nodes, materials } = useGLTF("/boat-transformed.glb") as GLTFResult;

  return (
    <animated.group
      position={position}
      rotation={rotation}
      scale={scale}
      dispose={null}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onClick={onClick}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1483103472.geometry}
        material={materials.mat20}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1935290195.geometry}
        material={materials.mat21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group497477137.geometry}
        material={materials.mat17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1013140902.geometry}
        material={materials.mat12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group266338622.geometry}
        material={materials.mat23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1382559894.geometry}
        material={materials.mat19}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1180036314.geometry}
        material={materials.mat5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1321507465.geometry}
        material={materials.mat14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group129584791.geometry}
        material={materials.mat8}
      />
    </animated.group>
  );
};

useGLTF.preload("/boat-transformed.glb");
