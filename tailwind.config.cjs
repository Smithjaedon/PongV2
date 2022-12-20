/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js,svelte}", "./src/lib/*.{html,js,svelte}", "*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
