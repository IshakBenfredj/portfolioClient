/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
        md: '50px',
      },
    },
    extend: {
      colors : {
        'primary' : '#38BDF8',
        'secondary' : '#f250a5',
      },
      animation: {
        circleOne: 'circleOne 4s infinite',
        circleTwo: 'circleTwo 4s infinite',
      },
      keyframes: {
        circleOne: {
          '0%': {
            top: '130px'
          },
          '50%': {
            top: '150px'
          },
          '100%': {
            top: '130px'
          },
        },
        circleTwo: {
          '0%': {
            top: '10px'
          },
          '50%': {
            top: '30px'
          },
          '100%': {
            top: '10px'
          },
        }
      }
    },
  },
  plugins: [],
}