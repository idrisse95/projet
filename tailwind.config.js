/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'titre': ['Philosopher']

    },




    extend: {
      colors: {
        'bl': '#2f4858',
        'vr': '#5a8f7b'
      }
    },
  },
  plugins: [],
}