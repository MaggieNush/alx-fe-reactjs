import { colors } from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#808080',
        customPurple: '#A020F0',
      },
    },
  },
  plugins: [],
}
