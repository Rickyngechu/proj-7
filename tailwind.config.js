/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      sm: "375px",
      xl: "1440px",
    },
    colors: {
      "Light-red": "hsl(356, 100%, 66%)",
      "Very-light-red": "hsl(355, 100%, 74%)",
      "Very-dark-blue": "hsl(208, 49%, 24%)",

      White: " hsl(0, 0%, 100%)",
      "Grayish-blue": " hsl(240, 2%, 79%)",
      "Verydark-grayish-blue": " hsl(207, 13%, 34%)",
      "Verydark-black-blue": "hsl(240, 10%, 16%)",

      "Very-light-red": "hsl(13, 100%, 72%)",
      "Light-red": "hsl(353, 100%, 62%)",

      "Verydark-gray-blue": "hsl(237, 17%, 21%)",
      "Verydark-desaturated-blue": "hsl(237, 23%, 32%)",
    },
    fontFamily: {
      sans: ["Overpass", "Ubuntu", "sans-serif"],
    },
    fontWeight: {
      thin: 300,
      semibold: 400,
      bold: 500,
      black: 600,
      dark: 700,
    },
  },
  plugins: [],
};
