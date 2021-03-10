module.exports = {
  purge: ["./**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nunito:
          "'Nunito', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
      },
      boxShadow: {
        pink:
          "0 20px 25px -5px rgba(227, 77, 176, 0.2), 0 10px 10px -5px rgba(227, 77, 176, 0.06)",
        orange:
          "0 20px 25px -5px rgba(255, 155, 129, 0.3), 0 10px 10px -5px rgba(255, 155, 129, 0.1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};