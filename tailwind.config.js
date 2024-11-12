/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tt-primary": "#008080",
        "tt-black": "#0E0E2C",
        "tt-grey": "#A0A4AB",
        "tt-white": "#FFFFFF",
      }
    },
  },
  plugins: [],
};