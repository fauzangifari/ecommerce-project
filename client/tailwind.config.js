/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      gold: "#FFCB74",
      gray: "#2F2F2F",
      dark: "#111111",
      light: "#F6f6f6",
      graytoblack: "434343",
    },
    extend: {},
  },
  plugins: [require("daisyui")],

  // config daisyUI
  daisyui: {
    themes: ["light", "dark", "winter"],
  },
});
