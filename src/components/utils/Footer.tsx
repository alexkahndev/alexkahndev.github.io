import { SpringValue } from "@react-spring/web";
import { StyledLink } from "./StyledLink";

type FooterProps = {
  linkSprings: {
    width: SpringValue<string>;
  }[];
  handleModelHover: (index: number) => void;
  handleModelUnhover: (index: number) => void;
  handleLinkHover: (index: number) => void;
  handleLinkUnhover: (index: number) => void;
};

export const Footer = ({
  handleModelHover,
  handleModelUnhover,
  handleLinkHover,
  handleLinkUnhover,
  linkSprings,
}: FooterProps) => {
  const pages = [
    { title: "Home", href: "/", modelIndex: 3 },
    { title: "About", href: "/about", modelIndex: 0 },
    { title: "Blog", href: "/blog", modelIndex: 2 },
    { title: "Projects", href: "/projects", modelIndex: 1 },
    { title: "Contact", href: "/contact", modelIndex: 4 },
  ];

  return (
    <footer
      style={{
        backgroundColor: "rgba(40, 44, 52, 0.5)",
        color: "white",
        textAlign: "center",
        width: "100%",
        padding: "16px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        zIndex: 1000,
      }}
    >
      <nav
        style={{
          display: "flex",
          width: "97.5%",
          maxWidth: "800px",
          justifyContent: "space-between",
        }}
      >
        {pages.map((page, index) => (
          <StyledLink
            key={page.title}
            href={page.href}
            title={page.title}
            linkIndex={index}
            linkSpring={linkSprings[index]}
            modelIndex={page.modelIndex}
            handleModelHover={handleModelHover}
            handleModelUnhover={handleModelUnhover}
            handleLinkHover={handleLinkHover}
            handleLinkUnhover={handleLinkUnhover}
          />
        ))}
      </nav>
      <p
        style={{
          fontSize: "0.8rem",
          color: "rgba(255, 255, 255, 0.5)",
          marginTop: "16px",
        }}
      >
        © 2024 Alex Kahn - All rights reserved
      </p>
    </footer>
  );
};
