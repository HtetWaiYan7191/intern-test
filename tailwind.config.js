/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'footer-black': '#0D0D0D',
        title: '#18181B',
        gray: '#000000',
        'btn-black': '#18181C',
        'purple-linear': '#AB96F8',
        secondary: '#F9FAFB',
      },
    },
  },
  plugins: [],
};
