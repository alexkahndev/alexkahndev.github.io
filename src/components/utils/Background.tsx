import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { PerspectiveCamera, useEnvironment } from "@react-three/drei";

type BackgroundProps = {
  backgroundUrl: string;
  cameraPosition?: [number, number, number];
};

export const Background = ({
  backgroundUrl,
  cameraPosition,
}: BackgroundProps) => {
  const texture = useEnvironment({
    files: backgroundUrl,
  });

  const { scene } = useThree((state) => ({ scene: state.scene }));

  useEffect(() => {
    const previousTexture = scene.background;

    scene.environment = texture;
    scene.background = texture;

    return () => {
      if (previousTexture) {
        (previousTexture as any).dispose();
      }
    };
  }, [texture, scene]);

  return (
    <>
      <directionalLight position={[3.3, 1.0, 4.4]} castShadow intensity={1} />
      <PerspectiveCamera makeDefault position={cameraPosition || [0, 0, 5]} />
    </>
  );
};
