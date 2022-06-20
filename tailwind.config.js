const colors = require('tailwindcss/colors')

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
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
            neutral: colors.neutral,
        }
    },
    plugins: [],
  }