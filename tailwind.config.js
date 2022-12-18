/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "riz-pink": "#F230D2",
        "riz-black": "#0D0D0D",
      },
    },
  },
  plugins: [require("daisyui")],
};
