/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B88E2F",      // The gold/brown button color
        primaryLight: "#FFF3E3", // The beige hero box background
        heading: "#333333",      // Dark titles
        body: "#666666",         // Grey text
        lightBg: "#F4F5F7",      // Card background
      },
    },
  },
  plugins: [],
}