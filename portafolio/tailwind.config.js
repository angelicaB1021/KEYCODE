/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelPink: '#F9C6D1',
        pastelBlue: '#C6E2F9',
        pastelGreen: '#D1F9D1',
        pastelPurple: '#E2C6F9',
        pastelYellow: '#F9F3C6',
      },
    },
  },
  plugins: [],
}
