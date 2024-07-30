import { Link } from "react-router-dom";
import { useBreakpointStore } from "../../stores/useBreakPointStore";
import { animated, SpringValue } from "@react-spring/web";
import { LinkPaths } from "../../hooks/useLinkSprings";

type StyledLinkProps = {
  href: LinkPaths;
  title: string;
  linkIndex: number;
  linkSpring: {
    width: SpringValue<string>;
    background: SpringValue<string>;
  };
  modelIndex: number;
  handleModelHover: (index: number) => void;
  handleModelUnhover: (index: number) => void;
  handleLinkHover: (index: number) => void;
  handleLinkUnhover: (index: number) => void;
  handleLinkClick: (href: LinkPaths) => void;
};

export const StyledLink = ({
  href,
  title,
  linkSpring,
  linkIndex,
  modelIndex,
  handleModelHover,
  handleModelUnhover,
  handleLinkHover,
  handleLinkUnhover,
  handleLinkClick,
}: StyledLinkProps) => {
  const breakpoint = useBreakpointStore((state) => state.breakpoint);

  const isMobile = breakpoint === "sm" || breakpoint === "xs";

  return (
    <div
      style={{
        display: "inline-block",
        position: "relative",
        width: isMobile ? "70px" : "150px",
        height: "auto",
      }}
      onMouseEnter={() => {
        handleModelHover(modelIndex);
        handleLinkHover(linkIndex);
      }}
      onMouseLeave={() => {
        handleModelUnhover(modelIndex);
        handleLinkUnhover(linkIndex);
      }}
    >
      <animated.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: linkSpring.width,
          height: "100%",
          background: linkSpring.background,
          borderRadius: "8px",
        }}
      />
      <Link
        to={href}
        onClick={() => handleLinkClick(href)}
        style={{
          color: "white",
          textDecoration: "none",
          padding: "16px 0",
          backgroundColor: "rgba(40, 44, 52, 0.5)",
          borderRadius: "8px",
          border: "1px solid white",
          textAlign: "center",
          position: "relative",
          display: "block",
        }}
      >
        {title}
      </Link>
    </div>
  );
};
