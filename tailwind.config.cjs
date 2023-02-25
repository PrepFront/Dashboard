/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#524F4F',
        'secondry': '#F3F6F7',
        'primary-dark': '#474646',
        'gray': {
          800: '#959595',
          200: '#E8E8E8',
        },
        'green': '#59D783'
      }
    },
  },
  plugins: [],
}
