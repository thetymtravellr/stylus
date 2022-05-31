module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'offer': "url('https://i.ibb.co/gdys9w0/offerbg.png')"
      },
      colors: {
        purple: {
          400: "#b9a4fc",
          500: "#997cf7",
          700: "#8966fa",
          900: "#5330c7"
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
        'hero': ["url('/src/Assets/Images/hero.jpg')"]
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
        },
      }
    ],
  },
}
