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
     ringColor:{
       primary:'#99B898',
     } 
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active','focus'],
      ringColor: ['hover', 'active','focus'],
    },
  },
  plugins: [],
}