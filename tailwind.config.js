/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      jost: ["Jost", "sans-serif"],
    },
    colors: {
      colorPrimary: "#4E7D64",
    },
  },
  plugins: [require("daisyui")],
};
