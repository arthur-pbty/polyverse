/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.{edge,js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'violet': '#1c1433',
        'jaune': '#FFCC00',
        'vert': '#009B4D',

        'violet-field': '#2e244d',
      },
    },
  },
  plugins: [],
}