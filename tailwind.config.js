/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#17171F',
        accent: '#009688',
      },
    },
    fontFamily: {
      heading: ['Roboto Mono', 'monospace'],
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}