import type { Config } from "tailwindcss";

/**
 * Edelweiss design tokens.
 * Blue / navy / white primary, grey + silver secondary. One accent: "glacier" light blue for data.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" }, screens: { "2xl": "1280px" } },
    extend: {
      colors: {
        navy: { DEFAULT: "#0A2240", 900: "#06172C", 800: "#0A2240", 700: "#12335C", 600: "#1B4677" },
        blue: { DEFAULT: "#1A56A6", 700: "#134384", 500: "#1A56A6", 300: "#6E9BD6", 100: "#E6EEF8" },
        glacier: "#9CC3EE",
        silver: { DEFAULT: "#C5CDD8", 300: "#DCE2EA", 200: "#E9EDF2" },
        mist: "#F4F6F9",
        ink: { DEFAULT: "#0E1C2E", soft: "#4A5869", faint: "#76828F" },
        up: "#0F7B4A",
        down: "#C0352B",
      },
      fontFamily: {
        display: ['"Newsreader"', "Georgia", "serif"],
        sans: ['"Albert Sans"', "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 4.6vw, 4rem)", { lineHeight: "1.06", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 3.4vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.6rem, 2.4vw, 2.1rem)", { lineHeight: "1.18", letterSpacing: "-0.01em" }],
      },
      maxWidth: { prose: "66ch" },
      transitionTimingFunction: { refined: "cubic-bezier(.22,.7,.2,1)" },
      keyframes: {
        drift: { "0%": { transform: "translate(-14px,-6px)" }, "100%": { transform: "translate(14px,8px)" } },
      },
    },
  },
  plugins: [],
};

export default config;
