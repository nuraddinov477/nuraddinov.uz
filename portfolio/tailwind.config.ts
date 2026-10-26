import type { Config } from "tailwindcss";

// Theme colors are CSS variables (see app/globals.css) so one class works in
// both light (:root) and dark (.dark) mode.
const themed = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: themed("bg"),
        surface: themed("surface"),
        "surface-2": themed("surface-2"),
        ink: themed("ink"),
        body: themed("body"),
        muted: themed("muted"),
        line: themed("line"),
        accent: themed("accent"),
        "accent-soft": themed("accent-soft"),
        "accent-ink": themed("accent-ink"),
        sky: themed("sky"),
      },
      fontFamily: {
        sans: ["var(--font-sans)", "PingFang SC", "Microsoft YaHei", "sans-serif"],
        heading: ["var(--font-heading)", "PingFang SC", "Microsoft YaHei", "sans-serif"],
      },
      borderRadius: {
        clay: "2rem",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "page-in": "pageIn 0.45s ease both",
        blink: "blink 1s step-end infinite",
        float: "float 4s ease-in-out infinite",
        blob: "blob 14s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pageIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(30px, -20px) scale(1.08)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
