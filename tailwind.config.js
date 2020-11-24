module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#502050',
        secondary: '#ee68a4',
        grayishMagenta: '#937b92',
        lightGrayishMagneta: '#f7f2f7',
      },
      fontFamily: {
        body: 'Spartan',
      },
      fontSize: {
        xd: '.55rem',
        xdd: '.0.6rem',
      },
      backgroundImage: (theme) => ({
        malysz:
          "url('/images/bg-pattern-top-desktop.svg'), url('/images/bg-pattern-bottom-desktop.svg')",
        stoch:
          "url('/images/bg-pattern-top-mobile.svg'), url('/images/bg-pattern-bottom-mobile.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
