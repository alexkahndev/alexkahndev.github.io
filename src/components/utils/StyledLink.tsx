import { Link } from "react-router-dom";
import { useBreakpointStore } from "../../stores/useBreakPointStore";

type StyledLinkProps = {
  href: string;
  title: string;
};

export const StyledLink = ({ href, title }: StyledLinkProps) => {

  const breakpoint = useBreakpointStore((state) => state.breakpoint);

  const isMobile = breakpoint === "sm" || breakpoint === "xs";

  return (
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
        width: isMobile ? "70px" : "150px",
      }}
    >
      {title}
    </Link>
  );
};
