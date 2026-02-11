/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0a2a3a',
          dark: '#083a4f',
          cyan: '#169fcd',
          light: '#f3f7fa',
          text: '#1f3442',
        },
      },
      boxShadow: {
        soft: '0 10px 30px -16px rgba(8, 58, 79, 0.35)',
      },
    },
  },
  plugins: [],
}
