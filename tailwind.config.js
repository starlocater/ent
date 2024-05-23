/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      jersey: ['"Jersey 10"', 'sans-serif'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',  
    }
  },
  plugins: [],
}

