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
        'header-flex':'10px 0',
        '60': '60px'
      },
      backgroundColor:{
        'haefwhite': 'rgba(255, 255, 255, 0.5)',
      },
      margin:{
        'cen':'0 auto',
      },
      animation: {
          "slide-in-fwd-left": "slide-in-fwd-left 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both"
      },
      keyframes: {
          "slide-in-fwd-left": {
              "0%": {
                  transform: "translateZ(-100px) translateX(-100px)",
                  opacity: "0"
              },
              to: {
                  transform: "translateZ(0) translateX(0)",
                  opacity: "1"
              }
          }
      },
    },

  },
  plugins: [],
}
