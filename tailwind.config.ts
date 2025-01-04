import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: "var(--background)",
        backgroundSecondary: "var(--background-secondary)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      animation: {
        blobanimate: "movement 4s ease-in-out infinite both alternate",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        movement: {
          "0%": { borderRadius: "100% 100% 100% 100% / 100% 100% 100% 100%" },
          "100%": {
            borderRadius: "33% 67% 70% 30% / 30% 40% 70% 70%",
          },
          "20%": {
            borderRadius: "37% 63% 51% 49% / 37% 35% 35% 63%",
          },
          "40%": {
            borderRadius: "36% 64% 64% 36% / 64% 48% 52% 55%",
          },
          "60%": {
            borderRadius: "37% 63% 51% 49% / 45% 45% 70% 73%",
          },
          "80%": {
            borderRadius: "40% 60% 42% 58% / 51% 51% 49% 59%",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;



