import React, { useRef, useEffect } from "react";
import { useThree } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";

const ProjectsPageCamera = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useEffect(() => {
    // The following lines help improve the orbit controls behavior
    camera.position.set(0, 0, 0);
    camera.lookAt(0, 0, 0); // Point the camera towards the origin where your island is located

    const handleResize = () => {
      const { clientWidth, clientHeight } = gl.domElement;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [camera, gl]);

  return (
    <OrbitControls
      makeDefault
      ref={controlsRef}
      enableZoom={false}
      enablePan={false}
      enableRotate={true}
      onUpdate={() => controlsRef.current && controlsRef.current.update()}
    />
  );
};

export default ProjectsPageCamera;
