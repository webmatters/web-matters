const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: { body: ['Open Sans'] },
    extend: {
      colors: {
        primary: colors.gray[600],
        secondary: colors.gray[500],
        cta: colors.gray[700]
      }
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: []
}
