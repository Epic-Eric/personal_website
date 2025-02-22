/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#111111',
      },
      keyframes: {
        'trace-fade': {
          '0%': { opacity: 0, transform: 'translateY(100%)' },
          '50%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(-100%)' },
        },
      },
      animation: {
        'trace-fade': 'trace-fade 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
} 