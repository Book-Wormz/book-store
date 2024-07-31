/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBeige: {
          10: "#efefea",
        },
        sortGrey: {
          10: "#7d7d7d",
          20: "#384D6A",
        },
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["winter"],
  },
};
