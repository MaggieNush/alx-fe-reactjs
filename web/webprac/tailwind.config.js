/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'maroon': '#D5573B',
        'light-brown': '#F7ECE1'
      }
    },
  },
  plugins: [],
}

