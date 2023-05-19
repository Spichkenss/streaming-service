import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#0e0e10',
        primary: '#1f1f23'
      }
    },
  },
  plugins: [],
} satisfies Config;
