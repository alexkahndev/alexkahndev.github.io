type StyledAProps = {
  href: string;
  title: string;
};

export const StyledA = ({ href, title }: StyledAProps) => {
  return (
    <a
      href={href}
      style={{
        margin: "0 16px",
        color: "white",
        textDecoration: "none",
        padding: "16px",
        backgroundColor: "rgba(40, 44, 52, 0.5)",
        borderRadius: "8px",
        border: "1px solid white",
      }}
    >
      {title}
    </a>
  );
};
