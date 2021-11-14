module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'ardmMainOne': '#1C1B24',
        'ardmMainTwo': '#1d1c29',
        'ardmBlack': '#020411',
        'ardmYellow': '#2AD5FC',
        'ardmMobileMain': '#41404F'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
