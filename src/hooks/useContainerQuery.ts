import { useState, useEffect, useRef, RefObject } from "react";

const defaultBreakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

type Breakpoints = typeof defaultBreakpoints;

export const useContainerQuery = (
  customBreakpoints: Breakpoints = defaultBreakpoints,
): [string, RefObject<HTMLDivElement>] => {
  const [breakpoint, setBreakpoint] = useState("xs");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleResize = (entries: ResizeObserverEntry[]) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;

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
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, [customBreakpoints]);

  return [breakpoint, containerRef];
};
