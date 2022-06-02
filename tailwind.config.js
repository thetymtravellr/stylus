module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          500: '#9669f5',
          600: '#773bf7',
          700: '#8247ff',
          800: '#5520c7',
          900: '#430eb3',
        },
        indigo: {

        },
        slate: {
          100: "#e9ecef",
          200: "#ced4da",
          300: "#adb5bd",
          400: "#242423",
          700: "#252422",
          800: "#353535",
          900: "#212529"
        },
        gray: {

        }

      },
      fontFamily: {
        'robotoFlex': ['Roboto Flex', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'fredokaOne': ['Fredoka One', 'cursive']
      },
      backgroundImage: {
        'hero': ["url('https://i.ibb.co/0r2jfNb/camilla-carvalho-Cgb4g-MKRc-MA-unsplash-2-1.png')"]
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6b29f8",
          secondary: "#f6d860",
          white: '#fff',
          accent: "#37cdbe",
          neutral: "#3d4451",
          active: "#21de34",
          "base-100": "#ffffff",
          "primary-dark": '#5b29a9'
        },
      }
    ],
  },
}
