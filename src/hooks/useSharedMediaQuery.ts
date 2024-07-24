import { useEffect } from "react";
import { Breakpoints, useBreakpointStore } from "../stores/useBreakPointStore";

export const useSharedMediaQuery = (customBreakpoints?: Breakpoints) => {
  const [breakpoint, setBreakpoint] = useBreakpointStore((state) => [
    state.breakpoint,
    state.setBreakpoint,
  ]);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth: width } = window;
      setBreakpoint(width, customBreakpoints);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setBreakpoint, customBreakpoints]);

  return breakpoint;
};
