/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-quicksand)', ...fontFamily.sans],
        heading: ['Loubag', 'sans-serif'],
      },
    },
  },
  plugins: [],
}