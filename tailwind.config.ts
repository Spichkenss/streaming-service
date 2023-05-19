import { type Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0e0e10",
        primary: "#1f1f23",
        secondary: "#18181b",
        brand: "#772ce8",
        text: "#efeff1",
      },
    },
  },
  plugins: [],
} satisfies Config;
