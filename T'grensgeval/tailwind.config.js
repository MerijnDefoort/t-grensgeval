/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        catamaran: ['Catamaran', 'sans-serif']
      },
      colors: {
        primary: {
          100: '#847A6C',
          200: '#8C8173'
        },
        accent: '#BAB3AB',
        bg: {
          100: '#F7F3F0',
          200: '#EDE8E2'
        }
      }
    }
  },
  plugins: []
}
