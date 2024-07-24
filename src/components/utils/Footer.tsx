import { StyledLink } from "./StyledLink";

export const Footer = () => {
  const pages = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Blog", href: "/blog" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
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
        {pages.map((page) => (
          <StyledLink key={page.title} href={page.href} title={page.title} />
        ))}
      </nav>
      <p
        style={{
          fontSize: "0.8rem",
          color: "rgba(255, 255, 255, 0.5)",
          marginTop: "16px",
        }}
      >
        © 2024 EventGames.io - All rights reserved
      </p>
    </footer>
  );
};
