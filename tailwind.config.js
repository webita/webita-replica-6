/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'webita': {
          'green': '#95C12B',
          'pink': '#B93B8C',
          'yellow': '#F7A707',
          'blue': '#41A4DC'
        }
      },
      aspectRatio: {
        'w-16': '16',
        'h-9': '9',
      }
    },
  },
  plugins: [],
};
