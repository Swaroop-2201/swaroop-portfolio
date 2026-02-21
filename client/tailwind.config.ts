import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neonBlue: "#00f5ff",
        neonPink: "#ff00ff",
        darkBg: "#0f172a",
        darkCard: "#1e293b",
      },
      boxShadow: {
        neon: "0 0 20px #00f5ff",
        neonPink: "0 0 20px #ff00ff",
      },
    },
  },
  plugins: [],
};

export default config;