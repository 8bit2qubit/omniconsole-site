module.exports = {
  plugins: [
    require("tailwindcss"),
    require("postcss-font-display")({ display: "optional", replace: true }),
    require("autoprefixer"),
  ],
};
