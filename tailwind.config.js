const colors = require('tailwindcss/colors')

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            aspectRatio: {
              '2/1': '2 / 1',
              '1/1': '1 / 1',
            },
            fontFamily: {
                'manrope' : ['Manrope', 'sans-serif'],
                'inter' : ['Inter', 'sans-serif'],
            }
        },

        colors: {
            stone: colors.stone,
            'white': '#f8f8f8',
            'offwhite': '#f2f2f2',
            'black': '#191919',
            'darkblue': '#3E646F',
            'blue': '#88B0BC',
            'link': '#1D7996',
            neutral: colors.neutral,
        }
    }
  }