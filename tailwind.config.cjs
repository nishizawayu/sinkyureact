const defaultTheme = require('tailwindcss/defaultTheme')

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
        "slide-in-fwd-left": "slide-in-fwd-left 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "shadow-inset-center": "shadow-inset-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-in-bck-left": "slide-in-bck-left 2s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-in-bck-bottom": "slide-in-bck-bottom 2s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both"
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
        },
        "shadow-inset-center": {
          "0%": {
              "box-shadow": "inset 0 0 0 0 transparent"
          },
          to: {
              "box-shadow": "inset 0 0 14px 0 rgba(0, 0, 0, .5)"
          }
        },
        "slide-in-bck-left": {
          "0%": {
              transform: "translateZ(700px) translateX(-400px)",
              opacity: "0"
          },
          to: {
              transform: "translateZ(0) translateX(0)",
              opacity: "1"
          }
        },
        "slide-in-bck-bottom": {
                    "0%": {
                        transform: "translateZ(700px) translateY(300px)",
                        opacity: "0"
                    },
                    to: {
                        transform: "translateZ(0) translateY(0)",
                        opacity: "1"
                    }
                }
      },
      backgroundImage: {
        'sita': "url('border.png')",
      }
    },

  },
}
