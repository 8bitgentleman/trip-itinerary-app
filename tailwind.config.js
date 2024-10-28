/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'hermes-red': '#E31837',
        'hermes-red-dark': '#B31329',
        'hermes-teal': '#00838A',
        'hermes-cream': '#F5F5F0',
        'hermes-sand': '#E5E5E0',
      },
      height: {
        'screen-safe': '100vh',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};