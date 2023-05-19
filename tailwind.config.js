/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { colorPrimary: "#4E7D64" },
    },
    fontFamily: {
      jost: ["Jost", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
