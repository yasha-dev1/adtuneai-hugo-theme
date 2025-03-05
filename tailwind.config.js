/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.{html,md}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#3B82F6',
          50: '#EBF2FE',
          100: '#DCEAFG',
          200: '#BAD6FB',
          300: '#98C1F9',
          400: '#76ADF7',
          500: '#3B82F6',
          600: '#0B61F1',
          700: '#084BBC',
          800: '#063587',
          900: '#042052',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}
