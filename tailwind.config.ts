import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fg: {
          navy: "#0E1F36",
          white: "#FFFFFF",
          gold: "#C4A463",
          grey: "#5A6473",
          sand: "#E9E4DB",
          midnight: "#081524",
        },
      },
      fontFamily: {
        inter: ["Inter Variable", "sans-serif"],
        cormorant: ["Cormorant Garamond", "serif"],
      },
      spacing: {
        section: "100px",
        container: "1200px",
        // Foundational Spacing Scale - Editorial Rhythm System
        "fg-xxl": "120px", // hero → next section
        "fg-xl": "96px",   // section → section
        "fg-lg": "64px",   // major subsection → next block
        "fg-md": "40px",   // header → paragraph group
        "fg-sm": "24px",   // subheader → paragraph
        "fg-xs": "16px",   // paragraph → paragraph
      },
    },
  },
  plugins: [],
};

export default config;

