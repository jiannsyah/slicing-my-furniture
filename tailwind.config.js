/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0px",
        // xl: "125px",
        "2xl": "125px",
      },
    },
    extend: {
      colors: {
        primary: "#002939",
        secondary: "#DDC190",
        third: "#323232",
        form: "#DAD9D9",
      },
      fontFamily: {
        secondary: "OpenSans",
        third: "Roboto",
      },
    },
  },
  plugins: [],
};
