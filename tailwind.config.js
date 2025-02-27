/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      jost: ["Jost", "sans-serif"],
      "public-sans": ["Public Sans", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};

