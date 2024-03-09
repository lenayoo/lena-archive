/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Poppins', 'sans-serif'], 
      },
      colors: {
        "pale-gray": "#B5C0D0"
      }
    },
  },
  plugins: [],
}

