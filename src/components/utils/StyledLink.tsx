import { Link } from "react-router-dom";

type StyledLinkProps = {
  href: string;
  title: string;
};

export const StyledLink = ({ href, title }: StyledLinkProps) => {
  return (
    <Link
      to={href}
      style={{
        color: "white",
        textDecoration: "none",
        padding: "16px",
        backgroundColor: "rgba(40, 44, 52, 0.5)",
        borderRadius: "8px",
        border: "1px solid white",
      }}
    >
      {title}
    </Link>
  );
};
