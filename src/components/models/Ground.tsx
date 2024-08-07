/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 ground.glb --types --shadows --transform --keepmaterials 
Files: ground.glb [1.16MB] > /home/alexkahn/alex/portfolio/src/assets/glb/ground-transformed.glb [36.31KB] (97%)
*/

import { Mesh, MeshStandardMaterial } from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_129: Mesh;
    Object_4: Mesh;
    Object_6: Mesh;
    Object_12: Mesh;
    Object_13: Mesh;
    Object_14: Mesh;
    Object_15: Mesh;
    Object_6_1: Mesh;
    Object_7: Mesh;
  };
  materials: {
    ["Material.006"]: MeshStandardMaterial;
    ["Material.003"]: MeshStandardMaterial;
    ["Material.001"]: MeshStandardMaterial;
    ["Material.002"]: MeshStandardMaterial;
    ["Material.004"]: MeshStandardMaterial;
    ["Material.005"]: MeshStandardMaterial;
    ["Material.010"]: MeshStandardMaterial;
    ["Material.011"]: MeshStandardMaterial;
  };

  // @ts-expect-error: gltfjsx 6.4.1 has error in types
  animations: GLTFAction[];
};

export const GroundModel = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF("/ground-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_129.geometry}
        material={materials["Material.006"]}
        position={[6.639, 5.184, -11.768]}
        rotation={[-0.369, 0.432, 0.544]}
        scale={0.561}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials["Material.003"]}
        scale={25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials["Material.001"]}
        position={[-0.036, 3.616, -0.061]}
        rotation={[0, -0.637, 0]}
        scale={25.242}
      />
      <instancedMesh
        args={[nodes.Object_12.geometry, materials["Material.002"], 9]}
        castShadow
        receiveShadow
        // @ts-expect-error
        instanceMatrix={nodes.Object_12.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Object_13.geometry, materials["Material.004"], 9]}
        castShadow
        receiveShadow
        // @ts-expect-error
        instanceMatrix={nodes.Object_13.instanceMatrix}
      />

      <instancedMesh
        args={[nodes.Object_14.geometry, materials["Material.005"], 9]}
        castShadow
        receiveShadow
        // @ts-expect-error
        instanceMatrix={nodes.Object_14.instanceMatrix}
      />

      <instancedMesh
        args={[nodes.Object_15.geometry, materials["Material.006"], 9]}
        castShadow
        receiveShadow
        // @ts-expect-error
        instanceMatrix={nodes.Object_15.instanceMatrix}
      />

      <instancedMesh
        args={[nodes.Object_6_1.geometry, materials["Material.010"], 17]}
        castShadow
        receiveShadow
        // @ts-expect-error
        instanceMatrix={nodes.Object_6_1.instanceMatrix}
      />

      <instancedMesh
        args={[nodes.Object_7.geometry, materials["Material.011"], 17]}
        castShadow
        receiveShadow
        // @ts-expect-error
        instanceMatrix={nodes.Object_7.instanceMatrix}
      />
    </group>
  );
};

useGLTF.preload("/ground-transformed.glb");
