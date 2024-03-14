/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'footer-black': '#0D0D0D',
        'title': '#18181B',
        'gray': '#000000',
        'btn-black': '#18181C',
        'purple-linear': '#AB96F8',
        'pink-linear': '#FF99D0',
        'primary-navy': '#1E293B',
      }
    },
  },
  plugins: [],
}

