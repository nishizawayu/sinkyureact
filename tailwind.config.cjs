/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'sp-logos': '25%',
        'pc-logos': '10%',

      },
      padding: {
        't30': '30px 0 0 0',
        'header-flex':'10px 0'
      },
      backgroundColor:{
        'haefwhite': 'rgba(255, 255, 255, 0.5)',
      },
      margin:{
        'cen':'0 auto',
      },
    },

  },
  plugins: [],
}
