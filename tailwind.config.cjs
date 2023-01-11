/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'dark',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // for card to fit and adjust according to screen
        'card': 'repeat(auto-fit, minmax(200px, 1fr))',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('flowbite-typography'),
  ]
}
