import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        heading: ["var(--font-heading)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        arabic: ["var(--font-arabic)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#f8f9ff",
        foreground: "#0b1c30",
        primary: {
          DEFAULT: "#07163F", // Deep Mediterranean Navy
          container: "#131b2e",
          fixed: "#dae2fd",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#9d4300",
          container: "#FF8A1F", // Logistics Amber
          fixed: "#ffdbca",
          "fixed-dim": "#ffb690",
          foreground: "#ffffff",
        },
        tertiary: {
          DEFAULT: "#2563EB", // Electric Blue
          container: "#00174b",
          fixed: "#dbe1ff",
        },
        surface: {
          DEFAULT: "#f8f9ff",
          bright: "#f8f9ff",
          dim: "#cbdbf5",
          variant: "#d3e4fe",
          container: {
            DEFAULT: "#e5eeff",
            low: "#eff4ff",
            lowest: "#ffffff",
            high: "#dce9ff",
            highest: "#d3e4fe",
          },
        },
        "on-surface": {
          DEFAULT: "#0b1c30",
          variant: "#45464d",
        },
        "on-primary": {
          DEFAULT: "#ffffff",
          container: "#7c839b",
          fixed: "#131b2e",
        },
        "on-secondary": {
          DEFAULT: "#ffffff",
          container: "#5c2400",
          fixed: "#341100",
        },
        success: "#12B76A",
        warning: "#F79009",
        error: "#EF4444",
        outline: {
          DEFAULT: "#76777d",
          variant: "#c6c6cd",
        }
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "3rem",
        full: "9999px",
      },
      boxShadow: {
        e1: "0 2px 8px rgba(7, 22, 63, 0.04)",
        e2: "0 12px 32px rgba(7, 22, 63, 0.08)",
        e3: "0 24px 64px rgba(7, 22, 63, 0.12)",
        orange: "0 8px 32px rgba(253, 118, 26, 0.25)",
      },
      keyframes: {
        "dash-flow": {
          to: { "stroke-dashoffset": "-24" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        "dash-flow": "dash-flow 2s linear infinite",
        "float": "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;