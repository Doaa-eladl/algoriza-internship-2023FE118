/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'regal-black': '#1B1F2D',
        'primary-black': '#181818',
        'light-blue': '#2F80ED;',
        'light-gray': '#F2F2F2',
        'dark-gray': '#4F4F4F',
        'txt-gray': '#333'
      },
      backgroundImage: {
        'mobile-bg': "url('assets/mobilebg.png')",
      }
    },
  },
  plugins: [],
}

