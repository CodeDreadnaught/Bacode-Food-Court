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
      animation: {
        slideUp: 'slideUp 1s forwards',
        slideDown: 'slideDown 1s forwards',
      },
      keyframes: {
        slideUp: {
          'from': { transform: 'translateY(3rem)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          'from': { transform: 'translateY(-8rem)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
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
        ".prevent-scrolling": { "@apply overflow-hidden": {} },
      });
    }),
  ],
}