/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: 'rgb(11, 229, 138)', // Define your custom color here
      },
    },
  },
  plugins: [require('daisyui')],
}

