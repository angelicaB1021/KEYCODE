/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          700: '#2D2D2D',
          800: '#1F1F1F',
          900: '#121212',
        },
        pastel: {
          100: '#E0B0FF',
          200: '#C39BD3',
          300: '#D1C4E9',
        },
      },
    },
  },
  plugins: [],
}

