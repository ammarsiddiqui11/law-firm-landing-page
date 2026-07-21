/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0F1B2D', 900: '#0B1523', 800: '#0F1B2D', 700: '#1C2C45' },
        paper: '#F7F5F0',
        brass: { DEFAULT: '#B08D4F', light: '#C9AD79', dark: '#8C6D38' },
        slate: '#5B6472',
        hairline: '#D9D3C7',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Source Sans 3"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
