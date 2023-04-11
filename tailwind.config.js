/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': 'hsl(6, 63%, 50%)',
        'dark-red': 'hsl(6, 70%, 34%)',
        'desaturated-dark-blue': 'hsl(225, 21%, 49%)',
        'desaturated-dark-blue(key-shadow)': 'hsl(224, 28%, 35%)',
        'very-dark-desaturated-blue(main-background)': 'hsl(222, 26%, 31%)',
        'very-dark-desaturated-blue(key-background)': 'hsl(223, 31%, 20%)',
        'grayish-orange': 'hsl(28, 16%, 65%)',
        'light-grayish-orange': 'hsl(30, 25%, 89%)',
        'very-dark-grayish-blue': 'hsl(221, 14%, 31%)'
      }
    },
  },
  plugins: [],
}

