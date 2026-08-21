/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fbf9f8',
        surface: {
          DEFAULT: '#fbf9f8',
          dim: '#dcd9d9',
          bright: '#fbf9f8',
          lowest: '#ffffff',
          low: '#f5f3f2',
          container: '#f0eded',
          high: '#eae8e7',
          highest: '#e4e2e1',
        },
        primary: {
          DEFAULT: '#163422',
          container: '#2d4b37',
          hover: '#224832',
        },
        secondary: {
          DEFAULT: '#516534',
          container: '#d3ebad',
        },
        text: {
          primary: '#1b1c1c',
          secondary: '#424843',
        },
        outline: {
          DEFAULT: '#727972',
          variant: '#c2c8c0',
        },
        error: {
          DEFAULT: '#ba1a1a',
          container: '#ffdad6',
        }
      },
      fontFamily: {
        serif: ['"Noto Serif"', '"EB Garamond"', 'serif'],
        sans: ['"Be Vietnam Pro"', '"Manrope"', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
      }
    },
  },
  plugins: [],
}
