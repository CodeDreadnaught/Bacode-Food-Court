/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
      },
      backgroundImage: {
        "hero-image": "url('/src/assests/hero-image.jpg')",
        "desktop-hero-image": "url('/src/assests/desktop-hero-image.jpg')",
      },
    },
  },
  plugins: [
    plugin(({ addBase, addUtilities }) => {
      addBase({
        "html": { "@apply scroll-smooth": {} },
        "body": { "@apply text-base": {} },
        "body::-webkit-scrollbar": { "@apply hidden": {} },
        "input, textarea": { "@apply bg-transparent": {} },
        "input:focus, textarea:focus, select:focus, button:focus": { "@apply outline-none": {} },
        "input[type='number']::-webkit-inner-spin-button, input[type='number']::-webkit-outer-spin-button": { "@apply hidden": {} },
      });
      addUtilities({
        ".center": { "@apply grid place-items-center": {} },
      });
    }),
  ],
}