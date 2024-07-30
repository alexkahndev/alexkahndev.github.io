import { useSprings } from "@react-spring/three";
import { SpringRef } from "@react-spring/web";
import { LinkPaths } from "./useLinkSprings";
import { useNavigate } from "react-router-dom";

export const useModelSprings = (scales: number[]) => {
  const [modelSprings, modelApi] = useSprings(scales.length, (index) => ({
    scale: scales[index],
    config: { mass: 1, tension: 280, friction: 60, duration: 300 },
  }));

  const navigate = useNavigate();

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

  const handleModelClick = (
    href: LinkPaths,
    linkApi: SpringRef<{
      width: string;
      background: string;
    }>,
  ) => {
    navigate(href);
    linkApi.start({ width: "0" });
  };

  return {
    modelSprings,
    handleModelHover,
    handleModelUnhover,
    handleModelClick,
  };
};
