/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    fontFamily : {
      poppins: ['Poppins','sans-serif'],
      dm : ['"DM Sans"','sans-serif'],
    },
    backgroundImage:{
      'fitness-home' : "url('/src/assets/fitness.jpg')",
    },
    
  },
  plugins: [],
}

