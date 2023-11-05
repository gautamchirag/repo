/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        nd: '320px', // Custom breakpoint at 320px
        sam: '480px', // Custom breakpoint at 480px
      },
    },
  },
  plugins: [],
};
