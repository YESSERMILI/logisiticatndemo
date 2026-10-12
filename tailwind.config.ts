import type { Config } from "tailwindcss";

const config = {
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
        arabic: ["var(--font-arabic)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#07163F", // Navy 900
          700: "#0B2A7A",     // Navy 700
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#2563EB", // Blue 500
          100: "#E6EEFF",     // Blue 100
          50: "#F4F7FF",      // Blue 50
          foreground: "#FFFFFF",
        },
        orange: {
          50: "#FFF0DD",      // Orange 100 equivalent
          500: "#FF8A1F",     // Orange 500
          600: "#EE7400",     // Orange 600
          DEFAULT: "#FF8A1F",
        },
        gray: {
          50: "#F7F8FB",
          200: "#E3E7F0",
          400: "#9AA3B8",
          600: "#5B6580",
          900: "#101828",
        },
        destructive: {
          DEFAULT: "#F04438",
          foreground: "#FFFFFF",
        },
        success: "#12B76A",
        warning: "#F79009",
        muted: {
          DEFAULT: "#9AA3B8",
          foreground: "#5B6580",
        },
        accent: {
          DEFAULT: "#FF8A1F",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#101828",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#101828",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
        xl: "16px",
        "2xl": "24px",
      },
      boxShadow: {
        e1: "0 2px 8px rgba(7, 22, 63, 0.06)",
        e2: "0 12px 32px rgba(7, 22, 63, 0.10)",
        e3: "0 24px 64px rgba(7, 22, 63, 0.16)",
        orange: "0 8px 32px rgba(255, 138, 31, 0.35)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
