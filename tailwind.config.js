/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  theme: {
    extend: {
      keyframes: {
        'slide-left-and-fade': {
          '0%': { opacity: 0, transform: 'translateX(2px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'slide-down-and-fade': {
          '0%': { opacity: 0, transform: 'translateY(-2px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-right-and-fade': {
          '0%': { opacity: 0, transform: 'translateX(-2px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'slide-up-and-fade': {
          '0%': { opacity: 0, transform: 'translateY(2px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-left-and-fade': 'slide-left-and-fade 400ms',
        'slide-down-and-fade': 'slide-down-and-fade 400ms',
        'slide-right-and-fade': 'slide-right-and-fade 400ms',
        'slide-up-and-fade': 'slide-up-and-fade 400ms',
      },
      fontFamily: {
        sans: ['Poppins'],
      },
      colors: {
        primary: {
          100: '#FFF0F1',
          200: '#FFDBDF',
          500: '#FF2941',
          DEFAULT: '#FF0420',
          700: '#F71C35',
          'contrast-text': '#FFFFFF',
        },
        secondary: {
          100: '#EDF4FC',
          200: '#D7E6F9',
          DEFAULT: '#2173DF',
          700: '#1C65C4',
          'contrast-text': '#FFFFFF',
        },
        info: {
          100: '#EDF4FC',
          200: '#D7E6F9',
          DEFAULT: '#2173DF',
          700: '#1C65C4',
        },
        success: {
          100: '#EEF6EE',
          200: '#DEEDDE',
          DEFAULT: '#5BA85A',
          800: '#3F753E',
        },
        error: {
          100: '#FDF6F2',
          200: '#FAEAE0',
          DEFAULT: '#DD6B20',
          700: '#C45F1C',
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
          900: '#202327',
        },
        skelaton: '#CBD5E0',
        focus: '#2173DF',
      },
    },
  },
  plugins: [],
};
