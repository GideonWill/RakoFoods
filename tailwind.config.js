/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#097969", // Deep green
        secondary: "#333333",
        accent: "#ff9f1c", // Orange accent
        lightgreen: "#d1e7dd", // Light green for backgrounds
      },
      fontFamily: {
        sans: ["Gotham SSm A", "Gotham SSm B", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
