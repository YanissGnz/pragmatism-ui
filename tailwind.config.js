/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'slide-left-and-fade': {
          '0%': { opacity: 0, transform: 'translateX(2px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        'slide-down-and-fade': {
          '0%': { opacity: 0, transform: 'translateY(-2px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'slide-right-and-fade': {
          '0%': { opacity: 0, transform: 'translateX(-2px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        'slide-up-and-fade': {
          '0%': { opacity: 0, transform: 'translateY(2px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        'slide-left-and-fade': 'slide-left-and-fade 400ms',
        'slide-down-and-fade': 'slide-down-and-fade 400ms',
        'slide-right-and-fade': 'slide-right-and-fade 400ms',
        'slide-up-and-fade': 'slide-up-and-fade 400ms'
      },
      fontFamily: {
        sans: ['Poppins']
      },
      colors: {
        primary: {
          light: '#79E1F6',
          DEFAULT: '#0EB1D2',
          dark: '#086172',
          'contrast-text': '#FFFFFF'
        },
        secondary: {
          light: '#F1D26A',
          DEFAULT: '#ECC032',
          dark: '#83670C',
          'contrast-text': '#000000'
        },
        info: {
          light: '#4FC3F7',
          DEFAULT: '#29B6F6',
          dark: '#0288D1',
          'contrast-text': '#000000'
        },
        success: {
          light: '#81c784',
          DEFAULT: '#66bb6a',
          dark: '#388e3c',
          'contrast-text': '#000000'
        },
        error: {
          light: '#E57373',
          DEFAULT: '#F44336',
          dark: '#D32F2F',
          'contrast-text': '#FFFFFF'
        },
        warning: {
          light: '#ffb74d',
          DEFAULT: '#ffa726',
          dark: '#DD6B20',
          'contrast-text': '#FFFFFF'
        },
        highlight: '#F3CF00',
        neutral: {
          DEFAULT: '#FFFFFF',
          100: '#F1F4F9',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#A9B9CC',
          500: '#8496AE',
          600: '#68778D',
          700: '#4A5568',
          800: '#323A43',
          900: '#202327'
        },
        skelaton: '#CBD5E0',
        focus: '#2173DF'
      }
    }
  },
  plugins: []
};
