import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
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
      backgroundColor: {
        "primary-dark": "var(--primary-dark-color)",
        "primary-light": "var(--primary-light-color)",
        "primary-color": "var(--primary-color)",
        "line-color": "var(--line-color)",
      },
      borderColor: {
        "line-color": "var(--line-color)",
      },
      textColor: {
        "line-color": "var(--line-color)",
        "primary-dark": "var(--primary-dark-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;
