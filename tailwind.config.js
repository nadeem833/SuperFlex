/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      xs: '416px',
      sm: '640px',
      md: '768px',
      laptop: '1024px',
      lg: '1280px',
      '2xl': '1536px'
    }
  },
  plugins: []
};
