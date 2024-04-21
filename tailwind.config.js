/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      Averia: 'Averia Serif Libre',
      Poppins: 'Poppins'
    },
    extend: {
      backgroundImage: {
        'Hero-Image': 'URL(./src/assets/HeroImg.png)'
      }
    },
  },
  plugins: [],
}