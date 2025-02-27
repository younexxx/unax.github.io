/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        minecraft: ['"Minecraft"', 'monospace', 'system-ui'],
      },
      colors: {
        minecraft: {
          green: '#5E7A45',
          darkGreen: '#4A6235',
          gray: '#272B2D',
          darkGray: '#1D1F21',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};