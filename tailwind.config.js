/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Inter, sans-serif',
      serif: 'Lora, serif',
      mono: 'Inconsolata, monospace',
    },
    extend: {
      backgroundColor: {
        'brand-main': '#a445ed',
        'brand-red': '#ff5252',
        'brand-light-500': '#757575',
        'brand-light-300': '#e9e9e9',
        'brand-light-200': '#f4f4f4',
        'brand-dark-800': '#050505',
        'brand-dark-700': '#1f1f1f',
        'brand-dark-600': '#2d2d2d',
        'brand-dark-500': '#3a3a3a',
      },
      colors: {
        'brand-main': '#a445ed',
        'brand-red': '#ff5252',
        'brand-light-500': '#757575',
        'brand-light-300': '#e9e9e9',
        'brand-light-200': '#f4f4f4',
        'brand-dark-800': '#050505',
        'brand-dark-700': '#1f1f1f',
        'brand-dark-600': '#2d2d2d',
        'brand-dark-500': '#3a3a3a',
      },
      borderColor: {
        'brand-light-300': '#e9e9e9',
      },
      boxShadow: {
        brand: '0px 0px 26px 8px rgba(164,69,237,0.77)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
