const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  experimental: {
    applyComplexClasses: true,
    defaultLineHeights: true,
    extendedFontSizeScale: true,
    extendedSpacingScale: true,
    uniformColorPalette: true,
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
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
        108: '27rem',
        168: '42rem',
      },
    },
  },
  variants: {
    filter: ['responsive', 'hover']
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-filters'),
    require('@tailwindcss/ui'),
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
