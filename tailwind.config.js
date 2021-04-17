module.exports = {
  mode: "jit",
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    listStyleType: {
      none: "none",
      decimal: "decimal",
      square: "square",
    },
    extend: {
      minWidth: {
        '24': '8rem',
      }
    },
  },
  variants: {
    extend: {
      textColor: ['active'],
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
