import { useState, useEffect } from "react";

const defaultBreakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const useMediaQuery = (customBreakpoints = defaultBreakpoints) => {
  const [breakpoint, setBreakpoint] = useState("xs");

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth: width } = window;

      if (width < customBreakpoints.sm) {
        setBreakpoint("xs");
      } else if (width < customBreakpoints.md) {
        setBreakpoint("sm");
      } else if (width < customBreakpoints.lg) {
        setBreakpoint("md");
      } else if (width < customBreakpoints.xl) {
        setBreakpoint("lg");
      } else if (width < customBreakpoints["2xl"]) {
        setBreakpoint("xl");
      } else {
        setBreakpoint("2xl");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [customBreakpoints]);

  return breakpoint;
};
