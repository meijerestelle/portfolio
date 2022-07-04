const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
    content: ["./src/**/*.{html,js}"],
    plugins: [
        plugin(function ({ addVariant, e, postcss }) {
        addVariant('firefox', ({ container, separator }) => {
            const isFirefoxRule = postcss.atRule({
            name: '-moz-document',
            params: 'url-prefix()',
            });
            isFirefoxRule.append(container.nodes);
            container.append(isFirefoxRule);
            isFirefoxRule.walkRules((rule) => {
            rule.selector = `.${e(
                `firefox${separator}${rule.selector.slice(1)}`
            )}`;
            });
        });
        }),
    ],
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