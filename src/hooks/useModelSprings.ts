import { useSprings } from "@react-spring/three";

export const useModelSprings = (scales: number[]) => {
  const [modelSprings, modelApi] = useSprings(scales.length, (index) => ({
    scale: scales[index],
    config: { mass: 1, tension: 280, friction: 60, duration: 300 },
  }));

  const handleModelHover = (index: number) => {
    modelApi.start((i) => {
      if (i !== index) return;

      return {
        scale: scales[index] * 1.2,
      };
    });
  };

  const handleModelUnhover = (index: number) => {
    modelApi.start((i) => {
      if (i !== index) return;

      return {
        scale: scales[index],
      };
    });
  };

  const handleModelClick = (index: number) => {
    console.log(`Model ${index} clicked!`);
  };

  return {
    modelSprings,
    handleModelHover,
    handleModelUnhover,
    handleModelClick,
  };
};
