import { StyledA } from "./StyledA";

export const Footer = () => {
  const pages = [
    { title: "Home", href: "/home" },
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
        padding: "20px",
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
      }}
    >
      <p>© 2024 EventGames.io - All rights reserved</p>
      <nav>
        {pages.map((page) => (
          <StyledA key={page.title} href={page.href} title={page.title} />
        ))}
      </nav>
    </footer>
  );
};
