/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DDFFBB",
        secondary: "#C7E9B0",
        third: "#B3C99C",
        fourth: "#A4BC92",
      },
    },
  },
  plugins: [],
};
