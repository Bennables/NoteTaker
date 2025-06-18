/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // this must include all your component paths
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
