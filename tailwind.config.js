/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        aqua: "#00ffee",
        "aqua-disabled": "#1c98a3",
        disabled: "#a3a3a3",
      },
      fontFamily: {
        robotronika: ["Robotronika", "sans-serif"],
      }
    },
  },
  plugins: [],
};
