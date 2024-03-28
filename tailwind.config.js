/** @type {import('tailwindcss').Config} */
import postcss from "postcss";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [postcss],
};
