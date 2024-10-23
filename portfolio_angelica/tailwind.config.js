/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-900': '#1a202c', 
        'pastel-200': '#c0c0c0', 
      },
    },
  },
  plugins: [],
}

