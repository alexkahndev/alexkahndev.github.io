import { create } from "zustand";

const defaultBreakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

// Define the type for breakpoints
export type Breakpoints = typeof defaultBreakpoints;

// Use Breakpoints type in setBreakpoint
export const useBreakpointStore = create<{
  breakpoint: keyof Breakpoints;
  setBreakpoint: (width: number, customBreakpoints?: Breakpoints) => void;
}>((set) => ({
  breakpoint: "xs",
  setBreakpoint: (width, customBreakpoints = defaultBreakpoints) => {
    if (width < customBreakpoints.sm) {
      set({ breakpoint: "xs" });
    } else if (width < customBreakpoints.md) {
      set({ breakpoint: "sm" });
    } else if (width < customBreakpoints.lg) {
      set({ breakpoint: "md" });
    } else if (width < customBreakpoints.xl) {
      set({ breakpoint: "lg" });
    } else if (width < customBreakpoints["2xl"]) {
      set({ breakpoint: "xl" });
    } else {
      set({ breakpoint: "2xl" });
    }
  },
}));
