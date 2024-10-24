import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      lexend: "Lexend",
      fira: "Fira Sans",
    },
    extend: {
      colors: {
        "teal-green": "#0BE58A",
        gray: {
          DEFAULT: "rgba(21, 11, 43, 0.7)",
          light: "rgba(21, 11, 43, 0.05)",
        },
      },
      backgroundImage: {
        hero: "url('./src/assets/hero.webp')",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: false,
  },
};
