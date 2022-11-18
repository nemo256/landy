/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'book': "url('/book.jpg')",
        'wave1': "url('/wave1.svg')",
        'wave2': "url('/wave2.svg')",
      },
      colors: {
        primary: 'black',
        secondary: '#42855B',
        accent: 'lightgreen',
        white: '#D7D7D7'
      },
    },
  },
  plugins: [],
}
