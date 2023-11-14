const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            primary: {
              foreground: '#fff',
              DEFAULT: '#1a237e'
            },
            secondary: {
              DEFAULT: '#17171b'
            }
          }
        },
        dark: {
          layout: {},
          colors: {}
        }
      }
    })
  ]
}
