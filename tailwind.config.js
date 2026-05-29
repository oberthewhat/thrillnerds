/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'cursive'],
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        dark: {
          DEFAULT: '#0C0C0E',
          2: '#131316',
          3: '#1A1A1F',
          4: '#222228',
        },
      },
    },
  },
  plugins: [],
}
