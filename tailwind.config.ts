import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        card: "var(--card)",
        black: "var(--black)",
        white: "var(--white)",
      },
      writingMode: {
        "vertical-rl": "vertical-rl",
      },
      letterSpacing: {
        "very-wide": "0.5em",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".writing-mode-vertical-rl": {
          "writing-mode": "vertical-rl",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
export default config;
