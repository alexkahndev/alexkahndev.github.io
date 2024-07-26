/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 mine.glb --types --shadows --transform --keepmaterials 
Files: mine.glb [141.87KB] > /home/alexkahn/alex/portfolio/src/assets/glb/mine-transformed.glb [17.21KB] (88%)
*/

import { Mesh, MeshStandardMaterial, Vector3 } from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { animated, useSpring } from "@react-spring/three";

type GLTFResult = GLTF & {
  nodes: {
    Mine_1: Mesh;
    Mine_2: Mesh;
    Mine_3: Mesh;
    Mine_4: Mesh;
    Mine_5: Mesh;
  };
  materials: {
    Stone: MeshStandardMaterial;
    Metal: MeshStandardMaterial;
    Metal_Light: MeshStandardMaterial;
    Wood: MeshStandardMaterial;
    Wood_Light: MeshStandardMaterial;
  };

  // @ts-expect-error: gltfjsx 6.4.1 has error in types
  animations: GLTFAction[];
};

export const MineModel = (props: JSX.IntrinsicElements["group"]) => {
  let baseScale = 1;

  if (props.scale instanceof Vector3) {
    baseScale = props.scale.x;
  } else if (typeof props.scale === "number") {
    baseScale = props.scale;
  }

  const [modelSpring, modelApi] = useSpring(() => ({
    scale: baseScale,
    config: { mass: 1, tension: 280, friction: 60, duration: 300 },
  }));

  const handleModelHover = () => {
    modelApi.start({
      scale: baseScale * 1.1,
    });
  };

  const handleModelUnhover = () => {
    modelApi.start({ scale: baseScale });
  };

  const handleModelClick = () => {
    // You can define any click handling logic here
  };

  const { nodes, materials } = useGLTF("/mine-transformed.glb") as GLTFResult;
  return (
    <animated.group
      {...props}
      dispose={null}
      {...modelSpring}
      onPointerOver={handleModelHover}
      onPointerOut={handleModelUnhover}
      onClick={handleModelClick}
    >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mine_1.geometry}
          material={materials.Stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mine_2.geometry}
          material={materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mine_3.geometry}
          material={materials.Metal_Light}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mine_4.geometry}
          material={materials.Wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mine_5.geometry}
          material={materials.Wood_Light}
        />
      </group>
    </animated.group>
  );
};

useGLTF.preload("/mine-transformed.glb");
