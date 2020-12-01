const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  experimental: {},
  future: {},
  theme: {
    extend: {
      boxShadow: {
        'outline-light-green': `0 0 0 3px rgba(174, 213, 129, 0.45)`,
      },
      colors: {
        'light-green': {
          50: '#f1f8e9',
          100: '#dcedc8',
          200: '#c5e1a5',
          300: '#aed581',
          400: '#9ccc65',
          500: '#8bc34a',
          600: '#7cb342',
          700: '#689f38',
          800: '#558b2f',
          900: '#33691e',
        },
        'cool-gray': colors.coolGray,
        lime: colors.lime,
      },
      filter: {
        none: 'none',
        grayscale: 'grayscale(1)',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      height: {
        88: '22rem',
        100: '25rem',
        108: '27rem',
        168: '42rem',
      },
      typography: (theme) => ({
        default: {
          css: {
            color: theme('colors.coolGray.700'),
          },
        },
        lg: {
          css: {
            'blockquote p:first-of-type': {
              fontSize: defaultTheme.fontSize.lg,
              lineHeight: '1.6666667em',
              fontWeight: '500',
              fontStyle: 'italic',
            },
            blockquote: {
              borderLeftColor: theme('colors.coolGray.600'),
            },
            'blockquote p': {
              '&::before': {
                content: 'none !important',
              },
              '&::after': {
                content: 'none !important',
              },
            },
            'p:first-of-type': {
              fontSize: '1.25rem',
              lineHeight: '1.8em',
              fontWeight: defaultTheme.fontWeight.semibold,
            },
            cite: {
              color: theme('colors.coolGray.600'),
              fontWeight: '500',
            },
          },
        },
      }),
    },
  },
  variants: {
    filter: ['hover'],
    ringColor: ['focus', 'focus-visible'],
    ringOffsetColor: ['focus-visible'],
    ringOffsetWidth: ['focus-visible'],
    ringWidth: ['focus-visible'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-filters'),
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
