/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,ts,css}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

