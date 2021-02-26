module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        google: {
          blue: '#4285F4',
          red: '#EA4335',
          yellow: '#FBBC05',
          green: '#34A853'
        }
      },
      height: {
        board: '600px',
        square: '100px'
      },
      width: {
        board: '600px',
        square: '100px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
