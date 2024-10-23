import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "teal-green": "#0BE58A",
      gray: "rgba(21, 11, 43, 0.7)",
      "gray-light": "rgba(21, 11, 43, 0.05)",
    },
    fontFamily: {
      lexend: "Lexend",
      fira: "Fira Sans",
    },
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
};
