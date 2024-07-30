import { useSprings } from "@react-spring/web";

export const useLinkSprings = (numLinks: number) => {
  const [linkSprings, linkApi] = useSprings(numLinks, () => ({
    width: "0%",
    config: { duration: 300 },
  }));

  const handleLinkHover = (index: number) => {
    linkApi.start((i) => {
      if (i !== index) return;

      return {
        width: "100%",
      };
    });
  };

  const handleLinkUnhover = (index: number) => {
    linkApi.start((i) => {
      if (i !== index) return;

      return {
        width: "0%",
      };
    });
  };

  return {
    linkSprings,
    handleLinkHover,
    handleLinkUnhover,
  };
};
