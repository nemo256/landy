/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'book': "url('/book.jpg')"
      },
      colors: {
        primary: 'black',
        secondary: '#42855B',
        accent: 'lightgreen',
        white: '#D7D7D7'
      },
      screens: {
        'xs': '0px',
      },
    },
  },
  plugins: [],
}
