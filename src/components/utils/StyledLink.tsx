import { Link } from "react-router-dom";
import { useBreakpointStore } from "../../stores/useBreakPointStore";
import { animated, useSpring } from "@react-spring/web";

type StyledLinkProps = {
  href: string;
  title: string;
};

export const StyledLink = ({ href, title }: StyledLinkProps) => {
  const breakpoint = useBreakpointStore((state) => state.breakpoint);

  const isMobile = breakpoint === "sm" || breakpoint === "xs";

  const [linkSpring, linkApi] = useSpring(() => ({
    width: "0%",
    config: {duration:300}
  }));


  const handleLinkHover = () => {
    linkApi.start({
      width: "100%",
    });
  }

  const handleLinkUnhover = () => {
    linkApi.start({
      width: "0%",
    });
  } 

  return (
    <div
      style={{
        display: "inline-block",
        position: "relative",
        width: isMobile ? "70px" : "150px",
        height: "auto",
      }}
      onMouseEnter={handleLinkHover}
      onMouseLeave={handleLinkUnhover}
      
    >
      <animated.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: linkSpring.width,
          height: "100%",
          backgroundColor: "red",
          borderRadius: "8px",
        }}
      />
      <Link
        to={href}
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
