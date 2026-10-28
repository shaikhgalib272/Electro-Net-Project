/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#185FA5',
          darkBlue: '#0C447C',
          lightBlue: '#E6F1FB',
          borderBlue: '#B5D4F4',
          yellow: '#EF9F27',
          darkYellow: '#BA7517',
        }
      }
    },
  },
  plugins: [],
}