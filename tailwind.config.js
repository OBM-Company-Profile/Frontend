/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        pr00: "#D7D8EF",
        pr02: "#9D9ED7",
        pr03: "#8181CB",
        pr07: "#313277",
        pr08: " #25265A",
        pr09: "#191A3D",
        sc06: "#00B7B6",
        ne01: " #F4F4FB",
        ne02: "#0D0E21",
      },
      fontSize: {},
      spacing: {
        43: "10.97rem",
        352: "22rem",
        320: "20rem",
        480: "30rem",
        512: "32rem",
        660: "41rem",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
