import { useRef } from "react";

const AmbientLight = () => {
  const lightRef = useRef();

  return (
    <ambientLight
      ref={lightRef}
      color={0xffffff}
      intensity={0.5} // Adjust the intensity as needed
    />
  );
};

export default AmbientLight;
