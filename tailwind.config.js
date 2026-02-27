/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          light: "#f5f5f4",
          dark: "#0c0a09",
        },
      },
    },
  },
  plugins: [],
};
