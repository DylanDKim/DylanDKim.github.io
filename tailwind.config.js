module.exports = {
  content: ["./dist/*.html", "./src/**/*.{js, jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        offBlack: "#585858",
        offWhite: "#FAF9F6",
        strongpurp: "#6d19de",
      },
    },
  },
  plugins: [],
};
