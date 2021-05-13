module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] }, 
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: '#99B898',
        secondary:'#FECEA8',
        customRed:'#FF847C',
        black:'#2A363B',
      },
      outline:{
        primary : "2px solid #99B898"
      }
    },
  },
  variants: {
    extend: {
      outline: ['hover', 'active'],
    },
  },
  plugins: [],
}