/* eslint-disable quotes */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      fontFamily: {
        inter: ["Inter var", "sans-serif"],
      },
      boxShadow: {
        card: "0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)",
        cardhover:
          "0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)",
      },
      colors: {
        primary: {
          DEFAULT: "#2CB7BE",
          100: "#D4F1F4",
          200: "#75D6EA",
          300: "#189AB4",
          400: "#05445E",
        },
        background: "#201D29",
      },
    },
  },
  plugins: [],
};

