// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette de verts
        'primary': {
          '50': '#f0fdf4',
          '100': '#dcfce7',
          '200': '#bbf7d0',
          '300': '#86efac',
          '400': '#4ade80',
          '500': '#22c55e',
          '600': '#16a34a',
          '700': '#15803d',
          '800': '#166534',
          '900': '#14532d',
        },
        // Couleurs de fond sombres
        'background': '#121212',
        'surface': '#1E1E1E',
        'surface-hover': '#2D2D2D',
        'border': '#404040',
        'text': {
          'primary': '#FFFFFF',
          'secondary': '#A3A3A3',
          'tertiary': '#737373',
        }
      },
    },
  },
  plugins: [],
}