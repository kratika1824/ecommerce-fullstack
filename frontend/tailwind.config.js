/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          burgundy: "#4a0e18",
          burgundylight: "#7f2030",
          gold: "#c99a2a",
          goldlight: "#e8bc55",
          golddark: "#8a5a10",
        },
      },
    },
  },
  plugins: [],
}
