/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '4xl': '1780px',
      },
      keyframes: {
        dropdown: {
          '0%': { transform: 'scaleY(0)', opacity: '0' },
          '100%': { transform: 'scaleY(1)', opacity: '1' },
        },
      },
      animation: {
        dropdown: 'dropdown 0.4s ease-out forwards',
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
}
