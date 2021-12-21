// see doc for config options - https://tailwindcss.com/docs/configuration

const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: true,
    content: [
      "./public/**/*.html",
      "./public/*.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    options: {
      safelist: [],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
    },
    extend: {},
  },
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
  ],
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addComponents }) {
      addComponents([
        {
          ".container": { width: "100%" },
        }
      ]);
    }),
  ],
}
