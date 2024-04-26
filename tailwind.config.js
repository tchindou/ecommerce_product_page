/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.js", "./index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ["Kumbh Sans"],
      },
    },
  },
  plugins: [],
};
