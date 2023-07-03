/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#8d8d8d",
          "200": "#1f1f1f",
          "300": "#1f1a2d",
          "400": "#110c1f",
          "500": "rgba(43, 34, 68, 0.09)",
        },
        midnightblue: "#290247",
        lightblue: "#b9e6ff",
        gainsboro: "#e7e7e7",
        darkslategray: "rgba(48, 48, 48, 0.4)",
      },
      fontFamily: {
        philosopher: "Philosopher",
      },
      borderRadius: {
        "8xs": "5px",
        "12xs-5": "0.5px",
        "3xs": "10px",
      },
    },
    fontSize: {
      mini: "15px",
      xl: "20px",
      "5xl": "24px",
      sm: "14px",
      "13xl": "32px",
      base: "16px",
      "3xs": "10px",
      xs: "12px",
      "21xl": "40px",
      "3xl": "22px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
