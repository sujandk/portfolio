/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      customDraper: ["Draper"],
      customNeue: ["Neue"],
    },
    extend: {
      colors:{
        primary:{
          dark:'#080402',
          light:'#E9E9E9',
        },
        customGrey:'#B1B1B1',
        customHover:'#444444',
       
        }
      },
    },
  plugins: [],
}