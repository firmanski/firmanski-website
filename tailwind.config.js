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
        "riz-pink": "#FF5CC7",
        "riz-black": "#000000",
        "riz-purple": "#471DE3",
        "riz-blue": "#27DBFE",
        "riz-yellow": "#FFF112",
      },
      fontFamily: {
        "riz-h": "cuisine",
        "riz-body": "museo",
      },
    },
  },
  plugins: [require("daisyui")],
};
