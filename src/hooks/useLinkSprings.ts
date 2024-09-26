import { useSprings } from "@react-spring/web";
import { useLocation } from "react-router-dom";

export type LinkPaths = "/" | "/about" | "/blog" | "/projects" | "/contact";

type LinkSettingsType = {
  [key in LinkPaths]: {
    background: string;
  };
};

const linkSettings: LinkSettingsType = {
  "/": { background: "linear-gradient(45deg, #003973, #E5E5BE)" },
  "/about": { background: "linear-gradient(45deg, #F12711, #F5AF19)" },
  "/blog": { background: "linear-gradient(45deg, #8E44AD, #C39BD3)" },
  "/projects": { background: "linear-gradient(45deg, #00C9FF, #92FE9D)" },
  "/contact": { background: "linear-gradient(45deg, #FC466B, #3F5EFB)" },
};

export const useLinkSprings = (numLinks: number) => {
  const location = useLocation();

  const currentPath = location.pathname as LinkPaths;
  const currentBackground =
    linkSettings[currentPath]?.background || linkSettings["/"].background;

  const [linkSprings, linkApi] = useSprings(numLinks, () => ({
    width: "0%",
    background: currentBackground,
    config: { duration: 300 },
  }));

  const handleLinkHover = (index: number) => {
    linkApi.start((i) => {
      if (i !== index) return;

      return { width: "100%" };
    });
  };

  const handleLinkUnhover = (index: number) => {
    linkApi.start((i) => {
      if (i !== index) return;

      return { width: "0%" };
    });
  };

  const handleLinkClick = (href: LinkPaths) => {
    linkApi.start({ background: linkSettings[href].background });
  };

  return {
    linkSprings,
    linkApi,
    handleLinkHover,
    handleLinkUnhover,
    handleLinkClick,
  };
};
