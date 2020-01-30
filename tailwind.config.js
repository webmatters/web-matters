const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: { body: ['Open Sans'] },
    extend: {
      colors: {
        primary: colors.gray[400],
        secondary: colors.gray[500],
        cta: colors.gray[600]
      }
    }
  },
  variants: {},
  plugins: []
}
