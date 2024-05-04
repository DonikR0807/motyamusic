/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkMain: '#1D2123',
        darkAlt: '#1A1E1F',
        darkText: '#FFFFFF',
        darkAltText: '#EFEEE0',
        lightMain: '#fffdfc',
        lightAlt: '#dadcd2',
        lightText: '#00000',
        lightAltText: '#03080a',
        yellowPrimary: '#FACD66',
        altText: '#A4C7C6',
      },
      fontFamily: {
        quicksandRegular: [
          'Quicksand-Regular',
          ...defaultTheme.fontFamily.mono,
        ],
        quicksandBold: ['Quicksand-Bold', ...defaultTheme.fontFamily.mono],
        quicksandSemiBold: [
          'Quicksand-SemiBold',
          ...defaultTheme.fontFamily.mono,
        ],
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
};
