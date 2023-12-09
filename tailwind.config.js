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
    },
  },
  plugins: [],
}