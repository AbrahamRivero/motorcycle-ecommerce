const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#6B728E",
        input: "#6B728E",
        ring: "#3C7EFC",
        background: "#2A2D3E",
        foreground: "#F4F4F4",
        primary: {
          DEFAULT: "#3F4E6A",
          foreground: "#F4F4F4",
        },
        secondary: {
          DEFAULT: "#4C9AFF",
          foreground: "#F4F4F4",
        },
        destructive: {
          DEFAULT: "#FF5370",
          foreground: "#F4F4F4",
        },
        muted: {
          DEFAULT: "#5C6B89",
          foreground: "#F4F4F4",
        },
        accent: {
          DEFAULT: "#82AAFF",
          foreground: "#F4F4F4",
        },
        popover: {
          DEFAULT: "#2A2D3E",
          foreground: "#F4F4F4",
        },
        card: {
          DEFAULT: "#3F4E6A",
          foreground: "#F4F4F4",
        },
        categories: {
          DEFAULT: "#2F3447",
        },
        trending: {
          DEFAULT: "#323750",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}