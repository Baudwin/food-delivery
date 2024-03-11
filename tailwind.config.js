/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'min': '320px', 'max': '590px'},
      
        'md': {'min': '600px', 'max': '1023px'},
      
        'lg': {'min': '1024px', 'max': '1581px'},
      
        'xl': {'min': '1280px', 'max': '1535px'},
      
        '2xl': {'min': '1536px'},
      },
    },
  },
  plugins: [],
}



