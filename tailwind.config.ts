import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
} satisfies Config;
