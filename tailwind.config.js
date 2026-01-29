/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#101828',
        text: '#475467',
        gray: '#6C717B',
        button: '#E44848',
        'button-hover': '#D84343',
        rating: '#FFC531',
        'gray-light': '#DADDE1',
        badges: '#F2F4F7',
        inputs: '#F7F7F7',
      },
      borderColor: {
        DEFAULT: '#DADDE1',
      },
    },
    container: {
      center: true,
      screens: {
        '2xl': '1312px',
      },
    },
  },
  plugins: [],
};
