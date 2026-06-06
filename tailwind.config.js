/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#effdf5',
          100: '#d9f9e6',
          200: '#b5f1cf',
          300: '#82e4b1',
          400: '#48ce8c',
          500: '#1fb36e',
          600: '#129058',
          700: '#0f7249',
          800: '#105a3c',
          900: '#0e4a33',
          950: '#03291c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
};
